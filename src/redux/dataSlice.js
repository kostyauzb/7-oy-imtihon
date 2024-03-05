import {createSlice} from "@reduxjs/toolkit"

const initialState = {
  selectData: null,
  total: 0,
}

const dataSlice = createSlice({
  name: "ecommerce",
  initialState,
  reducers: {
    deleteAll: (state, {payload}) => {
      state.selectData = null
    },
    incrementFunc: (state, {payload}) => {
      state.total++
    },

    decrementFunc: (state, {payload}) => {
      if (state.total > 0) {
        state.total--
      }
    },
    addDataSelect: (state, {payload}) => {
      if (state.total > 0) {
        state.selectData = payload
        state.total = 0
      }
    },
  },
})

export const {incrementFunc, deleteAll, decrementFunc, addDataSelect} =
  dataSlice.actions

export default dataSlice.reducer
