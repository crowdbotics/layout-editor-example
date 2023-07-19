import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const findPetsByStatus = createAsyncThunk(
  "pets/findPetsByStatus",
  async payload => {
    const response = await apiService.findPetsByStatus(payload)
    return response.data
  }
)
export const findPetsByTags = createAsyncThunk(
  "pets/findPetsByTags",
  async payload => {
    const response = await apiService.findPetsByTags(payload)
    return response.data
  }
)
export const getPetById = createAsyncThunk("pets/getPetById", async payload => {
  const response = await apiService.getPetById(payload)
  return response.data
})
export const updatePetWithForm = createAsyncThunk(
  "pets/updatePetWithForm",
  async payload => {
    const response = await apiService.updatePetWithForm(payload)
    return response.data
  }
)
export const deletePet = createAsyncThunk("pets/deletePet", async payload => {
  const response = await apiService.deletePet(payload)
  return response.data
})
const initialState = { entities: [], api: { loading: "idle", error: null } }
const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(findPetsByStatus.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(findPetsByStatus.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(findPetsByStatus.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(findPetsByTags.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(findPetsByTags.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(findPetsByTags.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(getPetById.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(getPetById.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(getPetById.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(updatePetWithForm.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(updatePetWithForm.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(updatePetWithForm.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(deletePet.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(deletePet.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(deletePet.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  findPetsByStatus,
  findPetsByTags,
  getPetById,
  updatePetWithForm,
  deletePet,
  slice: petsSlice
}
