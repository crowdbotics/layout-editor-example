import React from "react"
import { View } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input
} from "react-native-ui-kitten"

import { connect } from "react-redux"
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin"
import { styles } from "./styles"
import * as calendarActions from "../../redux/actions"
import ErrorBox from "../../../../components/ErrorBox"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  state = {}

  render = () => (
    <View style={this.props.themedStyle.View_1}>
      <Button
        style={this.props.themedStyle.Button_4}
        onPress={() => alert("Pressed!")}
      >
        Buttonoksomething
      </Button>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  View_1: {
    overflow: "visible",
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "stretch",
    alignContent: "stretch",
    borderStyle: "solid",
    backgroundSize: "auto"
  },
  Button_4: { overflow: "visible", borderStyle: "solid" }
}))
