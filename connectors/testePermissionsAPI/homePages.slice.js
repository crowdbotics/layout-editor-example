import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const api_v1_homepage_list = createAsyncThunk(
  "homePages/api_v1_homepage_list",
  async payload => await apiService.api_v1_homepage_list(payload)
)
export const api_v1_homepage_read = createAsyncThunk(
  "homePages/api_v1_homepage_read",
  async payload => await apiService.api_v1_homepage_read(payload)
)
export const api_v1_homepage_update = createAsyncThunk(
  "homePages/api_v1_homepage_update",
  async payload => await apiService.api_v1_homepage_update(payload)
)
export const api_v1_homepage_partial_update = createAsyncThunk(
  "homePages/api_v1_homepage_partial_update",
  async payload => await apiService.api_v1_homepage_partial_update(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const homePagesSlice = createSlice({
  name: "homePages",
  initialState,
  reducers: {},
  extraReducers: {
    [api_v1_homepage_list.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_homepage_list.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [...state.entities, ...action.payload]
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_list.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_read.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_homepage_read.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_read.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_homepage_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_partial_update.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [api_v1_homepage_partial_update.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.map(record =>
          record.id === action.payload.id ? action.payload : record
        )
        state.api.loading = "idle"
      }
    },
    [api_v1_homepage_partial_update.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default {
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  slice: homePagesSlice
}
