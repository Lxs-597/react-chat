import 'babel-polyfill'
import FastClick from 'fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

FastClick.attach(document.body)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
