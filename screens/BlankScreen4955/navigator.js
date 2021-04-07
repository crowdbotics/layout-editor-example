import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import _Blank from "./index.js"
const Stack = createStackNavigator()
export default () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"_Blank"} component={_Blank} />
    </Stack.Navigator>
  )
}
