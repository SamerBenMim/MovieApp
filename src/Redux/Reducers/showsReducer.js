import { createSlice } from '@reduxjs/toolkit'

const showsSlice = createSlice({
    name: 'shows',
    initialState: {
        shows: [[],[],[],[],[],[],[],[],[],[]]
    },
    reducers: {
        setShows: (state, action) => {
            state.shows[action.payload.page-1] = action.payload.results
        }
    }
})


export const { setShows } = showsSlice.actions
export default showsSlice.reducer