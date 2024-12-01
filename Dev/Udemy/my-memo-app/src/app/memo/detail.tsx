import { View, Text, ScrollView } from "react-native"

import Header from "../../components/header"
import CircleButton from "../../components/circleButton"

const Detail = (): JSX.Element => {
  return(
    <View>
      <Header />
      <View>
        <Text>買い物リスト</Text>
        <Text>2024年11月30日 20:00</Text>
      </View>

      <ScrollView>
        <Text>
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

      <CircleButton>+</CircleButton>

    </View>
  )
}

export default Detail
