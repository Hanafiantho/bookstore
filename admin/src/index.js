import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

import 'bootstrap/dist/css/bootstrap.css'
import './style/style.css'

const reduxStore = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store = {reduxStore}>
        <App />
    </Provider>, document.getElementById('root'))