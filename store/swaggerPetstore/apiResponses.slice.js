import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const uploadFile = createAsyncThunk(
  "apiResponses/uploadFile",
  async payload => await apiService.uploadFile(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const apiResponsesSlice = createSlice({
  name: "apiResponses",
  initialState,
  reducers: {},
  extraReducers: {
    [uploadFile.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [uploadFile.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [uploadFile.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { uploadFile, slice: apiResponsesSlice }
