import { 
  View, Text, TextInput, Alert, TouchableOpacity, StyleSheet 
} from "react-native"

import { Link, router } from "expo-router"
import Button from "../../components/button"
import { useState } from "react"
import { signInWithEmailAndPassword, signInAnonymously } from "firebase/auth"
import { auth } from "../../config"

const handlePress = (email: string, password: string): void => {
  // 通常ログイン
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

const handleAnonymousPress = (): void => {
  // 匿名ログイン
  signInAnonymously(auth)
    .then((userCredential) => {
      console.log("Anonymous UID:", userCredential.user.uid)
      router.replace("/memo/anonymous_list")
    })
    .catch((error) => {
      const { code, message } = error
      console.log(code, message)
      Alert.alert("Anonymous login failed: " + message)
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

        <View style={styles.button}>
        {/* 通常ログイン */}
        <Button label="Submit" onPress={() => {handlePress(email, password)}} />
        {/* 匿名ログイン */}
        <Button label="Anonymous Login" onPress={handleAnonymousPress} />
        </View>

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

  button: {
    flexDirection: "row"
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
