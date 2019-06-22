import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import Login from './Login'
import ManageProduct from './ManageProducts'

class App extends React.Component {
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

export default App