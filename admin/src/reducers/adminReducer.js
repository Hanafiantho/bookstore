const initialAdmin = {
    id: "",
    username: ""
}

export default (state = initialAdmin, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return { 
                ...state, 
                id: action.payload.id, 
                username: action.payload.username, 
            }

        default:
            return state
    }
}
