import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./services"
export const placeOrder = createAsyncThunk(
  "orders/placeOrder",
  async payload => await apiService.placeOrder(payload)
)
export const getOrderById = createAsyncThunk(
  "orders/getOrderById",
  async payload => await apiService.getOrderById(payload)
)
export const deleteOrder = createAsyncThunk(
  "orders/deleteOrder",
  async payload => await apiService.deleteOrder(payload)
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {},
  extraReducers: {
    [placeOrder.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [placeOrder.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities.push(action.payload)
        state.api.loading = "idle"
      }
    },
    [placeOrder.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [getOrderById.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [getOrderById.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = [
          ...state.entities.filter(record => record.id !== action.payload.id),
          action.payload
        ]
        state.api.loading = "idle"
      }
    },
    [getOrderById.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    },
    [deleteOrder.pending]: (state, action) => {
      if (state.api.loading === "idle") {
        state.api.loading = "pending"
      }
    },
    [deleteOrder.fulfilled]: (state, action) => {
      if (state.api.loading === "pending") {
        state.entities = state.entities.filter(
          record => record.id !== action.starter.id
        )
        state.api.loading = "idle"
      }
    },
    [deleteOrder.rejected]: (state, action) => {
      if (state.api.loading === "pending") {
        state.api.error = action.error
        state.api.loading = "idle"
      }
    }
  }
})
export default { placeOrder, getOrderById, deleteOrder, slice: ordersSlice }
