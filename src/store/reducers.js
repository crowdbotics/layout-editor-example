import * as types from "./constants"

const initialState = {
  swaggerPetstore: [],
  pets: [],
  apiResponses: [],
  orders: [],
  users: [],
  customTexts: [],
  testePermissionsAPI: [],
  homePages: [],
  signups: [],
  logins: [],
  passwordChanges: [],
  passwords: [],
  passwordResetConfirms: [],
  verifyEmails: [],
  userDetails: [],
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.UPDATE_PET:
    case types.UPDATE_PET_SUCCEEDED:
    case types.UPDATE_PET_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.ADD_PET:
    case types.ADD_PET_SUCCEEDED:
    case types.ADD_PET_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.FIND_PETS_BY_STATUS:
    case types.FIND_PETS_BY_STATUS_SUCCEEDED:
      return Object.assign({}, state, {
        pets: [...state.pets, action.response],
      })
    case types.FIND_PETS_BY_STATUS_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.FIND_PETS_BY_TAGS:
    case types.FIND_PETS_BY_TAGS_SUCCEEDED:
      return Object.assign({}, state, {
        pets: [...state.pets, action.response],
      })
    case types.FIND_PETS_BY_TAGS_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.GET_PET_BY_ID:
    case types.GET_PET_BY_ID_SUCCEEDED:
      return Object.assign({}, state, {
        pets: [
          ...state.pets.filter((record) => record.id !== action.response.id),
          action.response,
        ],
      })
    case types.GET_PET_BY_ID_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.UPDATE_PET_WITH_FORM:
    case types.UPDATE_PET_WITH_FORM_SUCCEEDED:
    case types.UPDATE_PET_WITH_FORM_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.DELETE_PET:
    case types.DELETE_PET_SUCCEEDED:
    case types.DELETE_PET_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.UPLOAD_FILE:
    case types.UPLOAD_FILE_SUCCEEDED:
      return Object.assign({}, state, {
        apiResponses: [...state.apiResponses, action.response],
      })
    case types.UPLOAD_FILE_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.GET_INVENTORY:
    case types.GET_INVENTORY_SUCCEEDED:
    case types.GET_INVENTORY_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.PLACE_ORDER:
    case types.PLACE_ORDER_SUCCEEDED:
      return Object.assign({}, state, {
        orders: [...state.orders, action.response],
      })
    case types.PLACE_ORDER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.GET_ORDER_BY_ID:
    case types.GET_ORDER_BY_ID_SUCCEEDED:
      return Object.assign({}, state, {
        orders: [
          ...state.orders.filter((record) => record.id !== action.response.id),
          action.response,
        ],
      })
    case types.GET_ORDER_BY_ID_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.DELETE_ORDER:
    case types.DELETE_ORDER_SUCCEEDED:
    case types.DELETE_ORDER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.CREATE_USER:
    case types.CREATE_USER_SUCCEEDED:
    case types.CREATE_USER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.CREATE_USERS_WITH_ARRAY_INPUT:
    case types.CREATE_USERS_WITH_ARRAY_INPUT_SUCCEEDED:
    case types.CREATE_USERS_WITH_ARRAY_INPUT_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.CREATE_USERS_WITH_LIST_INPUT:
    case types.CREATE_USERS_WITH_LIST_INPUT_SUCCEEDED:
    case types.CREATE_USERS_WITH_LIST_INPUT_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.LOGIN_USER:
    case types.LOGIN_USER_SUCCEEDED:
    case types.LOGIN_USER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.LOGOUT_USER:
    case types.LOGOUT_USER_SUCCEEDED:
    case types.LOGOUT_USER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.GET_USER_BY_NAME:
    case types.GET_USER_BY_NAME_SUCCEEDED:
      return Object.assign({}, state, {
        users: [
          ...state.users.filter((record) => record.id !== action.response.id),
          action.response,
        ],
      })
    case types.GET_USER_BY_NAME_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.UPDATE_USER:
    case types.UPDATE_USER_SUCCEEDED:
    case types.UPDATE_USER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.DELETE_USER:
    case types.DELETE_USER_SUCCEEDED:
    case types.DELETE_USER_FAILED:
      return Object.assign({}, state, {
        swaggerPetstore: [...state.swaggerPetstore, action.response],
      })
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [...state.customTexts, action.response],
      })
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [
          ...state.customTexts.filter(
            (record) => record.id !== action.response.id
          ),
          action.response,
        ],
      })
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map((record) =>
          record.id === action.response.id ? action.response : record
        ),
      })
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map((record) =>
          record.id === action.response.id ? action.response : record
        ),
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [...state.homePages, action.response],
      })
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [
          ...state.homePages.filter(
            (record) => record.id !== action.response.id
          ),
          action.response,
        ],
      })
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map((record) =>
          record.id === action.response.id ? action.response : record
        ),
      })
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map((record) =>
          record.id === action.response.id ? action.response : record
        ),
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response],
      })
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        logins: [...state.logins, action.response],
      })
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordChanges: [...state.passwordChanges, action.response],
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwords: [...state.passwords, action.response],
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordResetConfirms: [
          ...state.passwordResetConfirms,
          action.response,
        ],
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response],
      })
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        verifyEmails: [...state.verifyEmails, action.response],
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: [
          ...state.userDetails.filter(
            (record) => record.id !== action.response.id
          ),
          action.response,
        ],
      })
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map((record) =>
          record.id === action.response.id ? action.response : record
        ),
      })
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map((record) =>
          record.id === action.response.id ? action.response : record
        ),
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        testePermissionsAPI: [...state.testePermissionsAPI, action.response],
      })
    default:
      return state
  }
}
