import axios from '../config/axios'
import cookies from 'universal-cookie'
import { SSL_OP_LEGACY_SERVER_CONNECT } from 'constants';

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
                cookie.set('id', res.data[0].id, {path: '/'})
                
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

// Get Category
export const onGetCategory = async () => {
    return async dispatch => {
        await axios.get('/getAvatar').then(res => {
            console.log(res);
            
            
            // dispatch({
            //     type: "SHOW_USER AVATAR",
            //     payload: { avatar }
            // })
            
        })
    }
}