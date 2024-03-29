import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const rest_auth_registration_verify_email_create = createAsyncThunk(
  "verifyEmails/rest_auth_registration_verify_email_create",
  async payload =>
    await apiService.rest_auth_registration_verify_email_create(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const verifyEmailsSlice = createSlice({
  name: "verifyEmails",
  initialState,
  reducers: {},
  extraReducers: {
    [rest_auth_registration_verify_email_create.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_registration_verify_email_create.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [rest_auth_registration_verify_email_create.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  rest_auth_registration_verify_email_create,
  slice: verifyEmailsSlice
}
