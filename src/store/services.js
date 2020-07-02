const apiClient = axios.create({
  baseURL: "https://petstore.swagger.io/v2",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    api_key: process.env.SERVICE_API_KEY
  }
})
function updatePet(requestBody) {
  return apiClient.put(`/pet`, requestBody)
}
function addPet(requestBody) {
  return apiClient.post(`/pet`, requestBody)
}
function findPetsByStatus({ status }) {
  return apiClient.get(`/pet/findByStatus`, { params: { status: status } })
}
function findPetsByTags({ tags }) {
  return apiClient.get(`/pet/findByTags`, { params: { tags: tags } })
}
function getPetById(petId) {
  return apiClient.get(`/pet/{petId}`)
}
function updatePetWithForm(petId, requestBody) {
  return apiClient.post(`/pet/{petId}`, requestBody)
}
function deletePet(petId) {
  return apiClient.delete(`/pet/{petId}`)
}
function uploadFile(petId, requestBody) {
  return apiClient.post(`/pet/{petId}/uploadImage`, requestBody)
}
function getInventory() {
  return apiClient.get(`/store/inventory`)
}
function placeOrder(requestBody) {
  return apiClient.post(`/store/order`, requestBody)
}
function getOrderById(orderId) {
  return apiClient.get(`/store/order/{orderId}`)
}
function deleteOrder(orderId) {
  return apiClient.delete(`/store/order/{orderId}`)
}
function createUser(requestBody) {
  return apiClient.post(`/user`, requestBody)
}
function createUsersWithArrayInput(requestBody) {
  return apiClient.post(`/user/createWithArray`, requestBody)
}
function createUsersWithListInput(requestBody) {
  return apiClient.post(`/user/createWithList`, requestBody)
}
function loginUser({ username, password }) {
  return apiClient.get(`/user/login`, {
    params: { username: username, password: password }
  })
}
function logoutUser() {
  return apiClient.get(`/user/logout`)
}
function getUserByName(username) {
  return apiClient.get(`/user/{username}`)
}
function updateUser(username, requestBody) {
  return apiClient.put(`/user/{username}`, requestBody)
}
function deleteUser(username) {
  return apiClient.delete(`/user/{username}`)
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
