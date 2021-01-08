import * as types from "./constants"
export const updatePet = () => ({ type: types.UPDATE_PET })
export const updatePetSucceeded = (response) => ({
  type: types.UPDATE_PET_SUCCEEDED,
  response,
})

export const updatePetFailed = (error) => ({
  type: types.UPDATE_PET_FAILED,
  error,
})

export const addPet = () => ({ type: types.ADD_PET })
export const addPetSucceeded = (response) => ({
  type: types.ADD_PET_SUCCEEDED,
  response,
})

export const addPetFailed = (error) => ({ type: types.ADD_PET_FAILED, error })
export const findPetsByStatus = (status) => ({
  type: types.FIND_PETS_BY_STATUS,
  status,
})

export const findPetsByStatusSucceeded = (response) => ({
  type: types.FIND_PETS_BY_STATUS_SUCCEEDED,
  response,
})

export const findPetsByStatusFailed = (error) => ({
  type: types.FIND_PETS_BY_STATUS_FAILED,
  error,
})

export const findPetsByTags = (tags) => ({
  type: types.FIND_PETS_BY_TAGS,
  tags,
})

export const findPetsByTagsSucceeded = (response) => ({
  type: types.FIND_PETS_BY_TAGS_SUCCEEDED,
  response,
})

export const findPetsByTagsFailed = (error) => ({
  type: types.FIND_PETS_BY_TAGS_FAILED,
  error,
})

export const getPetById = (petId) => ({ type: types.GET_PET_BY_ID, petId })
export const getPetByIdSucceeded = (response) => ({
  type: types.GET_PET_BY_ID_SUCCEEDED,
  response,
})

export const getPetByIdFailed = (error) => ({
  type: types.GET_PET_BY_ID_FAILED,
  error,
})

export const updatePetWithForm = (petId) => ({
  type: types.UPDATE_PET_WITH_FORM,
  petId,
})

export const updatePetWithFormSucceeded = (response) => ({
  type: types.UPDATE_PET_WITH_FORM_SUCCEEDED,
  response,
})

export const updatePetWithFormFailed = (error) => ({
  type: types.UPDATE_PET_WITH_FORM_FAILED,
  error,
})

export const deletePet = (api_key, petId) => ({
  type: types.DELETE_PET,
  api_key,
  petId,
})

export const deletePetSucceeded = (response) => ({
  type: types.DELETE_PET_SUCCEEDED,
  response,
})

export const deletePetFailed = (error) => ({
  type: types.DELETE_PET_FAILED,
  error,
})

export const uploadFile = (petId) => ({ type: types.UPLOAD_FILE, petId })
export const uploadFileSucceeded = (response) => ({
  type: types.UPLOAD_FILE_SUCCEEDED,
  response,
})

export const uploadFileFailed = (error) => ({
  type: types.UPLOAD_FILE_FAILED,
  error,
})

export const getInventory = () => ({ type: types.GET_INVENTORY })
export const getInventorySucceeded = (response) => ({
  type: types.GET_INVENTORY_SUCCEEDED,
  response,
})

export const getInventoryFailed = (error) => ({
  type: types.GET_INVENTORY_FAILED,
  error,
})

export const placeOrder = () => ({ type: types.PLACE_ORDER })
export const placeOrderSucceeded = (response) => ({
  type: types.PLACE_ORDER_SUCCEEDED,
  response,
})

export const placeOrderFailed = (error) => ({
  type: types.PLACE_ORDER_FAILED,
  error,
})

export const getOrderById = (orderId) => ({
  type: types.GET_ORDER_BY_ID,
  orderId,
})

export const getOrderByIdSucceeded = (response) => ({
  type: types.GET_ORDER_BY_ID_SUCCEEDED,
  response,
})

export const getOrderByIdFailed = (error) => ({
  type: types.GET_ORDER_BY_ID_FAILED,
  error,
})

export const deleteOrder = (orderId) => ({ type: types.DELETE_ORDER, orderId })
export const deleteOrderSucceeded = (response) => ({
  type: types.DELETE_ORDER_SUCCEEDED,
  response,
})

export const deleteOrderFailed = (error) => ({
  type: types.DELETE_ORDER_FAILED,
  error,
})

export const createUser = () => ({ type: types.CREATE_USER })
export const createUserSucceeded = (response) => ({
  type: types.CREATE_USER_SUCCEEDED,
  response,
})

export const createUserFailed = (error) => ({
  type: types.CREATE_USER_FAILED,
  error,
})

export const createUsersWithArrayInput = () => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT,
})

export const createUsersWithArrayInputSucceeded = (response) => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT_SUCCEEDED,
  response,
})

export const createUsersWithArrayInputFailed = (error) => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT_FAILED,
  error,
})

export const createUsersWithListInput = () => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT,
})

export const createUsersWithListInputSucceeded = (response) => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT_SUCCEEDED,
  response,
})

export const createUsersWithListInputFailed = (error) => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT_FAILED,
  error,
})

