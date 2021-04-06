import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const rest_auth_user_read = createAsyncThunk(
  "userDetails/rest_auth_user_read",
  async payload => await apiService.rest_auth_user_read(payload)
)
export const rest_auth_user_update = createAsyncThunk(
  "userDetails/rest_auth_user_update",
  async payload => await apiService.rest_auth_user_update(payload)
)
export const rest_auth_user_partial_update = createAsyncThunk(
  "userDetails/rest_auth_user_partial_update",
  async payload => await apiService.rest_auth_user_partial_update(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const userDetailsSlice = createSlice({
  name: "userDetails",
  initialState,
  reducers: {},
  extraReducers: {
    [rest_auth_user_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_user_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [rest_auth_user_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [rest_auth_user_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_user_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [rest_auth_user_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [rest_auth_user_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [rest_auth_user_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [rest_auth_user_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update,
  slice: userDetailsSlice
}
