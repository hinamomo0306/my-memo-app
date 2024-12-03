import { View, Text, ScrollView, StyleSheet } from "react-native"

// VectorIconsから指定のアイコンをインポート
// import { Entypo } from "@expo/vector-icons"

import Header from "../../components/header"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"

const Detail = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.memoHeader}>
        <Text style={styles.memoTitle}>買い物リスト</Text>
        <Text style={styles.memoDate}>2024年11月30日 20:00</Text>
      </View>

      <ScrollView style={styles.memoBody}>
        <Text style={styles.memoBodyText}>
          買い物リスト
          書体やレイアウトなどを確認するために使います。
          買い物リスト
          書体やレイアウトなどを確認するために使います。
          買い物リスト
          書体やレイアウトなどを確認するために使います。
          買い物リスト
          書体やレイアウトなどを確認するために使います。
        </Text>
      </ScrollView>

      <CircleButton style={{ top: 160, bottom: "auto" }}>
        <Icon name="pencil" size={30} color="#ffffff"/>
      </CircleButton>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  memoHeader: {
    backgroundColor: "#467FD3",
    height: 96,
    justifyContent: "center",
    paddingVertical: 24,
    paddingHorizontal: 19
  },
  memoTitle:{
    color: "#ffffff",
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 32
  },
  memoDate:{
    color: "#ffffff",
    fontSize: 12,
    lineHeight: 16
  },
  memoBody: {
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  memoBodyText: {
    fontSize: 16,
    lineHeight: 24,
    color: "#000000"
  }
})

export default Detail
