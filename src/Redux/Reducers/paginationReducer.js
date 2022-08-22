import { createSlice } from '@reduxjs/toolkit'

const paginationSlice = createSlice({
    name: 'pagination',
    initialState: {
        page: 1
    },
    reducers: {
        setPage: (state, action) => {
            state.page = action.payload
        }
    }
})


export const { setPage } = paginationSlice.actions
export default paginationSlice.reducer