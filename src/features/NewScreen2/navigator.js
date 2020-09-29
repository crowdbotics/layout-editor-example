import { createStackNavigator } from "react-navigation-stack"
import New from "./screens/blank"
export default NewNavigator = createStackNavigator(
  { New: { screen: New } },
  { initialRouteName: "New" }
)
