import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import New from "./index.js"
const Stack = createStackNavigator()
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"New"} component={New} />
    </Stack.Navigator>
  )
}
