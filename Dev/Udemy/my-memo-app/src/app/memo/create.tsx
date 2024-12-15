import { 
  View, TextInput, StyleSheet, KeyboardAvoidingView
 } from "react-native"

// Firestore
import { collection, addDoc } from "firebase/firestore"

// import Header from "../../components/header"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"
import { router } from "expo-router"

// from config.ts
import { db } from "../../config"


const handlePress = (): void => {
  addDoc(collection(db, "memos"), {
    bodyText: "test"
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

const Create = (): JSX.Element => {
  return(
    <KeyboardAvoidingView behavior="height" style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput multiline style={styles.textContainer} value="" />
      </View>
      <CircleButton onPress={handlePress}>
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

export default Create
