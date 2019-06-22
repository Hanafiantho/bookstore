const initialCategory = {
    category: [],
    error: ''
}

export default (state = initialCategory, action) => {
    switch (action.type) {
        case "ADD_ERROR":
            return { 
                ...state, 
                error: action.payload.error
            }

        default:
            return state
    }
}
