import { PET_STORE_API_KEY } from "react-native-dotenv"
const swaggerPetstore = axios.create({
  baseURL: "https://petstore.swagger.io/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    api_key: PET_STORE_API_KEY
  }
})
function updatePet(payload) {
  return swaggerPetstore.put(`/pet`, payload.data)
}
function addPet(payload) {
  return swaggerPetstore.post(`/pet`, payload.data)
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
  return swaggerPetstore.get(`/pet/${payload.petId}`)
}
function updatePetWithForm(payload) {
  return swaggerPetstore.post(`/pet/${payload.petId}`, payload.data)
}
function deletePet(payload) {
  return swaggerPetstore.delete(`/pet/${payload.petId}`)
}
function uploadFile(payload) {
  return swaggerPetstore.post(`/pet/${payload.petId}/uploadImage`, payload.data)
}
function getInventory(payload) {
  return swaggerPetstore.get(`/store/inventory`)
}
function placeOrder(payload) {
  return swaggerPetstore.post(`/store/order`, payload.data)
}
function getOrderById(payload) {
  return swaggerPetstore.get(`/store/order/${payload.orderId}`)
}
function deleteOrder(payload) {
  return swaggerPetstore.delete(`/store/order/${payload.orderId}`)
}
function createUser(payload) {
  return swaggerPetstore.post(`/user`, payload.data)
}
function createUsersWithArrayInput(payload) {
  return swaggerPetstore.post(`/user/createWithArray`, payload.data)
}
function createUsersWithListInput(payload) {
  return swaggerPetstore.post(`/user/createWithList`, payload.data)
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
  return swaggerPetstore.get(`/user/${payload.username}`)
}
function updateUser(payload) {
  return swaggerPetstore.put(`/user/${payload.username}`, payload.data)
}
function deleteUser(payload) {
  return swaggerPetstore.delete(`/user/${payload.username}`)
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
  deleteUser
}
