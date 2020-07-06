export const updatePet = () => ({ type: types.UPDATE_PET })
export const updatePetSucceeded = response => ({
  type: types.UPDATE_PET_SUCCEEDED,
  response
})

export const updatePetFailed = error => ({
  type: types.UPDATE_PET_FAILED,
  error
})

export const addPet = () => ({ type: types.ADD_PET })
export const addPetSucceeded = response => ({
  type: types.ADD_PET_SUCCEEDED,
  response
})

export const addPetFailed = error => ({ type: types.ADD_PET_FAILED, error })
export const findPetsByStatus = status => ({
  type: types.FIND_PETS_BY_STATUS,
  status
})

export const findPetsByStatusSucceeded = response => ({
  type: types.FIND_PETS_BY_STATUS_SUCCEEDED,
  response
})

export const findPetsByStatusFailed = error => ({
  type: types.FIND_PETS_BY_STATUS_FAILED,
  error
})

export const findPetsByTags = tags => ({ type: types.FIND_PETS_BY_TAGS, tags })
export const findPetsByTagsSucceeded = response => ({
  type: types.FIND_PETS_BY_TAGS_SUCCEEDED,
  response
})

export const findPetsByTagsFailed = error => ({
  type: types.FIND_PETS_BY_TAGS_FAILED,
  error
})

export const getPetById = petId => ({ type: types.GET_PET_BY_ID, petId })
export const getPetByIdSucceeded = response => ({
  type: types.GET_PET_BY_ID_SUCCEEDED,
  response
})

export const getPetByIdFailed = error => ({
  type: types.GET_PET_BY_ID_FAILED,
  error
})

export const updatePetWithForm = petId => ({
  type: types.UPDATE_PET_WITH_FORM,
  petId
})

export const updatePetWithFormSucceeded = response => ({
  type: types.UPDATE_PET_WITH_FORM_SUCCEEDED,
  response
})

export const updatePetWithFormFailed = error => ({
  type: types.UPDATE_PET_WITH_FORM_FAILED,
  error
})

export const deletePet = (api_key, petId) => ({
  type: types.DELETE_PET,
  api_key,
  petId
})

export const deletePetSucceeded = response => ({
  type: types.DELETE_PET_SUCCEEDED,
  response
})

export const deletePetFailed = error => ({
  type: types.DELETE_PET_FAILED,
  error
})

export const uploadFile = petId => ({ type: types.UPLOAD_FILE, petId })
export const uploadFileSucceeded = response => ({
  type: types.UPLOAD_FILE_SUCCEEDED,
  response
})

export const uploadFileFailed = error => ({
  type: types.UPLOAD_FILE_FAILED,
  error
})

export const getInventory = () => ({ type: types.GET_INVENTORY })
export const getInventorySucceeded = response => ({
  type: types.GET_INVENTORY_SUCCEEDED,
  response
})

export const getInventoryFailed = error => ({
  type: types.GET_INVENTORY_FAILED,
  error
})

export const placeOrder = () => ({ type: types.PLACE_ORDER })
export const placeOrderSucceeded = response => ({
  type: types.PLACE_ORDER_SUCCEEDED,
  response
})

export const placeOrderFailed = error => ({
  type: types.PLACE_ORDER_FAILED,
  error
})

export const getOrderById = orderId => ({
  type: types.GET_ORDER_BY_ID,
  orderId
})

export const getOrderByIdSucceeded = response => ({
  type: types.GET_ORDER_BY_ID_SUCCEEDED,
  response
})

export const getOrderByIdFailed = error => ({
  type: types.GET_ORDER_BY_ID_FAILED,
  error
})

export const deleteOrder = orderId => ({ type: types.DELETE_ORDER, orderId })
export const deleteOrderSucceeded = response => ({
  type: types.DELETE_ORDER_SUCCEEDED,
  response
})

export const deleteOrderFailed = error => ({
  type: types.DELETE_ORDER_FAILED,
  error
})

export const createUser = () => ({ type: types.CREATE_USER })
export const createUserSucceeded = response => ({
  type: types.CREATE_USER_SUCCEEDED,
  response
})

export const createUserFailed = error => ({
  type: types.CREATE_USER_FAILED,
  error
})

export const createUsersWithArrayInput = () => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT
})

export const createUsersWithArrayInputSucceeded = response => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT_SUCCEEDED,
  response
})

export const createUsersWithArrayInputFailed = error => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT_FAILED,
  error
})

export const createUsersWithListInput = () => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT
})

export const createUsersWithListInputSucceeded = response => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT_SUCCEEDED,
  response
})

export const createUsersWithListInputFailed = error => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT_FAILED,
  error
})

export const loginUser = (username, password) => ({
  type: types.LOGIN_USER,
  username,
  password
})

export const loginUserSucceeded = response => ({
  type: types.LOGIN_USER_SUCCEEDED,
  response
})

export const loginUserFailed = error => ({
  type: types.LOGIN_USER_FAILED,
  error
})

export const logoutUser = () => ({ type: types.LOGOUT_USER })
export const logoutUserSucceeded = response => ({
  type: types.LOGOUT_USER_SUCCEEDED,
  response
})

export const logoutUserFailed = error => ({
  type: types.LOGOUT_USER_FAILED,
  error
})

export const getUserByName = username => ({
  type: types.GET_USER_BY_NAME,
  username
})

export const getUserByNameSucceeded = response => ({
  type: types.GET_USER_BY_NAME_SUCCEEDED,
  response
})

export const getUserByNameFailed = error => ({
  type: types.GET_USER_BY_NAME_FAILED,
  error
})

export const updateUser = username => ({ type: types.UPDATE_USER, username })
export const updateUserSucceeded = response => ({
  type: types.UPDATE_USER_SUCCEEDED,
  response
})

export const updateUserFailed = error => ({
  type: types.UPDATE_USER_FAILED,
  error
})

export const deleteUser = username => ({ type: types.DELETE_USER, username })
export const deleteUserSucceeded = response => ({
  type: types.DELETE_USER_SUCCEEDED,
  response
})

export const deleteUserFailed = error => ({
  type: types.DELETE_USER_FAILED,
  error
})
