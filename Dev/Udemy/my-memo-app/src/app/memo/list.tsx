import { View, StyleSheet, FlatList } from "react-native"
import { router, useNavigation } from "expo-router"

// Firestoreにクエリを実行するためのコンポーネント
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"

/* 
1. useEffectはReact Hockでcomponentを一度だけUpdateする
2. useStateで値を保持できるようにする
*/
import { useEffect, useState } from "react"

// VectorIconsから指定のアイコンをインポート
// import { Feather } from "@expo/vector-icons"
// import Header from "../../components/header"
import MemoListItem from "../../components/memoListItem"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"
import LogOutButton from "../../components/logoutButton"
import { db, auth } from "../../config"
import { type Memo } from "../../../types/memo"

const handlePress = (): void => {
  router.push("/memo/create")
}

/*
1. memosというObjectを作る, setMemos
2. useState内に配列を準備しこの中にデータを入れていく
*/

/* 
1. useEffectの配列の中には依存関係を指定する
2. 変数が変更されるたびにuseEffectを実行したい場合はcountなど変数を入れとく
3. 画面が更新されたときに一度だけuseNavigationを実行する
*/
const List = (): JSX.Element => {
  /*memosというObjectを作成しremoteMemosが代入される */
  const [ memos, setMemos ] = useState<Memo[]>([])
  const navigation = useNavigation ()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
    }, [])

  useEffect(() => {
    if (auth.currentUser === null) {return}
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy("updatedAt", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      /*remoteMemosという空の配列を準備 */
      const remoteMemos: Memo[] = []
      /*forEachでdocの中の値を1つずつ取り出す */
      snapshot.forEach((doc) => {
        console.log("memo", doc.data())
        /*doc.data()で返ってきた値からbodyText, updatedAtを抜き出す */
        const { bodyText, updatedAt } = doc.data()
        /*remoteMemosの中に値をpushし配列に格納 */
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      /*forEachが終わりremoteMemosをsetMemosに戻す */
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])
  return(
    /*mapプロパティは配列の中を加工して返す(コールバック関数に加工する内容を記述) */
    <View style={styles.container}>
      <FlatList 
        data={memos}
        renderItem={({ item }) => { return <MemoListItem memo={item} /> }}
      />
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#ffffff"/>
      </CircleButton>
    </View>
    // 一番外枠
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa"
  }
})

export default List
