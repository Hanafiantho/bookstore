import axios from '../config/axios'
import cookies from 'universal-cookie'

const cookie = new cookies()

// USER REGISTRATION
export const onRegister = (firstname, lastname, username, email, password) => {
    console.log(firstname, lastname, username, email, password)
    return dispatch => {
        axios.post ('/addUsers', {
            firstname, 
            lastname,
            username,
            email,
            password
        }).then(res => {
            console.log(res);
            dispatch({
                type: "AUTH_SUCCESS",
                payload: 'Registration Success'
            })

            setTimeout(() => {
                dispatch({
                    type: 'SET_TIMEOUT'
                }, 3000)
            })
        })
    }
}

// LOGIN
export const onLoginClick = (username, password) => {
    console.log(username, password);
    
    return dispatch => {
        axios.get('/users', {
            params: {
                username,
                password
            } 
        }).then(res => {
            console.log(res.data)
            if (res.data.length === 1) {
                const { id, username, firstname, lastname, email, phone } = res.data[0]

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { id, username, firstname, lastname, email, phone }
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

export const keepLogin = (username) => {
    return dispatch => {
        console.log(username);
        
        axios.get("/keepLogin", {
            params: {
                username
            }
        }).then(res => {
            console.log(res.data)
            if (res.data.length !== 0) {
                const { id, username, firstname, lastname, email, phone, avatar} = res.data[0]

                    if(avatar) {
                        axios.get('/getAvatar', {
                            params: {
                                username
                            }
                        }).then(res => {
                            const avatar = res.data
        
                            dispatch({
                                type: "ADD_AVATAR",
                                payload: { avatar }
                            })
                        })
                    }

                dispatch({
                    type: "LOGIN_SUCCESS",
                    payload: { id, username, firstname, lastname, email, phone }
                })
            }
        })
    }
}

// LOGOUT
export const onLogoutUser = () => {
    cookie.remove("Login")
    return { type: "AUTH_LOGOUT" }
}


// --------------------- EDIT USER DATA --------------------- //

// ADD AVATAR
export const onAddAvatar = (id, avatar) => {
    console.log(id, avatar);
    const formData = new FormData()

    formData.append("id", id)
    if(avatar.length !== 0) {
        formData.append("avatar", avatar)
    }
    
    return async dispatch => {
        await axios.patch (`/addAvatar/${id}`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }).then(res => {
            console.log(res.data);

            dispatch({
                type: "ADD_USER_AVATAR",
                payload: {avatar}
            })
        })
    }
}

export const onGetAvatar = (username) => {
    console.log(username);
    
    return async dispatch => {
        await axios.get('/getAvatar', {
            params : {
                username
            }
        }).then(res => {
            const avatar = res.data
            console.log(avatar);
            
            dispatch({
                type: "SHOW_USER AVATAR",
                payload: { avatar }
            })
            
        })
    }
}

// EDIT USER FIRSTNAME
export const onEditFirstname = (username, newfirstname) => {
    console.log(username, newfirstname)
    return dispatch => {
        axios.patch (`/editUsers/${username}`, {
            firstname : newfirstname
        }).then(res => {
            console.log(res);
            dispatch({
                type: "EDIT_FIRSTNAME_SUCCESS",
                payload: { newfirstname }
            })
        })
    }
}

// EDIT USER LASTNAME
export const onEditLastname = (username, newlastname) => {
    console.log(username, newlastname)
    return dispatch => {
        axios.patch (`/editUsers/${username}`, {
            lastname : newlastname
        }).then(res => {
            console.log(res);
            dispatch({
                type: "EDIT_LASTNAME_SUCCESS",
                payload: { newlastname }
            })
        })
    }
}

// EDIT USER EMAIL
export const onEditEmail = (username, newemail) => {
    console.log(username, newemail);
    return dispatch => {
        axios.patch (`/editUsers/${username}`, {
            email : newemail
        }).then(res => {
            console.log(res);
            dispatch({
                type: "EDIT_EMAIL_SUCCESS",
                payload: { newemail }
            })
        })
    }
}

// EDIT USER PHONE
export const onEditPhone = (username, newphone) => {
    console.log(username, newphone);
    return dispatch => {
        axios.patch (`/editUsers/${username}`, {
            phone : newphone
        }).then(res => {
            console.log(res);
            dispatch({
                type: "EDIT_PHONE_SUCCESS",
                payload: { newphone }
            })
        })
    }
}

// --------------------- ADDRESS --------------------- //

// Get Address
export const getAddress = (id) => {
    console.log(id);
    return dispatch => {
        axios.get ('/getAddress', {
            params : {
                user_id: id
            }
        }).then(res => {
            console.log(res.data);
            
            const address = res.data

            dispatch({
                type: "GET_ADDRESS_SUCCESS",
                payload: {address}
            })
        })
    }
}

// EDIT ADDRESS
export const onEditAddress = (id, address_title, recepient_name, phone, address, city, postal_code, province, country) => {
    return async dispatch => {
        console.log('action');
        
        await axios.patch(`/editAddress/${id}`, {
            address_title,
            recepient_name,
            phone,
            address,
            city,
            postal_code,
            province,
            country
        }).then(res => {
            console.log(res);
            
            // dispatch({
            //     type: "EDIT_ADDRESS_SUCCESS",
            //     payload: {address_title,
            //         recepient_name,
            //         phone,
            //         address,
            //         city,
            //         postal_code,
            //         province,
            //         country
            //     }
            // })
        })
    }
}
