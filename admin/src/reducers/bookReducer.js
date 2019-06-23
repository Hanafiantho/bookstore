const initialBooks = {
    books: []
}

export default (state = initialBooks, action) => {
    switch (action.type) {
        case "GET_BOOKS":
            return { 
                ...state, 
                books: action.payload.books
            }

        default:
            return state
    }
}
