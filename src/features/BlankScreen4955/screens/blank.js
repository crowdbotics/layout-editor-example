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

  state = {}

  render = () => (
    <CbFlex
      title="Button12345"
      color="#FF8040"
      style={this.props.themedStyle.CbFlex_undefined}
    >
      <CbFlex style={this.props.themedStyle.CbFlex_undefined} />
    </CbFlex>
  )
}

export default Blank = withStyles(_Blank, theme => ({}))
