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
export class _Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <View title="Button12345" color="#FF8000" style={styles.View_undefined}>
      <View style={styles.View_undefined} />
    </View>
  )
}

const styles = StyleSheet.create({
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
})

function mapStateToProps(state) {
  return {
    petsundefinedundefined: state.apiReducer.pets
      .filter(
        petsundefinedundefined => petsundefinedundefined.name == "Lorem Ipsum"
      )
      .filter(
        petsundefinedundefined => petsundefinedundefined.name != "Lorem Ipsum"
      )
      .filter(petsundefinedundefined => petsundefinedundefined.age > 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age <= 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age >= 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age < 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age < 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age >= 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age <= 25)
      .filter(petsundefinedundefined => petsundefinedundefined.age > 25)
      .filter(petsundefinedundefined => !petsundefinedundefined.name)
      .filter(petsundefinedundefined => !petsundefinedundefined.age)
      .filter(petsundefinedundefined => {
        if (petsundefinedundefined.name)
          return petsundefinedundefined.name.toString().includes("lorem")
      })
      .filter(petsundefinedundefined => {
        if (petsundefinedundefined.age)
          return petsundefinedundefined.age.toString().includes(25)
      })
      .filter(petsundefinedundefined => petsundefinedundefined.name)
      .filter(petsundefinedundefined => petsundefinedundefined.age)
      .filter(petsundefinedundefined => {
        if (petsundefinedundefined.name)
          return !petsundefinedundefined.name.toString().includes("lorem")
      })
      .filter(petsundefinedundefined => {
        if (petsundefinedundefined.age)
          return !petsundefinedundefined.age.toString().includes(25)
      })
      .sort((a, b) => new Date(a.created_at) - new Date(b.created_at))
      .sort((a, b) => new Number(a.value) - new Number(b.value))
      .sort((a, b) => {
        var valueA = a.name.toUpperCase()
        var valueB = b.name.toUpperCase()
        if (valueA < valueB) {
          return -1
        } else if (valueA > valueB) {
          return 1
        } else {
          return 0
        }
      })
      .reverse()
      .sort((a, b) => new Boolean(a.public) - new Boolean(b.public))
      .reverse()
  }
}

const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(_Blank)
