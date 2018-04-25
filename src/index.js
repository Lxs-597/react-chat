import 'babel-polyfill'
import FastClick from 'fastclick'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'

import App from './App'

FastClick.attach(document.body)

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker()
