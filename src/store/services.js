import axios from "axios"
import {
  PET_STORE_API_KEY,
  TESTEPERMISSIONS_API_USERNAME,
  TESTEPERMISSIONS_API_PASSWORD
} from "react-native-dotenv"
const swaggerPetstore = axios.create({
  baseURL: "https://petstore.swagger.io/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    api_key: PET_STORE_API_KEY
  }
})
const testePermissionsAPI = axios.create({
  baseURL: "https://testepermissions_15043.herokuapp.com/",
  auth: {
    username: TESTEPERMISSIONS_API_USERNAME,
    password: TESTEPERMISSIONS_API_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function updatePet(requestBody) {
  return swaggerPetstore.put(`/pet`, requestBody)
}
function addPet(requestBody) {
  return swaggerPetstore.post(`/pet`, requestBody)
}
function findPetsByStatus({ status }) {
  return swaggerPetstore.get(`/pet/findByStatus`, {
    params: { status: status }
  })
}
function findPetsByTags({ tags }) {
  return swaggerPetstore.get(`/pet/findByTags`, { params: { tags: tags } })
}
function getPetById(petId) {
  return swaggerPetstore.get(`/pet/${petId}`)
}
function updatePetWithForm(petId, requestBody) {
  return swaggerPetstore.post(`/pet/${petId}`, requestBody)
}
function deletePet(petId) {
  return swaggerPetstore.delete(`/pet/${petId}`)
}
function uploadFile(petId, requestBody) {
  return swaggerPetstore.post(`/pet/${petId}/uploadImage`, requestBody)
}
function getInventory() {
  return swaggerPetstore.get(`/store/inventory`)
}
function placeOrder(requestBody) {
  return swaggerPetstore.post(`/store/order`, requestBody)
}
function getOrderById(orderId) {
  return swaggerPetstore.get(`/store/order/${orderId}`)
}
function deleteOrder(orderId) {
  return swaggerPetstore.delete(`/store/order/${orderId}`)
}
function createUser(requestBody) {
  return swaggerPetstore.post(`/user`, requestBody)
}
function createUsersWithArrayInput(requestBody) {
  return swaggerPetstore.post(`/user/createWithArray`, requestBody)
}
function createUsersWithListInput(requestBody) {
  return swaggerPetstore.post(`/user/createWithList`, requestBody)
}
function loginUser({ username, password }) {
  return swaggerPetstore.get(`/user/login`, {
    params: { username: username, password: password }
  })
}
function logoutUser() {
  return swaggerPetstore.get(`/user/logout`)
}
function getUserByName(username) {
  return swaggerPetstore.get(`/user/${username}`)
}
function updateUser(username, requestBody) {
  return swaggerPetstore.put(`/user/${username}`, requestBody)
}
function deleteUser(username) {
  return swaggerPetstore.delete(`/user/${username}`)
}
function api_v1_customtext_list() {
  return testePermissionsAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return testePermissionsAPI.get(`/api/v1/customtext/${id}/`)
}
function api_v1_customtext_update(requestBody) {
  return testePermissionsAPI.put(`/api/v1/customtext/${id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return testePermissionsAPI.patch(`/api/v1/customtext/${id}/`, requestBody)
}
function api_v1_homepage_list() {
  return testePermissionsAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return testePermissionsAPI.get(`/api/v1/homepage/${id}/`)
}
function api_v1_homepage_update(requestBody) {
  return testePermissionsAPI.put(`/api/v1/homepage/${id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return testePermissionsAPI.patch(`/api/v1/homepage/${id}/`, requestBody)
}
function api_v1_login_create() {
  return testePermissionsAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(requestBody) {
  return testePermissionsAPI.post(`/api/v1/signup/`, requestBody)
}
function rest_auth_login_create(requestBody) {
  return testePermissionsAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return testePermissionsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return testePermissionsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return testePermissionsAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return testePermissionsAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return testePermissionsAPI.post(
    `/rest-auth/password/reset/confirm/`,
    requestBody
  )
}
function rest_auth_registration_create(requestBody) {
  return testePermissionsAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return testePermissionsAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return testePermissionsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return testePermissionsAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return testePermissionsAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  updatePet,
  addPet,
  findPetsByStatus,
  findPetsByTags,
  getPetById,
  updatePetWithForm,
  deletePet,
  uploadFile,
  getInventory,
  placeOrder,
  getOrderById,
  deleteOrder,
  createUser,
  createUsersWithArrayInput,
  createUsersWithListInput,
  loginUser,
  logoutUser,
  getUserByName,
  updateUser,
  deleteUser,
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
