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
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { CheckBox_4: true }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
