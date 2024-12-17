import { Redirect, router } from "expo-router"

// Login状態を監視するコンポーネント
import { onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react"
import { auth } from "../config"

// useEffectで一度切りの処理とする=>onAuthStateChangedでuserのLogin状態を引数で受け取る=>If関数でuserがnullではなければメモリストに遷移
const Index = (): JSX.Element => {
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user !== null) {
        router.replace("/memo/list")
      }
    })
  }, [])
  return <Redirect href={"auth/anonymous_log_in"} />
}

export default Index
