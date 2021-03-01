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
export class New extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
    this.state = {}
  }
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10417_1134}>
        <View style={styles.View_10417_1135}>
          <Text style={styles.Text_10417_1135}>Feed</Text>
        </View>
        <View style={styles.View_10417_1136}>
          <View style={styles.View_10417_1137} />
          <View style={styles.View_10417_1138}>
            <Text style={styles.Text_10417_1138}>News</Text>
          </View>
        </View>
        <View style={styles.View_10417_1139}>
          <View style={styles.View_10417_1140} />
          <View style={styles.View_10417_1141}>
            <Text style={styles.Text_10417_1141}>Scores</Text>
          </View>
        </View>
        <View style={styles.View_10417_1142}>
          <View style={styles.View_10417_1143} />
          <View style={styles.View_10417_1144}>
            <Text style={styles.Text_10417_1144}>Transfers</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10417_1134: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: 139,
    minHeight: 139,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(243, 245, 249, 1)",
    overflow: "hidden"
  },
  View_10417_1135: {
    width: wp("79.73333333333333%"),
    minWidth: wp("79.73333333333333%"),
    minHeight: 38,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: 44
  },
  Text_10417_1135: {
    color: "rgba(0, 24, 72, 1)",
    fontSize: 26,
    fontFamily: "Roboto-Regular-Regular-Regular",
    textAlign: "left",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1136: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.4666666666666663%"),
    top: 100
  },
  View_10417_1137: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_1138: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_10417_1138: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular-Regular-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1139: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.85898844401042%"),
    top: 100
  },
  View_10417_1140: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(206, 17, 39, 1)",
    opacity: 0.4000000059604645,
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_1141: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_10417_1141: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular-Regular-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10417_1142: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.57830810546875%"),
    top: 100
  },
  View_10417_1143: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0,
    backgroundColor: "rgba(206, 17, 39, 1)",
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100
  },
  View_10417_1144: {
    width: wp("29.955025227864585%"),
    minWidth: wp("29.955025227864585%"),
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: 0
  },
  Text_10417_1144: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontFamily: "Roboto-Regular-Regular-Regular",
    textAlign: "center",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2: { height: 1480 }
})

function mapStateToProps(state) {
  return {}
}

const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(New)
