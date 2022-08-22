import { configureStore } from '@reduxjs/toolkit'
import paginationReducer from '../Reducers/paginationReducer';
import searchReducer from '../Reducers/searchReducer'
import showsReducer from '../Reducers/showsReducer';
const store = configureStore({
    reducer: {
        search: searchReducer,
        pagination : paginationReducer,
        TVshows : showsReducer
    }
})
export default store;

