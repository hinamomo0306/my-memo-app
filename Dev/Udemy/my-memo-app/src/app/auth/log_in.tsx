import { View, Text, TextInput, StyleSheet } from "react-native"
import Header from "../../components/header"
import Button from "../../components/button"

const LogIn = () => {
  return(
    <View style = {styles.container}>
      <Header />
      <View style={styles.inner}>
        <Text style={styles.title}>Log In</Text>
        <TextInput style={styles.input} value="email address" />
        <TextInput style={styles.input}  value="password" />

        <Button label="Submit" />

        <View style={styles.footer}>
          <Text style={styles.footerText}>Not Registered?</Text>
          <Text style={styles.footerLink}>Sign Up Here!</Text>
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
