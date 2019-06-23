import axios from '../config/axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

// Admin Login
export const onLoginClick = (username, password) => {
    console.log(username, password);
    
    return dispatch => {
        axios.get('/getAdmin', {
            params: {
                username,
                password
            } 
        }).then(res => {
            console.log(res.data)
            if (res.data.length === 1) {
                const { id, username} = res.data[0]

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { id, username }
                })

                console.log(res.data[0])
                cookie.set('Login', res.data[0].username, res.data[0].password, {path: '/'})
                
                
            } else {
                dispatch({
                    type: "AUTH_ERROR",
                    payload: "Username and Password is incorrect"
                })

                setTimeout(() => {
                    dispatch({
                    type: "SET_TIMEOUT"
                    })
                }, 3000)
            }
        }).catch(err => {
            console.log("Syestem Error")
        })
    };
};

export const keepLogin = (username) => {
    return dispatch => {
        console.log(username);
        
        axios.get("/keepAdminLogin", {
            params: {
                username
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length !== 0) {
                const { id, username } = res.data[0]

                    // if(avatar) {
                    //     axios.get('/getAvatar', {
                    //         params: {
                    //             username
                    //         }
                    //     }).then(res => {
                    //         const avatar = res.data
        
                    //         dispatch({
                    //             type: "ADD_AVATAR",
                    //             payload: { avatar }
                    //         })
                    //     })
                    // }

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { id, username }
                })
            }
        })
    }
}

// Admin Logout
export const onLogoutAdmin = () => {
    cookie.remove("Login")
    return { type: "AUTH_LOGOUT" }
}


// Add Category
export const onAddCategory = (category) => {
    console.log(category);

    return dispatch => {
        axios.post ('/addCategory', {
            category
        }).then(res => {
            console.log(res);
            
            if(res.data.affectedRows !== 1) {
                const error = res.data
                console.log(error);

                dispatch({
                    type: "ADD_ERROR",
                    payload: {error}
                })
            }
        })
    }
}

// Get Book
export const onGetBooks = () => {
    return dispatch => {
        axios.get('/getBooks').then(res => {
            console.log(res.data);
            const books = res.data

            dispatch({
                type: "GET_BOOKS",
                payload: {books}
            })
        })
    }
}