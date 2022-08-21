import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'search',
  initialState: {
    searchInput: ""
  },
  reducers: {
    change: (state,action) => {
      state.searchInput = action.payload
    },
    resetSearch: state => {
      state.searchInput = ""
    }
  }
})


export const { change, resetSearch } = counterSlice.actions
export default counterSlice.reducer