import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const rest_auth_password_change_create = createAsyncThunk(
  "passwordChanges/rest_auth_password_change_create",
  async payload => await apiService.rest_auth_password_change_create(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const passwordChangesSlice = createSlice({
  name: "passwordChanges",
  initialState,
  reducers: {},
  extraReducers: {
    [rest_auth_password_change_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_password_change_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [rest_auth_password_change_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { rest_auth_password_change_create, slice: passwordChangesSlice }
