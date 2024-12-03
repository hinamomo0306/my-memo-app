import { View, Text, TextInput, StyleSheet } from "react-native"
import Header from "../../components/header"

const LogIn = () => {
  return(
    <View style = {styles.container}>
      <Header />
      <View>
        <Text>Log In</Text>
        <TextInput value="email address" />
        <TextInput value="password" />
      </View>
      <View>
        <Text>Submit</Text>
      </View>
      <View>
        <Text>Not Registered?</Text>
        <Text>Sign Up Here!</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1
  }
})

export default LogIn
