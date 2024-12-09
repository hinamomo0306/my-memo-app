import { 
  View, Text, TextInput, Alert, TouchableOpacity, StyleSheet 
} from "react-native"

// Link Component で遷移を設定できる
import { Link, router } from "expo-router"

// import Header from "../../components/header"
import Button from "../../components/button"
import { useState } from "react"

// Signinを実装するためのコンポーネント
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../config"

// Button component's "onPress" function argument "handlePress"
// router.push push us to the specified link "/memo/list"
// router.replace => no history | router.push => append history
const handlePress = (email: string, password: string): void => {
  // Login
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    console.log(userCredential.user.uid)
    router.replace("/memo/list")
    })
  .catch((error) => {
    const { code, message } = error
    console.log(code, message)
    Alert.alert(message)
  })
}

const LogIn = (): JSX.Element => {
  const [email, setEmail] = useState("") // 初期値＝blank
  const [password, setPassword] = useState("") // 初期値＝blank

  return(
    <View style = {styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
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

        <Button label="Submit" onPress={() => {handlePress(email, password)}} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not Registered?</Text>

          <Link href="/auth/sign_up" asChild replace>
            <TouchableOpacity>
              <Text style={styles.footerLink}>Sign Up Here!</Text>
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

export default LogIn
