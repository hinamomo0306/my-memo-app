import { 
  View, Text, TouchableOpacity, StyleSheet 
} from "react-native"

import Icon from "./icon"
import { Link } from "expo-router"

// 型の読み込み
import { type Memo } from "../../types/memo"

// 型の定義（memo）
interface Props{
  memo: Memo
}

const MemoListItem = (props: Props): JSX.Element | null => {
  const { memo } = props
  const { bodyText, updatedAt } = memo
  if (bodyText === null || updatedAt === null) { return null }
  /*updatedAtはタイムスタンプ型のためtoDate()でDate形に変換、toLocaleStringで文字列型に変換 */
  const dataString = updatedAt.toDate().toLocaleString("jp-JP")
  return (
  <Link href="/memo/detail" asChild>
    <TouchableOpacity style={styles.memoListItem}>
      <View>
        <Text numberOfLines={1} style={styles.memoListItemTitle}>{bodyText}</Text>
        <Text style={styles.memoListItemDate}>{dataString}</Text>
      </View>

      <TouchableOpacity>
        <Icon name="delete" size={32} color="#b0b0b0" />
      </TouchableOpacity>

    </TouchableOpacity>
  </Link>
  )
}

const styles = StyleSheet.create ({
  memoListItem: {
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.15)"
  },
  memoListItemTitle: {
    fontSize: 16,
    lineHeight: 32
  },
  memoListItemDate: {
    fontSize: 12,
    lineHeight: 16,
    color: "#848484"
  }
})

export default MemoListItem
