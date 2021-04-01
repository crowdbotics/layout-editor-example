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
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
import { widthPercentageToDP as wp } from "react-native-responsive-screen"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = { CheckBox_4: this.props.petsCheckBox4.is_stray }
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <View title="Button12345" color="#FF8040" style={styles.View_1}>
      <View style={styles.View_2} />
      <Text>{this.props.usersText3.firstName}</Text>
      <CheckBox
        title={this.props.petsCheckBox4.stray_info}
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
  return {
    usersText3: state.apiReducer.users
      .filter(usersText3 => usersText3.firstName == "John")
      .sort((a, b) => {
        var valueA = a.firstName.toUpperCase()
        var valueB = b.firstName.toUpperCase()
        if (valueA < valueB) {
          return -1
        } else if (valueA > valueB) {
          return 1
        } else {
          return 0
        }
      }),
    petsCheckBox4: state.apiReducer.pets.filter(
      petsCheckBox4 => petsCheckBox4.is_stray == true
    )
  }
}

const mapDispatchToProps = () => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Blank)
