import 'babel-polyfill'
import FastClick from 'fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import './config'

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import reducers from './reducers'

import App from './App'

const logger = createLogger()

const store = createStore(
  reducers,
  applyMiddleware(
    logger,
    thunk
  )
)

FastClick.attach(document.body)

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}></Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()
