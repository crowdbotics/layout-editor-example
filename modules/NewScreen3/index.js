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
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@modules"
export class New extends React.Component {
  state = {}
  render = () => (
    <View title="Button12345" color="#FF8000" style={styles.View_undefined}>
      <View style={styles.View_undefined} />
    </View>
  )
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = () => {
  return {}
}

export default {
  title: "NewScreen3",
  navigator: connect(mapStateToProps, mapDispatchToProps)(New)
}
