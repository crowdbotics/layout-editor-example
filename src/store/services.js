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
function updatePet(payload) {
  return swaggerPetstore.put(`/pet`, { data: payload.data })
}
function addPet(payload) {
  return swaggerPetstore.post(`/pet`, { data: payload.data })
}
function findPetsByStatus(payload) {
  return swaggerPetstore.get(`/pet/findByStatus`, {
    params: { status: payload.status }
  })
}
function findPetsByTags(payload) {
  return swaggerPetstore.get(`/pet/findByTags`, {
    params: { tags: payload.tags }
  })
}
function getPetById(payload) {
  return swaggerPetstore.get(`/pet/${action.petId}`)
}
function updatePetWithForm(payload) {
  return swaggerPetstore.post(`/pet/${action.petId}`, { data: payload.data })
}
function deletePet(payload) {
  return swaggerPetstore.delete(`/pet/${action.petId}`)
}
function uploadFile(payload) {
  return swaggerPetstore.post(`/pet/${action.petId}/uploadImage`, {
    data: payload.data
  })
}
function getInventory(payload) {
  return swaggerPetstore.get(`/store/inventory`)
}
function placeOrder(payload) {
  return swaggerPetstore.post(`/store/order`, { data: payload.data })
}
function getOrderById(payload) {
  return swaggerPetstore.get(`/store/order/${action.orderId}`)
}
function deleteOrder(payload) {
  return swaggerPetstore.delete(`/store/order/${action.orderId}`)
}
function createUser(payload) {
  return swaggerPetstore.post(`/user`, { data: payload.data })
}
function createUsersWithArrayInput(payload) {
  return swaggerPetstore.post(`/user/createWithArray`, { data: payload.data })
}
function createUsersWithListInput(payload) {
  return swaggerPetstore.post(`/user/createWithList`, { data: payload.data })
}
function loginUser(payload) {
  return swaggerPetstore.get(`/user/login`, {
    params: { username: payload.username, password: payload.password }
  })
}
function logoutUser(payload) {
  return swaggerPetstore.get(`/user/logout`)
}
function getUserByName(payload) {
  return swaggerPetstore.get(`/user/${action.username}`)
}
function updateUser(payload) {
  return swaggerPetstore.put(`/user/${action.username}`, { data: payload.data })
}
function deleteUser(payload) {
  return swaggerPetstore.delete(`/user/${action.username}`)
}
function api_v1_customtext_list(payload) {
  return testePermissionsAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(payload) {
  return testePermissionsAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(payload) {
  return testePermissionsAPI.put(`/api/v1/customtext/${action.id}/`, {
    data: payload.data
  })
}
function api_v1_customtext_partial_update(payload) {
  return testePermissionsAPI.patch(`/api/v1/customtext/${action.id}/`, {
    data: payload.data
  })
}
function api_v1_homepage_list(payload) {
  return testePermissionsAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(payload) {
  return testePermissionsAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(payload) {
  return testePermissionsAPI.put(`/api/v1/homepage/${action.id}/`, {
    data: payload.data
  })
}
function api_v1_homepage_partial_update(payload) {
  return testePermissionsAPI.patch(`/api/v1/homepage/${action.id}/`, {
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
