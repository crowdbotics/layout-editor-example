import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const uploadFile = createAsyncThunk(
  "apiResponses/uploadFile",
  async payload => {
    const response = await apiService.uploadFile(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const apiResponsesSlice = createSlice({
  name: "apiResponses",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(uploadFile.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(uploadFile.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(uploadFile.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default { uploadFile, slice: apiResponsesSlice }
