import React, { Component } from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { Text, Layout, Button } from "react-native-ui-kitten"
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin"
import { styles } from "./styles"
import * as calendarActions from "../../redux/actions"
import ErrorBox from "../../../../components/ErrorBox"

export class New extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <CbFlex title="Button12345" color="#FF8040" style={styles.CbFlex_undefined}>
      <CbFlex style={styles.CbFlex_undefined} />
    </CbFlex>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(New)
