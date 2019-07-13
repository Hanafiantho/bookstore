import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import cookies from 'universal-cookie'
import {connect} from 'react-redux'

import Home from './Home'
import Register from './Register'
import About from './About'
import EditProfile from './EditProfile'
import BooksPage from './BooksPage'
import Cart from './Cart'
import CheckOut from './CheckOut'
import Transaction from './Transaction'

import {keepLogin} from '../actions/index'

const cookie = new cookies()

class App extends React.Component{
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
                    <Route path='/' exact component={Home} />
                    <Route path='/register' component={Register} />
                    <Route path='/editprofile' component={EditProfile} />
                    <Route path='/about' component={About} />
                    <Route path='/books/:category' component={BooksPage} />
                    <Route path='/cart' component={Cart} />
                    <Route path='/checkout/:grandtotal' component={CheckOut} />
                    <Route path='/transaction' component={Transaction} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default connect (null, {keepLogin})(App)