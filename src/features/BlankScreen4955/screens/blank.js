import React, { Component } from "react"
import { View } from "react-native"
import { Text, Layout, Button } from "react-native-ui-kitten"
import { connect } from "react-redux"
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin"
import { styles } from "./styles"
import * as calendarActions from "../../redux/actions"
import ErrorBox from "../../../../components/ErrorBox"

export class _Blank extends React.Component {
  static navigationOptions = {
    title: "Blank".toUpperCase()
  }

  render = () => (
    <CbFlex title="Button12345" color="#FF8040" style={{ overflow: "visible" }}>
      <CbFlex style={{ overflow: "visible" }} />
    </CbFlex>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
