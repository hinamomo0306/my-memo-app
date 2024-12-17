import { View, Text, StyleSheet, FlatList } from "react-native"
import { router, useNavigation } from "expo-router"
import { collection, onSnapshot, query, orderBy } from "firebase/firestore"
import { useEffect, useState } from "react"

import MemoListItem from "../../components/memoListItem"
import CircleButton from "../../components/circleButton"
import Icon from "../../components/icon"
import AnonymousNewSignUp from "../../components/anonymousSignUp"
import { db, auth } from "../../config"
import { type Memo } from "../../../types/memo"

const handlePress = (): void => {
  router.push("/memo/create")
}

const List = (): JSX.Element => {
  const [ memos, setMemos ] = useState<Memo[]>([])
  const navigation = useNavigation ()
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => { return <AnonymousNewSignUp /> }
    })
    }, [])

  useEffect(() => {
    if (auth.currentUser === null) {return}
    const ref = collection(db, `users/${auth.currentUser.uid}/memos`)
    const q = query(ref, orderBy("updatedAt", "desc"))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const remoteMemos: Memo[] = []
      snapshot.forEach((doc) => {
        const { bodyText, updatedAt } = doc.data()
        remoteMemos.push({
          id: doc.id,
          bodyText,
          updatedAt
        })
      })
      setMemos(remoteMemos)
    })
    return unsubscribe
  }, [])
  return(
    <View style={styles.container}>
      <Text>You are logged in as an anonymous user.</Text>
      <FlatList 
        data={memos}
        renderItem={({ item }) => { return <MemoListItem memo={item} /> }}
      />
      <CircleButton onPress={handlePress}>
        <Icon name="plus" size={40} color="#ffffff"/>
      </CircleButton>
    </View>
  )
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#f5f8fa"
  }
})

export default List
