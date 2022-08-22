import { createSlice } from '@reduxjs/toolkit'

const searchSlice = createSlice({
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


export const { change, resetSearch } = searchSlice.actions
export default searchSlice.reducer