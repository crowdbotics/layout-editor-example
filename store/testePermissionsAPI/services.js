import {
  TESTEPERMISSIONS_API_USERNAME,
  TESTEPERMISSIONS_API_PASSWORD
} from "react-native-dotenv"
const testePermissionsAPI = axios.create({
  baseURL: "https://testepermissions_15043.herokuapp.com",
  auth: {
    username: TESTEPERMISSIONS_API_USERNAME,
    password: TESTEPERMISSIONS_API_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list(payload) {
  return testePermissionsAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(payload) {
  return testePermissionsAPI.get(`/api/v1/customtext/${payload.id}/`)
}
function api_v1_customtext_update(payload) {
  return testePermissionsAPI.put(`/api/v1/customtext/${payload.id}/`, {
    data: payload.data
  })
}
function api_v1_customtext_partial_update(payload) {
  return testePermissionsAPI.patch(`/api/v1/customtext/${payload.id}/`, {
    data: payload.data
  })
}
function api_v1_homepage_list(payload) {
  return testePermissionsAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(payload) {
  return testePermissionsAPI.get(`/api/v1/homepage/${payload.id}/`)
}
function api_v1_homepage_update(payload) {
  return testePermissionsAPI.put(`/api/v1/homepage/${payload.id}/`, {
    data: payload.data
  })
}
function api_v1_homepage_partial_update(payload) {
  return testePermissionsAPI.patch(`/api/v1/homepage/${payload.id}/`, {
    data: payload.data
  })
}
function api_v1_login_create(payload) {
  return testePermissionsAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(payload) {
  return testePermissionsAPI.post(`/api/v1/signup/`, { data: payload.data })
}
function rest_auth_login_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/login/`, { data: payload.data })
}
function rest_auth_logout_list(payload) {
  return testePermissionsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/password/change/`, {
    data: payload.data
  })
}
function rest_auth_password_reset_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/password/reset/`, {
    data: payload.data
  })
}
function rest_auth_password_reset_confirm_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/password/reset/confirm/`, {
    data: payload.data
  })
}
function rest_auth_registration_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/registration/`, {
    data: payload.data
  })
}
function rest_auth_registration_verify_email_create(payload) {
  return testePermissionsAPI.post(`/rest-auth/registration/verify-email/`, {
    data: payload.data
  })
}
function rest_auth_user_read(payload) {
  return testePermissionsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return testePermissionsAPI.put(`/rest-auth/user/`, { data: payload.data })
}
function rest_auth_user_partial_update(payload) {
  return testePermissionsAPI.patch(`/rest-auth/user/`, { data: payload.data })
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
