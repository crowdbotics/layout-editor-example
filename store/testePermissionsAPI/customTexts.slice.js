import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_customtext_list = createAsyncThunk(
  "customTexts/api_v1_customtext_list",
  async payload => {
    const response = await apiService.api_v1_customtext_list(payload)
    return response.data
  }
)
export const api_v1_customtext_read = createAsyncThunk(
  "customTexts/api_v1_customtext_read",
  async payload => {
    const response = await apiService.api_v1_customtext_read(payload)
    return response.data
  }
)
export const api_v1_customtext_update = createAsyncThunk(
  "customTexts/api_v1_customtext_update",
  async payload => {
    const response = await apiService.api_v1_customtext_update(payload)
    return response.data
  }
)
export const api_v1_customtext_partial_update = createAsyncThunk(
  "customTexts/api_v1_customtext_partial_update",
  async payload => {
    const response = await apiService.api_v1_customtext_partial_update(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const customTextsSlice = createSlice({
  name: "customTexts",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_customtext_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customtext_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_read.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customtext_read.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_read.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customtext_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_customtext_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_customtext_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  slice: customTextsSlice
}
