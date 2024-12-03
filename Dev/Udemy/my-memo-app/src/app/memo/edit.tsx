import { View, TextInput, StyleSheet } from "react-native"

import Header from "../../components/header"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"

const Edit = (): JSX.Element => {
  return(
    <View style={styles.container}>
      <Header />
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.textContainer} value={"買い物\nリスト"} />
      </View>
      <CircleButton>
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inputContainer: {
    paddingVertical: 32,
    paddingHorizontal: 27,
    flex: 1
  },
  textContainer: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24
  }
})

export default Edit
