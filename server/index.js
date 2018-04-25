const express = require('express')
const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017'

mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('success to connect to mongodb')
})

const app = express()

app.get('/', function (req, res) {
  res.send('<h1>hello world</h1>')
})

app.listen(9001, function () {
  console.log('server start at port 90001')
})