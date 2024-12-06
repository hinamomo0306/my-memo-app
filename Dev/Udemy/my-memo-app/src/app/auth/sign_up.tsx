import { 
  View, Text, TextInput, TouchableOpacity,StyleSheet 
} from "react-native"
// import Header from "../../components/header"
import Button from "../../components/button"
// Link Component で遷移を設定できる
import { Link, router } from "expo-router"
import { useState } from "react"

// Button component's "onPress" function argument "handlePress"
// router.push push us to the specified link "/memo/list"
const handlePress = (): void => {
  // Sign_up
  router.push("/memo/list")
}

const SignUp = () => {
  const [email, setEmail] = useState("") // 初期値＝blank
  const [password, setPassword] = useState("") // 初期値＝blank

  return(
    <View style = {styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Sign Up</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => {setEmail(text)}}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => {setPassword(text)}} 
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Password"
          textContentType="password"
        />

        <Button label="Submit" onPress={handlePress} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already Registered?</Text>

          <Link href="/auth/log_in" asChild>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Log in.</Text>
            </TouchableOpacity>
          </Link>
        
        </View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#F0F4F8"
  },

  inner: {
    paddingVertical: 24,
    paddingHorizontal: 27
  },

  title:{
    fontSize: 24,
    fontWeight: "bold",
    lineHeight: 32,
    marginBottom: 24
  },

  input: {
    borderWidth: 1,
    borderColor: "#dddddd",
    backgroundColor: "#ffffff",
    height: 48,
    padding: 8,
    fontSize: 16,
    marginBottom: 16
  },

  footer: {
    flexDirection: "row"
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
    color: "#000000"
  },

  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: "#467FD3"
  }

})

export default SignUp
