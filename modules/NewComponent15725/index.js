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
export class Blank extends React.Component {
  state = {}
  render = () => (
    <View title="Button12345" color="#FF8040" style={styles.View_1}>
      <View style={styles.View_2} />
      <Text>Sample text content</Text>
      <CheckBox
        title="Is this a stray cat?"
        checked={this.state.CheckBox_4}
        onPress={nextChecked => this.setState({ CheckBox_4: nextChecked })}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: { overflow: "visible" },
  View_2: { overflow: "visible" },
  Text_3: {},
  CheckBox_4: {}
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default {
  title: "NewComponent15725",
  navigator: connect(mapStateToProps, mapDispatchToProps)(Blank)
}
