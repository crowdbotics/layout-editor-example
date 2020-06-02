function* updatePetWorker(action) {
  try {
    const result = yield call(apiService.updatePet, action)
    yield put(actions.updatePetSucceeded(result))
  } catch (err) {
    yield put(actions.updatePetFailed(err))
  }
}
function* updatePetWatcher() {
  yield takeEvery(types.UPDATE_PET, updatePetWorker)
}
function* addPetWorker(action) {
  try {
    const result = yield call(apiService.addPet, action)
    yield put(actions.addPetSucceeded(result))
  } catch (err) {
    yield put(actions.addPetFailed(err))
  }
}
function* addPetWatcher() {
  yield takeEvery(types.ADD_PET, addPetWorker)
}
function* findPetsByStatusWorker(action) {
  try {
    const result = yield call(apiService.findPetsByStatus, action)
    yield put(actions.findPetsByStatusSucceeded(result))
  } catch (err) {
    yield put(actions.findPetsByStatusFailed(err))
  }
}
function* findPetsByStatusWatcher() {
  yield takeEvery(types.FIND_PETS_BY_STATUS, findPetsByStatusWorker)
}
function* findPetsByTagsWorker(action) {
  try {
    const result = yield call(apiService.findPetsByTags, action)
    yield put(actions.findPetsByTagsSucceeded(result))
  } catch (err) {
    yield put(actions.findPetsByTagsFailed(err))
  }
}
function* findPetsByTagsWatcher() {
  yield takeEvery(types.FIND_PETS_BY_TAGS, findPetsByTagsWorker)
}
function* getPetByIdWorker(action) {
  try {
    const result = yield call(apiService.getPetById, action)
    yield put(actions.getPetByIdSucceeded(result))
  } catch (err) {
    yield put(actions.getPetByIdFailed(err))
  }
}
function* getPetByIdWatcher() {
  yield takeEvery(types.GET_PET_BY_ID, getPetByIdWorker)
}
function* updatePetWithFormWorker(action) {
  try {
    const result = yield call(apiService.updatePetWithForm, action)
    yield put(actions.updatePetWithFormSucceeded(result))
  } catch (err) {
    yield put(actions.updatePetWithFormFailed(err))
  }
}
function* updatePetWithFormWatcher() {
  yield takeEvery(types.UPDATE_PET_WITH_FORM, updatePetWithFormWorker)
}
function* deletePetWorker(action) {
  try {
    const result = yield call(apiService.deletePet, action)
    yield put(actions.deletePetSucceeded(result))
  } catch (err) {
    yield put(actions.deletePetFailed(err))
  }
}
function* deletePetWatcher() {
  yield takeEvery(types.DELETE_PET, deletePetWorker)
}
function* uploadFileWorker(action) {
  try {
    const result = yield call(apiService.uploadFile, action)
    yield put(actions.uploadFileSucceeded(result))
  } catch (err) {
    yield put(actions.uploadFileFailed(err))
  }
}
function* uploadFileWatcher() {
  yield takeEvery(types.UPLOAD_FILE, uploadFileWorker)
}
function* getInventoryWorker(action) {
  try {
    const result = yield call(apiService.getInventory, action)
    yield put(actions.getInventorySucceeded(result))
  } catch (err) {
    yield put(actions.getInventoryFailed(err))
  }
}
function* getInventoryWatcher() {
  yield takeEvery(types.GET_INVENTORY, getInventoryWorker)
}
function* placeOrderWorker(action) {
  try {
    const result = yield call(apiService.placeOrder, action)
    yield put(actions.placeOrderSucceeded(result))
  } catch (err) {
    yield put(actions.placeOrderFailed(err))
  }
}
function* placeOrderWatcher() {
  yield takeEvery(types.PLACE_ORDER, placeOrderWorker)
}
function* getOrderByIdWorker(action) {
  try {
    const result = yield call(apiService.getOrderById, action)
    yield put(actions.getOrderByIdSucceeded(result))
  } catch (err) {
    yield put(actions.getOrderByIdFailed(err))
  }
}
function* getOrderByIdWatcher() {
  yield takeEvery(types.GET_ORDER_BY_ID, getOrderByIdWorker)
}
function* deleteOrderWorker(action) {
  try {
    const result = yield call(apiService.deleteOrder, action)
    yield put(actions.deleteOrderSucceeded(result))
  } catch (err) {
    yield put(actions.deleteOrderFailed(err))
  }
}
function* deleteOrderWatcher() {
  yield takeEvery(types.DELETE_ORDER, deleteOrderWorker)
}
function* createUserWorker(action) {
  try {
    const result = yield call(apiService.createUser, action)
    yield put(actions.createUserSucceeded(result))
  } catch (err) {
    yield put(actions.createUserFailed(err))
  }
}
function* createUserWatcher() {
  yield takeEvery(types.CREATE_USER, createUserWorker)
}
function* createUsersWithArrayInputWorker(action) {
  try {
    const result = yield call(apiService.createUsersWithArrayInput, action)
    yield put(actions.createUsersWithArrayInputSucceeded(result))
  } catch (err) {
    yield put(actions.createUsersWithArrayInputFailed(err))
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
    yield put(actions.createUsersWithListInputSucceeded(result))
  } catch (err) {
    yield put(actions.createUsersWithListInputFailed(err))
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
    yield put(actions.loginUserSucceeded(result))
  } catch (err) {
    yield put(actions.loginUserFailed(err))
  }
}
function* loginUserWatcher() {
  yield takeEvery(types.LOGIN_USER, loginUserWorker)
}
function* logoutUserWorker(action) {
  try {
    const result = yield call(apiService.logoutUser, action)
    yield put(actions.logoutUserSucceeded(result))
  } catch (err) {
    yield put(actions.logoutUserFailed(err))
  }
}
function* logoutUserWatcher() {
  yield takeEvery(types.LOGOUT_USER, logoutUserWorker)
}
function* getUserByNameWorker(action) {
  try {
    const result = yield call(apiService.getUserByName, action)
    yield put(actions.getUserByNameSucceeded(result))
  } catch (err) {
    yield put(actions.getUserByNameFailed(err))
  }
}
function* getUserByNameWatcher() {
  yield takeEvery(types.GET_USER_BY_NAME, getUserByNameWorker)
}
function* updateUserWorker(action) {
  try {
    const result = yield call(apiService.updateUser, action)
    yield put(actions.updateUserSucceeded(result))
  } catch (err) {
    yield put(actions.updateUserFailed(err))
  }
}
function* updateUserWatcher() {
  yield takeEvery(types.UPDATE_USER, updateUserWorker)
}
function* deleteUserWorker(action) {
  try {
    const result = yield call(apiService.deleteUser, action)
    yield put(actions.deleteUserSucceeded(result))
  } catch (err) {
    yield put(actions.deleteUserFailed(err))
  }
}
function* deleteUserWatcher() {
  yield takeEvery(types.DELETE_USER, deleteUserWorker)
}
export default function* rootSaga() {
  const sagas = [
    [
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
      deleteUserWatcher
    ]
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
