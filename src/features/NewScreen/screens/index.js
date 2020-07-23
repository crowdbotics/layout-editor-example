import React, { Component } from "react"
import { View, Image, ImageBackground } from "react-native"
import { Text, Layout, Button } from "react-native-ui-kitten"

import Slider from "@react-native-community/slider"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin"
import { styles } from "./styles"
import * as calendarActions from "../../redux/actions"
import ErrorBox from "../../../../components/ErrorBox"
export class _New extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <CbFlex title="Button12345" color="#FF8040" style={{ overflow: "visible" }}>
      <CbFlex style={{ overflow: "visible" }} />
    </CbFlex>
  )
}

export default New = withStyles(_New, theme => ({
  container: { backgroundColor: theme["color-basic-100"] }
}))
