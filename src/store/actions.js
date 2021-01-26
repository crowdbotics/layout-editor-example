import * as types from "./constants"
export const updatePet = data => ({ type: types.UPDATE_PET, data })
export const updatePetSucceeded = (response, starter) => ({
  type: types.UPDATE_PET_SUCCEEDED,
  response,
  starter
})
export const updatePetFailed = (response, starter) => ({
  type: types.UPDATE_PET_FAILED,
  response,
  starter
})
export const addPet = data => ({ type: types.ADD_PET, data })
export const addPetSucceeded = (response, starter) => ({
  type: types.ADD_PET_SUCCEEDED,
  response,
  starter
})
export const addPetFailed = (response, starter) => ({
  type: types.ADD_PET_FAILED,
  response,
  starter
})
export const findPetsByStatus = status => ({
  type: types.FIND_PETS_BY_STATUS,
  status
})
export const findPetsByStatusSucceeded = (response, starter) => ({
  type: types.FIND_PETS_BY_STATUS_SUCCEEDED,
  response,
  starter
})
export const findPetsByStatusFailed = (response, starter) => ({
  type: types.FIND_PETS_BY_STATUS_FAILED,
  response,
  starter
})
export const findPetsByTags = tags => ({ type: types.FIND_PETS_BY_TAGS, tags })
export const findPetsByTagsSucceeded = (response, starter) => ({
  type: types.FIND_PETS_BY_TAGS_SUCCEEDED,
  response,
  starter
})
export const findPetsByTagsFailed = (response, starter) => ({
  type: types.FIND_PETS_BY_TAGS_FAILED,
  response,
  starter
})
export const getPetById = petId => ({ type: types.GET_PET_BY_ID, petId })
export const getPetByIdSucceeded = (response, starter) => ({
  type: types.GET_PET_BY_ID_SUCCEEDED,
  response,
  starter
})
export const getPetByIdFailed = (response, starter) => ({
  type: types.GET_PET_BY_ID_FAILED,
  response,
  starter
})
export const updatePetWithForm = (petId, data) => ({
  type: types.UPDATE_PET_WITH_FORM,
  petId,
  data
})
export const updatePetWithFormSucceeded = (response, starter) => ({
  type: types.UPDATE_PET_WITH_FORM_SUCCEEDED,
  response,
  starter
})
export const updatePetWithFormFailed = (response, starter) => ({
  type: types.UPDATE_PET_WITH_FORM_FAILED,
  response,
  starter
})
export const deletePet = (api_key, petId) => ({
  type: types.DELETE_PET,
  api_key,
  petId
})
export const deletePetSucceeded = (response, starter) => ({
  type: types.DELETE_PET_SUCCEEDED,
  response,
  starter
})
export const deletePetFailed = (response, starter) => ({
  type: types.DELETE_PET_FAILED,
  response,
  starter
})
export const uploadFile = (petId, data) => ({
  type: types.UPLOAD_FILE,
  petId,
  data
})
export const uploadFileSucceeded = (response, starter) => ({
  type: types.UPLOAD_FILE_SUCCEEDED,
  response,
  starter
})
export const uploadFileFailed = (response, starter) => ({
  type: types.UPLOAD_FILE_FAILED,
  response,
  starter
})
export const getInventory = () => ({ type: types.GET_INVENTORY })
export const getInventorySucceeded = (response, starter) => ({
  type: types.GET_INVENTORY_SUCCEEDED,
  response,
  starter
})
export const getInventoryFailed = (response, starter) => ({
  type: types.GET_INVENTORY_FAILED,
  response,
  starter
})
export const placeOrder = data => ({ type: types.PLACE_ORDER, data })
export const placeOrderSucceeded = (response, starter) => ({
  type: types.PLACE_ORDER_SUCCEEDED,
  response,
  starter
})
export const placeOrderFailed = (response, starter) => ({
  type: types.PLACE_ORDER_FAILED,
  response,
  starter
})
export const getOrderById = orderId => ({
  type: types.GET_ORDER_BY_ID,
  orderId
})
export const getOrderByIdSucceeded = (response, starter) => ({
  type: types.GET_ORDER_BY_ID_SUCCEEDED,
  response,
  starter
})
export const getOrderByIdFailed = (response, starter) => ({
  type: types.GET_ORDER_BY_ID_FAILED,
  response,
  starter
})
export const deleteOrder = orderId => ({ type: types.DELETE_ORDER, orderId })
export const deleteOrderSucceeded = (response, starter) => ({
  type: types.DELETE_ORDER_SUCCEEDED,
  response,
  starter
})
export const deleteOrderFailed = (response, starter) => ({
  type: types.DELETE_ORDER_FAILED,
  response,
  starter
})
export const createUser = data => ({ type: types.CREATE_USER, data })
export const createUserSucceeded = (response, starter) => ({
  type: types.CREATE_USER_SUCCEEDED,
  response,
  starter
})
export const createUserFailed = (response, starter) => ({
  type: types.CREATE_USER_FAILED,
  response,
  starter
})
export const createUsersWithArrayInput = data => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT,
  data
})
export const createUsersWithArrayInputSucceeded = (response, starter) => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT_SUCCEEDED,
  response,
  starter
})
export const createUsersWithArrayInputFailed = (response, starter) => ({
  type: types.CREATE_USERS_WITH_ARRAY_INPUT_FAILED,
  response,
  starter
})
export const createUsersWithListInput = data => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT,
  data
})
export const createUsersWithListInputSucceeded = (response, starter) => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT_SUCCEEDED,
  response,
  starter
})
export const createUsersWithListInputFailed = (response, starter) => ({
  type: types.CREATE_USERS_WITH_LIST_INPUT_FAILED,
  response,
  starter
})
export const loginUser = (username, password) => ({
  type: types.LOGIN_USER,
  username,
  password
})
export const loginUserSucceeded = (response, starter) => ({
  type: types.LOGIN_USER_SUCCEEDED,
  response,
  starter
})
export const loginUserFailed = (response, starter) => ({
  type: types.LOGIN_USER_FAILED,
  response,
  starter
})
export const logoutUser = () => ({ type: types.LOGOUT_USER })
export const logoutUserSucceeded = (response, starter) => ({
  type: types.LOGOUT_USER_SUCCEEDED,
  response,
  starter
})
export const logoutUserFailed = (response, starter) => ({
  type: types.LOGOUT_USER_FAILED,
  response,
  starter
})
export const getUserByName = username => ({
  type: types.GET_USER_BY_NAME,
  username
})
export const getUserByNameSucceeded = (response, starter) => ({
  type: types.GET_USER_BY_NAME_SUCCEEDED,
  response,
  starter
})
export const getUserByNameFailed = (response, starter) => ({
  type: types.GET_USER_BY_NAME_FAILED,
  response,
  starter
})
export const updateUser = (username, data) => ({
  type: types.UPDATE_USER,
  username,
  data
})
export const updateUserSucceeded = (response, starter) => ({
  type: types.UPDATE_USER_SUCCEEDED,
  response,
  starter
})
export const updateUserFailed = (response, starter) => ({
  type: types.UPDATE_USER_FAILED,
  response,
  starter
})
export const deleteUser = username => ({ type: types.DELETE_USER, username })
export const deleteUserSucceeded = (response, starter) => ({
  type: types.DELETE_USER_SUCCEEDED,
  response,
  starter
})
export const deleteUserFailed = (response, starter) => ({
  type: types.DELETE_USER_FAILED,
  response,
  starter
})
export const api_v1_customtext_list = () => ({
  type: types.API_V1_CUSTOMTEXT_LIST
})
export const api_v1_customtext_listSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_listFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_LIST_FAILED,
  response,
  starter
})
export const api_v1_customtext_read = () => ({
  type: types.API_V1_CUSTOMTEXT_READ
})
export const api_v1_customtext_readSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_readFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_READ_FAILED,
  response,
  starter
})
export const api_v1_customtext_update = data => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE,
  data
})
export const api_v1_customtext_updateSucceeded = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_customtext_partial_update = data => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
  data
})
export const api_v1_customtext_partial_updateSucceeded = (
  response,
  starter
) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_customtext_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_homepage_list = () => ({ type: types.API_V1_HOMEPAGE_LIST })
export const api_v1_homepage_listSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_listFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_LIST_FAILED,
  response,
  starter
})
export const api_v1_homepage_read = () => ({ type: types.API_V1_HOMEPAGE_READ })
export const api_v1_homepage_readSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_readFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_READ_FAILED,
  response,
  starter
})
export const api_v1_homepage_update = data => ({
  type: types.API_V1_HOMEPAGE_UPDATE,
  data
})
export const api_v1_homepage_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_homepage_partial_update = data => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
  data
})
export const api_v1_homepage_partial_updateSucceeded = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_homepage_partial_updateFailed = (response, starter) => ({
  type: types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
export const api_v1_login_create = () => ({ type: types.API_V1_LOGIN_CREATE })
export const api_v1_login_createSucceeded = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_login_createFailed = (response, starter) => ({
  type: types.API_V1_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const api_v1_signup_create = data => ({
  type: types.API_V1_SIGNUP_CREATE,
  data
})
export const api_v1_signup_createSucceeded = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_SUCCEEDED,
  response,
  starter
})
export const api_v1_signup_createFailed = (response, starter) => ({
  type: types.API_V1_SIGNUP_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_login_create = data => ({
  type: types.REST_AUTH_LOGIN_CREATE,
  data
})
export const rest_auth_login_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_login_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGIN_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_logout_list = () => ({
  type: types.REST_AUTH_LOGOUT_LIST
})
export const rest_auth_logout_listSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_listFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_LIST_FAILED,
  response,
  starter
})
export const rest_auth_logout_create = () => ({
  type: types.REST_AUTH_LOGOUT_CREATE
})
export const rest_auth_logout_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_logout_createFailed = (response, starter) => ({
  type: types.REST_AUTH_LOGOUT_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_change_create = data => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE,
  data
})
export const rest_auth_password_change_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_change_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE,
  data
})
export const rest_auth_password_reset_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_createFailed = (response, starter) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_create = data => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
  data
})
export const rest_auth_password_reset_confirm_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_password_reset_confirm_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_create = data => ({
  type: types.REST_AUTH_REGISTRATION_CREATE,
  data
})
export const rest_auth_registration_createSucceeded = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_createFailed = (response, starter) => ({
  type: types.REST_AUTH_REGISTRATION_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_registration_verify_email_create = data => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
  data
})
export const rest_auth_registration_verify_email_createSucceeded = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_registration_verify_email_createFailed = (
  response,
  starter
) => ({
  type: types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED,
  response,
  starter
})
export const rest_auth_user_read = () => ({ type: types.REST_AUTH_USER_READ })
export const rest_auth_user_readSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_readFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_READ_FAILED,
  response,
  starter
})
export const rest_auth_user_update = data => ({
  type: types.REST_AUTH_USER_UPDATE,
  data
})
export const rest_auth_user_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_UPDATE_FAILED,
  response,
  starter
})
export const rest_auth_user_partial_update = data => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE,
  data
})
export const rest_auth_user_partial_updateSucceeded = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED,
  response,
  starter
})
export const rest_auth_user_partial_updateFailed = (response, starter) => ({
  type: types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED,
  response,
  starter
})
