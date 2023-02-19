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
  extraReducers: {
    [findPetsByStatus.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [findPetsByStatus.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [findPetsByStatus.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [findPetsByTags.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [findPetsByTags.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = action.payload
        state.api.loading = "idle"
      }
    },
    [findPetsByTags.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [getPetById.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [getPetById.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [getPetById.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [updatePetWithForm.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [updatePetWithForm.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [updatePetWithForm.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [deletePet.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [deletePet.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.meta.arg?.id
        )
        state.api.loading = "idle"
      }
    },
    [deletePet.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
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
