import 'babel-polyfill'
import FastClick from 'fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './config'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import store from './store/store'

import App from './App'
import Login from './containers/login/Login'
import Register from './containers/register/Register'
import AuthRoute from './components/authroute/AuthRoute'

FastClick.attach(document.body)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <AuthRoute></AuthRoute>
        <Route path="/" exact component={App}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
