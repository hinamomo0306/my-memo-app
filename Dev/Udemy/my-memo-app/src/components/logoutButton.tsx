import { TouchableOpacity, Text, Alert, StyleSheet } from "react-native"
import { signOut } from "firebase/auth"
import { router } from "expo-router"
import { auth } from "../config"

const handlePress = (): void => {
  console.log("関数が呼び出されました")
  signOut(auth)
    .then(() => {
      console.log("サインアウト成功")
      Alert.alert("ログアウトしました")
      router.replace("/auth/log_in")
    })
    .catch(() => {
      Alert.alert("ログアウトに失敗しました")
    })
}

const LogOutButton = (): JSX.Element => {
  return(
    <TouchableOpacity 
      onPress={() => { console.log("TouchableOpacity pressed"); handlePress()}}
      hitSlop={{top:30, bottom:30, left:30, right:30}}
    >
      <Text style={styles.text}>ログアウト</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 12,
    lineHeight: 24,
    color: "rgba(255,255,255,0.7)",
    fontWeight: "bold"
  } 
})

export default LogOutButton
