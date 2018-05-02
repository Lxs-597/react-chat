const mongoose = require('mongoose')

const DB_URL = 'mongodb://127.0.0.1:27017/react-chat'

mongoose.connect(DB_URL)
mongoose.connection.on('connected', () => {
  console.log('success to connect to mongodb')
})

const models = {
  user: {
    'user': { 'type': String, 'require': true },
    'pwd': { 'type': String, 'require': true },
    'identity': { 'type': String, 'require': true },
    'avatar': { 'type': String },
    'desc': { 'type': String },
    'title': { 'type': String },
    'company': { 'type': String },
    'money': { 'type': String },
  },
  chat: {}
}

for (let m in models) {
  mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
  getModel: name => {
    return mongoose.model(name)
  }
}