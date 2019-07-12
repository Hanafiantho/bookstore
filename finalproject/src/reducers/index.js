import { combineReducers } from "redux";

const init = {
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    avatar: "",
    error: "",
    success: "",
    address: [],
    books: [],
    cart: [],
    totalprice: null,
    payment: [],
    shipping: [],
    newbooks: []
}

const AuthReducer = (state = init, action) => {

    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { 
                ...state, 
                id: action.payload.id, 
                username: action.payload.username, 
                firstname: action.payload.firstname, 
                lastname: action.payload.lastname,
                email: action.payload.email,
                phone: action.payload.phone
            }

        case "AUTH_ERROR":
            return { ...state, error: action.payload, success: "" };

        case "AUTH_SUCCESS":
            return { ...state, error: "", success: action.payload };

        case "SET_TIMEOUT":
            return { ...state, error: "", success: "" };

        case "AUTH_LOGOUT":
            return (state = init);

        case "SHOW_USER AVATAR":
            return {
                ...state,
                avatar: action.payload.avatar
            }

        case "ADD_AVATAR":
            return {
                ...state,
                avatar: action.payload.avatar
            }

        case "EDIT_FIRSTNAME_SUCCESS":
            return { 
                ...state, 
                error: "", 
                firstname: action.payload.newfirstname, 
            }

        case "EDIT_LASTNAME_SUCCESS":
            return { 
                ...state, 
                error: "", 
                lastname: action.payload.newlastname, 
            }

        case "EDIT_EMAIL_SUCCESS":
            return { 
                ...state, 
                error: "",
                email: action.payload.newemail 
            }

        case "EDIT_EMAIL_SUCCESS":
            return { 
                ...state, 
                error: "",
                phone: action.payload.newphone 
            }

        case "GET_ADDRESS_SUCCESS":
            return {
                ...state,
                address: action.payload.address
            }

        case "GET_BOOKS":
            return { 
                ...state, 
                books: action.payload.books
            }
        
        case "GET_CART":
            return {
                ...state,
                cart: action.payload.cart
            }

        case "GET_TOTAL_PRICE":
            return {
                ...state,
                totalprice: action.payload.totalprice
            }
        
        case "GET_PAYMENT_METHOD":
            return {
                ...state,
                payment: action.payload.payment
            }
        
        case "GET_SHIPPING_METHOD":
            return {
                ...state,
                shipping: action.payload.shipping
            }

        case "GET_NEW_BOOKS":
                return {
                    ...state,
                    newbooks: action.payload.newbooks
                }

        default:
            return state;
    }
}

export default combineReducers({
    auth: AuthReducer
})
