import { View, StyleSheet } from "react-native"

// VectorIconsから指定のアイコンをインポート
import { Feather } from "@expo/vector-icons"

import Header from "../../components/header"
import MemoListItem from "../../components/memoListItem"
import CircleButton from "../../components/circleButton"

const List = (): JSX.Element => {
  return(
    // 一番外枠
    <View style={styles.container}>
      <Header />
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
      <CircleButton>
        <Feather name="plus" size={40} />
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
