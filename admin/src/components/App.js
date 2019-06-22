import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'

import Login from './Login'
import ManageProduct from './ManageProducts'

import {keepLogin} from '../actions/index'

const cookie = new cookies()

class App extends React.Component {
    componentDidMount(){
        var userCookie = cookie.get('Login')

        if(userCookie !== undefined){
            this.props.keepLogin(userCookie)
        }
    }
    
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/product' component={ManageProduct} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect(null, {keepLogin})(App)