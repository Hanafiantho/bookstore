import { combineReducers } from "redux";

import AuthReducer from './adminReducer'
import CategoryReducer from './categoryReducer'

export default combineReducers(
    {
        auth: AuthReducer,
        category: CategoryReducer
    }
)