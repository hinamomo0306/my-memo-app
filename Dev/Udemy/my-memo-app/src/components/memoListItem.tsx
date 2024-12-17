// React Nativeのコンポーネントをインポート
import { 
  View, Text, TouchableOpacity, StyleSheet, Alert
} from "react-native" // UI要素とスタイルを提供するモジュール

import Icon from "./icon" // アイコン表示用のコンポーネントをインポート
import { Link } from "expo-router" // ルーティングを提供するexpo-routerをインポート
import { deleteDoc, doc } from "firebase/firestore" // Firestoreのドキュメントを操作するための関数をインポート
import { auth, db } from "../config" // Firebaseの認証とデータベースの設定をインポート
import { type Memo } from "../../types/memo" // Memo型のタイプをインポート

// Propsの型を定義
interface Props{
  memo: Memo // Memo型のデータを受け取るためのprops
}

// メモを削除するための関数
const handlePress = (id:string): void => {
  if (auth.currentUser === null) {return} // ログインしていない場合は処理を終了

  // Firestoreのドキュメントのリファレンスを取得
  const ref = doc(db, `users/${auth.currentUser.uid}/memos`, id)

  // 削除の確認アラートを表示
  Alert.alert("メモを削除します", "実行しますか?", [
    {
      text: "キャンセル" // キャンセルボタン
    },
    {
      text: "削除する", // 削除を確定するボタン
      style: "destructive", // iOSの要素で、削除という感じの要素を描画
      onPress: () => { // ボタンが押された場合の処理
        deleteDoc(ref) // Firestoreのドキュメントを削除
          .catch(() => { Alert.alert("削除に失敗しました") }) // 失敗した場合のエラーハンドリング
      }
    }
  ])
}

// メモ一覧のリスト要素を表示するコンポーネント
const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props // propsからmemoの値を取得
  const { bodyText, updatedAt } = memo // memoからbodyTextとupdatedAtを取得

  if (bodyText === null || updatedAt === null) { return null } // bodyTextかupdatedAtがnullの場合はリストを表示しない

  // updatedAtはタイムスタンプ型のためtoDate()でDate型に変換、toLocaleStringで文字列に変換
  const dataString = updatedAt.toDate().toLocaleString("jp-JP")

  return (
    // メモの詳細ページへリンク
    <Link 
      href={{ pathname: "/memo/detail", params: { id: memo.id }}} // リンク元のパスとパラメータ
      asChild // Linkの子要素として設定
    >
      {/* タップするとリンク元に移動 */}
      <TouchableOpacity style={styles.memoListItem}> 
        <View> 
          {/* メモのタイトル */}
          <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
          {/* 更新日時 */}
          <Text style={styles.memoListItemDate}>{dataString}</Text>
        </View>

        {/* 削除ボタンのアイコン */}
        <TouchableOpacity onPress={() => { handlePress(memo.id) }}> 
          <Icon name="delete" size={32} color="#b0b0b0" />
        </TouchableOpacity>
      </TouchableOpacity>
    </Link>
  )
}

// スタイルを設定
const styles = StyleSheet.create ({
  memoListItem: { // リスト全体のスタイル
    backgroundColor: "#ffffff", // 背景色
    flexDirection: "row", // 要素を水平に配置
    justifyContent: "space-between", // 全要素を左右に居るように配置
    paddingVertical: 16, // 垂直方向のパッディング
    paddingHorizontal: 19, // 水平方向のパッディング
    alignItems: "center", // 要素を水準に配置
    borderBottomWidth: 1, // 下線の幅
    borderColor: "rgba(0,0,0,0.15)" // 下線の色
  },
  memoListItemTitle: { // メモタイトルのスタイル
    fontSize: 16, // フォントサイズ
    lineHeight: 32 // ラインハイト
  },
  memoListItemDate: { // 更新日時のスタイル
    fontSize: 12, // フォントサイズ
    lineHeight: 16, // ラインハイト
    color: "#848484" // 色はグレーに近い色
  }
})

// MemoListItemをエクスポート
export default MemoListItem
