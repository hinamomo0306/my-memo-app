import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet 
} from "react-native"

// Link Component で遷移を設定できる
import { Link, router } from "expo-router"

// import Header from "../../components/header"
import Button from "../../components/button"

// Button component's "onPress" function argument "handlePress"
// router.push push us to the specified link "/memo/list"
// router.replace => no history
// router.push => append history
const handlePress = (): void => {
  // Login
  router.replace("/memo/list")
}

const LogIn = (): JSX.Element => {
  return(
    <View style = {styles.container}>
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="email address" />
        <TextInput style={styles.input}  value="password" />

        <Button label="Submit" onPress={handlePress} />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not Registered?</Text>

          <Link href="/auth/sign_up" asChild={true}>
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
