import { 
  View, TextInput, StyleSheet, KeyboardAvoidingView
 } from "react-native"

// Firestore
import { collection, addDoc, Timestamp } from "firebase/firestore"

// React
import { useState } from "react"

// import Header from "../../components/header"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"
import { router } from "expo-router"

// from config.ts
import { db, auth } from "../../config"

// User毎のメモの作成｜実装部分
/*本文入力画面で実装したbodyTextを引数で受け渡す */
const handlePress = (bodyText: string): void => {
  /*もしcurrentUserがNullだった場合は関数を終了させる */
  if (auth.currentUser === null) {return}
  /*ログインしているUserID(uid)を識別 */
  const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
  /*addDocで上記の識別したUserに情報を追加 */
  addDoc(ref, {
    /*bodyTextとしてbodyText(本文入力画面の入力情報)を格納する */
    bodyText: bodyText,
    /*入力時刻のプロパティ */
    updatedAt: Timestamp.fromDate(new Date())
  })
    .then((docRef)=>{
      console.log("success", docRef.id)
      router.back()
    })

    .catch((error)=>{
      console.log(error)
    })

  /*
  await addDoc(collection(db,"memos"),{
    bodyText: "test2"
  })
    .catch((error)=>{
      console.log(error)
    })
  router.back()
  */
}

// 本文入力画面｜実装部分
const Create = (): JSX.Element => {
  /*
  STEP-1: [bodyText=初期値は空, setBodyText=入力された文字をbodyTextに代入] 
  STEP-2: TextInputで入力する毎にonChangeTextが発火
  STEP-3: setBodyText()関数でbodyTextを更新、引数のtextは入力された文字
  STEP-4: onPressでボタンが押された時にhandlePress関数を実行しbodyTextに値を保存
  */  
  const [bodyText,setBodyText] = useState("")
  return(
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        multiline
        style={styles.input}
        value={bodyText}
        onChangeText={(text) => { setBodyText(text) }}
        />
      </View>
      <CircleButton onPress={()=>{handlePress(bodyText)}}>
        <Icon name="check" size={40} color="#ffffff" />
      </CircleButton>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  inputContainer: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 27
  },
  input: {
    flex: 1,
    textAlignVertical: "top",
    fontSize: 16,
    lineHeight: 24
  }
})

export default Create
