import React, { Component } from "react"
import { connect } from "react-redux"
import { Text, Layout, Button } from "react-native-ui-kitten"
import { GoogleSignin, GoogleSigninButton } from "react-native-google-signin"
import { styles } from "./styles"
import calendarActions from "../../redux/actions"
import ErrorBox from "../../../../components/ErrorBox"

GoogleSignin.configure({
  scopes: [
    "https://www.googleapis.com/auth/calendar",
    "https://www.googleapis.com/auth/calendar.events",
    "https://www.googleapis.com/auth/calendar.events.readonly",
    "https://www.googleapis.com/auth/calendar.readonly"
  ]
})

class CalendarLogin extends Component {
  constructor(props) {
    super(props)
    this.state = { isSigninInProgress: false }

    this.goToCalendar = this.goToCalendar.bind(this)
  }

  renderErrors() {
    const { CalendarGoogleSignInErrors } = this.props

    if (CalendarGoogleSignInErrors) {
      return <ErrorBox errorText={CalendarGoogleSignInErrors} />
    }
  }

  goToCalendar() {
    const { navigation } = this.props
    navigation.navigate("CalendarView")
  }

  renderUser() {
    const { user, actions } = this.props
    if (user) {
      return (
        <Layout>
          <Text>Welcome back {user.user.name}</Text>
          <Button onPress={this.goToCalendar}>Go to calendar</Button>
        </Layout>
      )
    }

    return (
      <CbFlex
        title="Button123"
        color="#FF8040"
        styles={{ overflow: "visible" }}
      >
        <CbFlex styles={{ overflow: "visible" }} />
      </CbFlex>
    )
  }

  render() {
    return (
      <CbFlex
        title="Button123"
        color="#FF8040"
        styles={{ overflow: "visible" }}
      >
        <CbFlex styles={{ overflow: "visible" }} />
      </CbFlex>
    )
  }
}

const mapStateToProps = state => ({
  user: state.Calendar.user,
  CalendarGoogleSignInErrors: state.Calendar.errors.CalendarLogin
})

const mapDispatchToProps = dispatch => ({
  actions: {
    googleSignIn: () => {
      dispatch(calendarActions.googleSignIn())
    }
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(CalendarLogin)
