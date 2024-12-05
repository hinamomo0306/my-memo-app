import { View, StyleSheet } from "react-native"
import { router, useNavigation } from "expo-router"

// useEffectはReact Hockでcomponentを一度だけUpdateする
import { useEffect } from "react"

// VectorIconsから指定のアイコンをインポート
// import { Feather } from "@expo/vector-icons"
// import Header from "../../components/header"
import MemoListItem from "../../components/memoListItem"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"
import LogOutButton from "../../components/logoutButton"

const handlePress = (): void => {
  router.push("/memo/create")
}


// useEffectの配列の中には依存関係を指定する
// 変数が変更されるたびにuseEffectを実行したい場合はcountなど変数を入れとく
// 画面が更新されたときに一度だけuseNavigationを実行する
const List = (): JSX.Element => {
  const navigation = useNavigation ()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <LogOutButton /> }
    })
    }, [])

  return(
    // 一番外枠
    <View style={styles.container}>
      <View>
        <MemoListItem />
        <MemoListItem />
        <MemoListItem />
      </View>
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
