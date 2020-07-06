import * as types from "./constants"
export default function apiReducer(state = {}, action) {
  switch (action.type) {
    case types.UPDATE_PET:
    case types.UPDATE_PET_SUCCEEDED:
    case types.UPDATE_PET_FAILED:
    case types.ADD_PET:
    case types.ADD_PET_SUCCEEDED:
    case types.ADD_PET_FAILED:
    case types.FIND_PETS_BY_STATUS:
    case types.FIND_PETS_BY_STATUS_SUCCEEDED:
    case types.FIND_PETS_BY_STATUS_FAILED:
    case types.FIND_PETS_BY_TAGS:
    case types.FIND_PETS_BY_TAGS_SUCCEEDED:
    case types.FIND_PETS_BY_TAGS_FAILED:
    case types.GET_PET_BY_ID:
    case types.GET_PET_BY_ID_SUCCEEDED:
    case types.GET_PET_BY_ID_FAILED:
    case types.UPDATE_PET_WITH_FORM:
    case types.UPDATE_PET_WITH_FORM_SUCCEEDED:
    case types.UPDATE_PET_WITH_FORM_FAILED:
    case types.DELETE_PET:
    case types.DELETE_PET_SUCCEEDED:
    case types.DELETE_PET_FAILED:
    case types.UPLOAD_FILE:
    case types.UPLOAD_FILE_SUCCEEDED:
    case types.UPLOAD_FILE_FAILED:
    case types.GET_INVENTORY:
    case types.GET_INVENTORY_SUCCEEDED:
    case types.GET_INVENTORY_FAILED:
    case types.PLACE_ORDER:
    case types.PLACE_ORDER_SUCCEEDED:
    case types.PLACE_ORDER_FAILED:
    case types.GET_ORDER_BY_ID:
    case types.GET_ORDER_BY_ID_SUCCEEDED:
    case types.GET_ORDER_BY_ID_FAILED:
    case types.DELETE_ORDER:
    case types.DELETE_ORDER_SUCCEEDED:
    case types.DELETE_ORDER_FAILED:
    case types.CREATE_USER:
    case types.CREATE_USER_SUCCEEDED:
    case types.CREATE_USER_FAILED:
    case types.CREATE_USERS_WITH_ARRAY_INPUT:
    case types.CREATE_USERS_WITH_ARRAY_INPUT_SUCCEEDED:
    case types.CREATE_USERS_WITH_ARRAY_INPUT_FAILED:
    case types.CREATE_USERS_WITH_LIST_INPUT:
    case types.CREATE_USERS_WITH_LIST_INPUT_SUCCEEDED:
    case types.CREATE_USERS_WITH_LIST_INPUT_FAILED:
    case types.LOGIN_USER:
    case types.LOGIN_USER_SUCCEEDED:
    case types.LOGIN_USER_FAILED:
    case types.LOGOUT_USER:
    case types.LOGOUT_USER_SUCCEEDED:
    case types.LOGOUT_USER_FAILED:
    case types.GET_USER_BY_NAME:
    case types.GET_USER_BY_NAME_SUCCEEDED:
    case types.GET_USER_BY_NAME_FAILED:
    case types.UPDATE_USER:
    case types.UPDATE_USER_SUCCEEDED:
    case types.UPDATE_USER_FAILED:
    case types.DELETE_USER:
    case types.DELETE_USER_SUCCEEDED:
    case types.DELETE_USER_FAILED:
    default:
      return state
  }
}
