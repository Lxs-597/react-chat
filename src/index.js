import 'babel-polyfill'
import FastClick from 'fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './config'
import './index.css'

import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import store from './store/store'

import App from './App'
import Login from './containers/login/Login'
import Register from './containers/register/Register'
import BossInfo from './containers/bossInfo/BossInfo'
import GeniusInfo from './containers/geniusInfo/GeniusInfo'
import Tourist from './containers/tourist/Tourist'
import Chat from './containers/chat/Chat'
import AuthRoute from './components/authroute/AuthRoute'

FastClick.attach(document.body)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <AuthRoute></AuthRoute>
        <Switch>
          <Route path="/" exact component={App}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/bossinfo" component={BossInfo}></Route>
          <Route path="/geniusinfo" component={GeniusInfo}></Route>
          <Route path="/chat/:user" component={Chat}></Route>
          <Route component={Tourist}></Route>
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
