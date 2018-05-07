const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()
const model = require('./model')
const chatModel = model.getModel('chat')

const server = require('http').Server(app)
const io = require('socket.io')(server)

// chatModel.remove({}, (e, d) => {})

io.on('connection', socket => {
  console.log('io connection')
  socket.on('message', data => {
    const {from, to, msg} = data
    const chatid = [from, to].sort().join('_')
    chatModel.create({chatid, from, to, content: msg}, (err, doc) => {
      if (!err) {
        console.log(doc)
        io.emit('receive', {...doc._doc})
      }
    })
  })
})

const userRouter = require('./user')
app.use(cookieParser())

app.use(bodyParser.json())
app.use('/user' ,userRouter)

server.listen(9001, function () {
  console.log('server start at port 9001')
})