import { configureStore } from '@reduxjs/toolkit'
import moviesReducer from '../Reducers/moviesReducer';
import paginationReducer from '../Reducers/paginationReducer';
import searchReducer from '../Reducers/searchReducer'
import showsReducer from '../Reducers/showsReducer';
const store = configureStore({
    reducer: {
        search: searchReducer,
        pagination : paginationReducer,
        TVshows : showsReducer,
        movies_: moviesReducer
    }
})
export default store;

