import { put, call, all, spawn } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* updatePetWorker(action) {
  try {
    const result = yield call(apiService.updatePet, action)
    yield put(actions.updatePetSucceeded(result, action))
  } catch (err) {
    yield put(actions.updatePetFailed(err, action))
  }
}
function* updatePetWatcher() {
  yield takeEvery(types.UPDATE_PET, updatePetWorker)
}
function* addPetWorker(action) {
  try {
    const result = yield call(apiService.addPet, action)
    yield put(actions.addPetSucceeded(result, action))
  } catch (err) {
    yield put(actions.addPetFailed(err, action))
  }
}
function* addPetWatcher() {
  yield takeEvery(types.ADD_PET, addPetWorker)
}
function* findPetsByStatusWorker(action) {
  try {
    const result = yield call(apiService.findPetsByStatus, action)
    yield put(actions.findPetsByStatusSucceeded(result, action))
  } catch (err) {
    yield put(actions.findPetsByStatusFailed(err, action))
  }
}
function* findPetsByStatusWatcher() {
  yield takeEvery(types.FIND_PETS_BY_STATUS, findPetsByStatusWorker)
}
function* findPetsByTagsWorker(action) {
  try {
    const result = yield call(apiService.findPetsByTags, action)
    yield put(actions.findPetsByTagsSucceeded(result, action))
  } catch (err) {
    yield put(actions.findPetsByTagsFailed(err, action))
  }
}
function* findPetsByTagsWatcher() {
  yield takeEvery(types.FIND_PETS_BY_TAGS, findPetsByTagsWorker)
}
function* getPetByIdWorker(action) {
  try {
    const result = yield call(apiService.getPetById, action)
    yield put(actions.getPetByIdSucceeded(result, action))
  } catch (err) {
    yield put(actions.getPetByIdFailed(err, action))
  }
}
function* getPetByIdWatcher() {
  yield takeEvery(types.GET_PET_BY_ID, getPetByIdWorker)
}
function* updatePetWithFormWorker(action) {
  try {
    const result = yield call(apiService.updatePetWithForm, action)
    yield put(actions.updatePetWithFormSucceeded(result, action))
  } catch (err) {
    yield put(actions.updatePetWithFormFailed(err, action))
  }
}
function* updatePetWithFormWatcher() {
  yield takeEvery(types.UPDATE_PET_WITH_FORM, updatePetWithFormWorker)
}
function* deletePetWorker(action) {
  try {
    const result = yield call(apiService.deletePet, action)
    yield put(actions.deletePetSucceeded(result, action))
  } catch (err) {
    yield put(actions.deletePetFailed(err, action))
  }
}
function* deletePetWatcher() {
  yield takeEvery(types.DELETE_PET, deletePetWorker)
}
function* uploadFileWorker(action) {
  try {
    const result = yield call(apiService.uploadFile, action)
    yield put(actions.uploadFileSucceeded(result, action))
  } catch (err) {
    yield put(actions.uploadFileFailed(err, action))
  }
}
function* uploadFileWatcher() {
  yield takeEvery(types.UPLOAD_FILE, uploadFileWorker)
}
function* getInventoryWorker(action) {
  try {
    const result = yield call(apiService.getInventory, action)
    yield put(actions.getInventorySucceeded(result, action))
  } catch (err) {
    yield put(actions.getInventoryFailed(err, action))
  }
}
function* getInventoryWatcher() {
  yield takeEvery(types.GET_INVENTORY, getInventoryWorker)
}
function* placeOrderWorker(action) {
  try {
    const result = yield call(apiService.placeOrder, action)
    yield put(actions.placeOrderSucceeded(result, action))
  } catch (err) {
    yield put(actions.placeOrderFailed(err, action))
  }
}
function* placeOrderWatcher() {
  yield takeEvery(types.PLACE_ORDER, placeOrderWorker)
}
function* getOrderByIdWorker(action) {
  try {
    const result = yield call(apiService.getOrderById, action)
    yield put(actions.getOrderByIdSucceeded(result, action))
  } catch (err) {
    yield put(actions.getOrderByIdFailed(err, action))
  }
}
function* getOrderByIdWatcher() {
  yield takeEvery(types.GET_ORDER_BY_ID, getOrderByIdWorker)
}
function* deleteOrderWorker(action) {
  try {
    const result = yield call(apiService.deleteOrder, action)
    yield put(actions.deleteOrderSucceeded(result, action))
  } catch (err) {
    yield put(actions.deleteOrderFailed(err, action))
  }
}
function* deleteOrderWatcher() {
  yield takeEvery(types.DELETE_ORDER, deleteOrderWorker)
}
function* createUserWorker(action) {
  try {
    const result = yield call(apiService.createUser, action)
    yield put(actions.createUserSucceeded(result, action))
  } catch (err) {
    yield put(actions.createUserFailed(err, action))
  }
}
function* createUserWatcher() {
  yield takeEvery(types.CREATE_USER, createUserWorker)
}
function* createUsersWithArrayInputWorker(action) {
  try {
    const result = yield call(apiService.createUsersWithArrayInput, action)
    yield put(actions.createUsersWithArrayInputSucceeded(result, action))
  } catch (err) {
    yield put(actions.createUsersWithArrayInputFailed(err, action))
  }
}
function* createUsersWithArrayInputWatcher() {
  yield takeEvery(
    types.CREATE_USERS_WITH_ARRAY_INPUT,
    createUsersWithArrayInputWorker
  )
}
function* createUsersWithListInputWorker(action) {
  try {
    const result = yield call(apiService.createUsersWithListInput, action)
    yield put(actions.createUsersWithListInputSucceeded(result, action))
  } catch (err) {
    yield put(actions.createUsersWithListInputFailed(err, action))
  }
}
function* createUsersWithListInputWatcher() {
  yield takeEvery(
    types.CREATE_USERS_WITH_LIST_INPUT,
    createUsersWithListInputWorker
  )
}
function* loginUserWorker(action) {
  try {
    const result = yield call(apiService.loginUser, action)
    yield put(actions.loginUserSucceeded(result, action))
  } catch (err) {
    yield put(actions.loginUserFailed(err, action))
  }
}
function* loginUserWatcher() {
  yield takeEvery(types.LOGIN_USER, loginUserWorker)
}
function* logoutUserWorker(action) {
  try {
    const result = yield call(apiService.logoutUser, action)
    yield put(actions.logoutUserSucceeded(result, action))
  } catch (err) {
    yield put(actions.logoutUserFailed(err, action))
  }
}
function* logoutUserWatcher() {
  yield takeEvery(types.LOGOUT_USER, logoutUserWorker)
}
function* getUserByNameWorker(action) {
  try {
    const result = yield call(apiService.getUserByName, action)
    yield put(actions.getUserByNameSucceeded(result, action))
  } catch (err) {
    yield put(actions.getUserByNameFailed(err, action))
  }
}
function* getUserByNameWatcher() {
  yield takeEvery(types.GET_USER_BY_NAME, getUserByNameWorker)
}
function* updateUserWorker(action) {
  try {
    const result = yield call(apiService.updateUser, action)
    yield put(actions.updateUserSucceeded(result, action))
  } catch (err) {
    yield put(actions.updateUserFailed(err, action))
  }
}
function* updateUserWatcher() {
  yield takeEvery(types.UPDATE_USER, updateUserWorker)
}
function* deleteUserWorker(action) {
  try {
    const result = yield call(apiService.deleteUser, action)
    yield put(actions.deleteUserSucceeded(result, action))
  } catch (err) {
    yield put(actions.deleteUserFailed(err, action))
  }
}
function* deleteUserWatcher() {
  yield takeEvery(types.DELETE_USER, deleteUserWorker)
}
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err, action))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err, action))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err, action))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err, action))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err, action))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err, action))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err, action))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err, action))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err, action))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err, action))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err, action))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err, action))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err, action))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err, action))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err, action))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(
      actions.rest_auth_password_reset_confirm_createSucceeded(result, action)
    )
  } catch (err) {
    yield put(
      actions.rest_auth_password_reset_confirm_createFailed(err, action)
    )
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err, action))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.rest_auth_registration_verify_email_createFailed(err, action)
    )
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err, action))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err, action))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result, action))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err, action))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    updatePetWatcher,
    addPetWatcher,
    findPetsByStatusWatcher,
    findPetsByTagsWatcher,
    getPetByIdWatcher,
    updatePetWithFormWatcher,
    deletePetWatcher,
    uploadFileWatcher,
    getInventoryWatcher,
    placeOrderWatcher,
    getOrderByIdWatcher,
    deleteOrderWatcher,
    createUserWatcher,
    createUsersWithArrayInputWatcher,
    createUsersWithListInputWatcher,
    loginUserWatcher,
    logoutUserWatcher,
    getUserByNameWatcher,
    updateUserWatcher,
    deleteUserWatcher,
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_login_createWatcher,
    api_v1_signup_createWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