export const loginUser = (username, password) => ({
  type: types.LOGIN_USER,
  username,
  password,
})

export const loginUserSucceeded = (response) => ({
  type: types.LOGIN_USER_SUCCEEDED,
  response,
})

export const loginUserFailed = (error) => ({
  type: types.LOGIN_USER_FAILED,
  error,
})

export const logoutUser = () => ({ type: types.LOGOUT_USER })
export const logoutUserSucceeded = (response) => ({
  type: types.LOGOUT_USER_SUCCEEDED,
  response,
})

export const logoutUserFailed = (error) => ({
  type: types.LOGOUT_USER_FAILED,
  error,
})

export const getUserByName = (username) => ({
  type: types.GET_USER_BY_NAME,
  username,
})

export const getUserByNameSucceeded = (response) => ({
  type: types.GET_USER_BY_NAME_SUCCEEDED,
  response,
})

export const getUserByNameFailed = (error) => ({
  type: types.GET_USER_BY_NAME_FAILED,
  error,
})

export const updateUser = (username) => ({ type: types.UPDATE_USER, username })
export const updateUserSucceeded = (response) => ({
  type: types.UPDATE_USER_SUCCEEDED,
  response,
})

export const updateUserFailed = (error) => ({
  type: types.UPDATE_USER_FAILED,
  error,
})

export const deleteUser = (username) => ({ type: types.DELETE_USER, username })
export const deleteUserSucceeded = (response) => ({
  type: types.DELETE_USER_SUCCEEDED,
  response,
})

export const deleteUserFailed = (error) => ({
  type: types.DELETE_USER_FAILED,
  error,
})

export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST,
})

export const api_v1_customtext_listSucceeded = (response) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
})

export const api_v1_customtext_listFailed = (error) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  error,
})

export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ,
})

export const api_v1_customtext_readSucceeded = (response) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
})

export const api_v1_customtext_readFailed = (error) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  error,
})

export const api_v1_customtext_update = () => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
})

export const api_v1_customtext_updateSucceeded = (response) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
})

export const api_v1_customtext_updateFailed = (error) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  error,
})

export const api_v1_customtext_partial_update = () => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
})

export const api_v1_customtext_partial_updateSucceeded = (response) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
})

export const api_v1_customtext_partial_updateFailed = (error) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  error,
})

export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
})

export const api_v1_homepage_listFailed = (error) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  error,
})

export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
})

export const api_v1_homepage_readFailed = (error) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  error,
})

export const api_v1_homepage_update = () => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
})

export const api_v1_homepage_updateSucceeded = (response) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
})

export const api_v1_homepage_updateFailed = (error) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  error,
})

export const api_v1_homepage_partial_update = () => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
})

export const api_v1_homepage_partial_updateSucceeded = (response) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
})

export const api_v1_homepage_partial_updateFailed = (error) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  error,
})

export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
})

export const api_v1_login_createFailed = (error) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  error,
})

export const api_v1_signup_create = () => ({ type: types.API_V1_SIGNUP_CREATE })
export const api_v1_signup_createSucceeded = (response) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
})

export const api_v1_signup_createFailed = (error) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  error,
})

export const rest_auth_login_create = () => ({
  type: types.REST_AUTH_LOGIN_CREATE,
})

export const rest_auth_login_createSucceeded = (response) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_login_createFailed = (error) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  error,
})

export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST,
})

export const rest_auth_logout_listSucceeded = (response) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
})

export const rest_auth_logout_listFailed = (error) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  error,
})

export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE,
})

export const rest_auth_logout_createSucceeded = (response) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_logout_createFailed = (error) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  error,
})

export const rest_auth_password_change_create = () => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
})

export const rest_auth_password_change_createSucceeded = (response) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_password_change_createFailed = (error) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  error,
})

export const rest_auth_password_reset_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
})

export const rest_auth_password_reset_createSucceeded = (response) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_password_reset_createFailed = (error) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  error,
})

export const rest_auth_password_reset_confirm_create = () => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
})

export const rest_auth_password_reset_confirm_createSucceeded = (response) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_password_reset_confirm_createFailed = (error) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  error,
})

export const rest_auth_registration_create = () => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
})

export const rest_auth_registration_createSucceeded = (response) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_registration_createFailed = (error) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  error,
})

export const rest_auth_registration_verify_email_create = () => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
})

export const rest_auth_registration_verify_email_createSucceeded = (
  response
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
})

export const rest_auth_registration_verify_email_createFailed = (error) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  error,
})

export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
})

export const rest_auth_user_readFailed = (error) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  error,
})

export const rest_auth_user_update = () => ({
  type: types.REST_AUTH_USER_UPDATE,
})

export const rest_auth_user_updateSucceeded = (response) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
})

export const rest_auth_user_updateFailed = (error) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  error,
})

export const rest_auth_user_partial_update = () => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
})

export const rest_auth_user_partial_updateSucceeded = (response) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
})

export const rest_auth_user_partial_updateFailed = (error) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  error,
})
