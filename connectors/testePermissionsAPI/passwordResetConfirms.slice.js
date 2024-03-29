import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const rest_auth_password_reset_confirm_create = createAsyncThunk(
  "passwordResetConfirms/rest_auth_password_reset_confirm_create",
  async payload =>
    await apiService.rest_auth_password_reset_confirm_create(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const passwordResetConfirmsSlice = createSlice({
  name: "passwordResetConfirms",
  initialState,
  reducers: {},
  extraReducers: {
    [rest_auth_password_reset_confirm_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_password_reset_confirm_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [rest_auth_password_reset_confirm_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  rest_auth_password_reset_confirm_create,
  slice: passwordResetConfirmsSlice
}
