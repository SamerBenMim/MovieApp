import { createSlice } from '@reduxjs/toolkit'

const moviesSlice = createSlice({
    name: 'movies',
    initialState: {
        movies_: [[], [], [], [], [], [], [], [], [], []]
    },
    reducers: {
        setmovies: (state, action) => {
            state.movies_[action.payload.page - 1] = action.payload.results
        }
    }
})


export const { setmovies } = moviesSlice.actions
export default moviesSlice.reducer