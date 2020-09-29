import React, { Component } from "react"
import {
  View,
  Image,
  ImageBackground,
  Text,
  Button,
  StyleSheet
} from "react-native"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { Text, Layout, Button } from "react-native-ui-kitten"
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin"
import { styles } from "./styles"
import * as calendarActions from "../../redux/actions"
import ErrorBox from "../../../../components/ErrorBox"

class _New extends Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
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

const styles = StyleSheet.create({})
function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const mapDispatchToProps = {}
export default connect(mapStateToProps, mapDispatchToProps)(New)
