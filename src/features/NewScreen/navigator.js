import { createStackNavigator } from "react-navigation-stack"
import New from "./screens/index.js"
export default NewNavigator = createStackNavigator(
  { New: { screen: New } },
  { initialRouteName: "New" }
)
