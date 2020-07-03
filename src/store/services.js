const swaggerPetstore = axios.create({
  baseURL: "https://petstore.swagger.io/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    api_key: process.env.SERVICE_API_KEY
  }
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
  return swaggerPetstore.get(`/pet/{petId}`)
}
function updatePetWithForm(petId, requestBody) {
  return swaggerPetstore.post(`/pet/{petId}`, requestBody)
}
function deletePet(petId) {
  return swaggerPetstore.delete(`/pet/{petId}`)
}
function uploadFile(petId, requestBody) {
  return swaggerPetstore.post(`/pet/{petId}/uploadImage`, requestBody)
}
function getInventory() {
  return swaggerPetstore.get(`/store/inventory`)
}
function placeOrder(requestBody) {
  return swaggerPetstore.post(`/store/order`, requestBody)
}
function getOrderById(orderId) {
  return swaggerPetstore.get(`/store/order/{orderId}`)
}
function deleteOrder(orderId) {
  return swaggerPetstore.delete(`/store/order/{orderId}`)
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
  return swaggerPetstore.get(`/user/{username}`)
}
function updateUser(username, requestBody) {
  return swaggerPetstore.put(`/user/{username}`, requestBody)
}
function deleteUser(username) {
  return swaggerPetstore.delete(`/user/{username}`)
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
