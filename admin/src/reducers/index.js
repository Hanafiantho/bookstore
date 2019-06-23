import { combineReducers } from "redux";

import AuthReducer from './adminReducer'
import CategoryReducer from './categoryReducer'
import BookReducer from './bookReducer'

export default combineReducers(
    {
        auth: AuthReducer,
        category: CategoryReducer,
        books: BookReducer
    }
)