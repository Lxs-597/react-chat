const express = require('express')
const app = express()

const userRouter = require('./user')

app.use('/user' ,userRouter)

app.listen(9001, function () {
  console.log('server start at port 9001')
})