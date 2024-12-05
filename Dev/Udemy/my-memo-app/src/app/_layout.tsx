// Stack component save user history, unable to go back to the previous page
import { Stack } from "expo-router"

const Layout = (): JSX.Element => {
  return <Stack screenOptions={{
    headerStyle: {
      backgroundColor: "#467FD3"
    },
    headerTintColor: "#ffffff",
    headerTitle: "Memo App",
    headerTitleAlign: "center",
    headerBackTitle: "Back",
    headerTitleStyle: {
      fontSize: 22,
      fontWeight: "bold"
    }
  }}/>
}

export default Layout
