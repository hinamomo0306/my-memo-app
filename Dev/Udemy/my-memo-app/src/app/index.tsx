import { View, Text, StyleSheet } from "react-native"

const Index = (): JSX.Element => {
  return(
    // 一番外枠
    <View style={styles.container}>
      <View>
        <View>
          <Text>Memo App</Text>
          <Text>Log Out</Text>
        </View>
      </View>
      <View>

        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年11月30日 22:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>


        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年11月30日 22:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>


        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年11月30日 22:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>


        <View>
          <View>
            <Text>買い物リスト</Text>
            <Text>2024年11月30日 22:00</Text>
          </View>
          <View>
            <Text>X</Text>
          </View>
        </View>

      </View>

      <View>
        <Text>+</Text>
      </View>
    </View>
    // 一番外枠
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Index
