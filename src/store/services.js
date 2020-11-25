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
function updatePet(action) {
  return swaggerPetstore.put(`/pet`, null, { data: action.data })
}
function addPet(action) {
  return swaggerPetstore.post(`/pet`, null, { data: action.data })
}
function findPetsByStatus(action) {
  return swaggerPetstore.get(`/pet/findByStatus`, null, {
    params: { status: action.status }
  })
}
function findPetsByTags(action) {
  return swaggerPetstore.get(`/pet/findByTags`, null, {
    params: { tags: action.tags }
  })
}
function getPetById(action) {
  return swaggerPetstore.get(`/pet/${action.petId}`)
}
function updatePetWithForm(action) {
  return swaggerPetstore.post(`/pet/${action.petId}`, null, {
    data: action.data
  })
}
function deletePet(action) {
  return swaggerPetstore.delete(`/pet/${action.petId}`, null, {
    headers: { api_key: action["api_key"] }
  })
}
function uploadFile(action) {
  return swaggerPetstore.post(`/pet/${action.petId}/uploadImage`, null, {
    data: action.data
  })
}
function getInventory(action) {
  return swaggerPetstore.get(`/store/inventory`)
}
function placeOrder(action) {
  return swaggerPetstore.post(`/store/order`, null, { data: action.data })
}
function getOrderById(action) {
  return swaggerPetstore.get(`/store/order/${action.orderId}`)
}
function deleteOrder(action) {
  return swaggerPetstore.delete(`/store/order/${action.orderId}`)
}
function createUser(action) {
  return swaggerPetstore.post(`/user`, null, { data: action.data })
}
function createUsersWithArrayInput(action) {
  return swaggerPetstore.post(`/user/createWithArray`, null, {
    data: action.data
  })
}
function createUsersWithListInput(action) {
  return swaggerPetstore.post(`/user/createWithList`, null, {
    data: action.data
  })
}
function loginUser(action) {
  return swaggerPetstore.get(`/user/login`, null, {
    params: { username: action.username, password: action.password }
  })
}
function logoutUser(action) {
  return swaggerPetstore.get(`/user/logout`)
}
function getUserByName(action) {
  return swaggerPetstore.get(`/user/${action.username}`)
}
function updateUser(action) {
  return swaggerPetstore.put(`/user/${action.username}`, null, {
    data: action.data
  })
}
function deleteUser(action) {
  return swaggerPetstore.delete(`/user/${action.username}`)
}
function api_v1_customtext_list(action) {
  return testePermissionsAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read(action) {
  return testePermissionsAPI.get(`/api/v1/customtext/${action.id}/`)
}
function api_v1_customtext_update(action) {
  return testePermissionsAPI.put(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_customtext_partial_update(action) {
  return testePermissionsAPI.patch(`/api/v1/customtext/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_list(action) {
  return testePermissionsAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read(action) {
  return testePermissionsAPI.get(`/api/v1/homepage/${action.id}/`)
}
function api_v1_homepage_update(action) {
  return testePermissionsAPI.put(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_homepage_partial_update(action) {
  return testePermissionsAPI.patch(`/api/v1/homepage/${action.id}/`, null, {
    data: action.data
  })
}
function api_v1_login_create(action) {
  return testePermissionsAPI.post(`/api/v1/login/`)
}
function api_v1_signup_create(action) {
  return testePermissionsAPI.post(`/api/v1/signup/`, null, {
    data: action.data
  })
}
function rest_auth_login_create(action) {
  return testePermissionsAPI.post(`/rest-auth/login/`, null, {
    data: action.data
  })
}
function rest_auth_logout_list(action) {
  return testePermissionsAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create(action) {
  return testePermissionsAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(action) {
  return testePermissionsAPI.post(`/rest-auth/password/change/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_create(action) {
  return testePermissionsAPI.post(`/rest-auth/password/reset/`, null, {
    data: action.data
  })
}
function rest_auth_password_reset_confirm_create(action) {
  return testePermissionsAPI.post(`/rest-auth/password/reset/confirm/`, null, {
    data: action.data
  })
}
function rest_auth_registration_create(action) {
  return testePermissionsAPI.post(`/rest-auth/registration/`, null, {
    data: action.data
  })
}
function rest_auth_registration_verify_email_create(action) {
  return testePermissionsAPI.post(
    `/rest-auth/registration/verify-email/`,
    null,
    { data: action.data }
  )
}
function rest_auth_user_read(action) {
  return testePermissionsAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(action) {
  return testePermissionsAPI.put(`/rest-auth/user/`, null, {
    data: action.data
  })
}
function rest_auth_user_partial_update(action) {
  return testePermissionsAPI.patch(`/rest-auth/user/`, null, {
    data: action.data
  })
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
