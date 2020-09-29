import { createStackNavigator } from "react-navigation-stack"
import New from "./screens"
export default NewNavigator = createStackNavigator(
  { New: { screen: New } },
  { initialRouteName: "New" }
)
