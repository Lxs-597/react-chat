const express = require('express')
const router = express.Router()
const md5 = require('blueimp-md5')
const model = require('./model')
const userModel = model.getModel('user')

const _filter = {
  'pwd': 0,
  '__v': 0
}

router.post('/login', (req, res) => {
  const { user, pwd } = req.body

  userModel.findOne({user, pwd: md5(pwd)}, _filter, (err, doc) => {
    if (err) {
      return res.json({
        code: 0,
        msg: '服务器出错！'
      })
    }

    if (!doc) {
      return res.json({
        code: 1,
        msg: '用户名密码错误！'
      })
    }

    res.cookie('userid', doc._id)
    return res.json({
      code: 0,
      data: doc
    })
  })
})

router.post('/register', (req, res) => {
  const { user, pwd, identity } = req.body
  userModel.findOne({user}, (err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        msg: '服务器错误！'
      })
    }

    if (doc) {
      return res.json({
        code: 1,
        msg: '用户名已存在！'
      })
    }

    const usermodel = new userModel({user, identity, pwd: md5(pwd)})
    usermodel.save((e, d) => {
      if (e) {
        return res.json({
          code: 1,
          msg: '数据库错误！'
        })
      }
      
      const { user, identity, _id } = d
      res.cookie('userid', _id)
      return res.json({ 
        code: 0,
        data: { user, identity, _id }
      })
    })
  })
})

router.post('/update', (req, res) => {
  const userid = req.cookies.userid

  if (!userid) {
    return json.dumps({ code: 1 })
  }

  const body = req.body
  userModel.findByIdAndUpdate(userid, body, (err, doc) => {
    const { user, identity } = doc
    const data = { user, identity, ...body }

    return res.json({
      code: 0,
      data
    })
  })
})

router.get('/info', (req, res) => {
  const { userid } = req.cookies

  if (!userid) {
    return res.json({
      code: 1
    })
  }
  userModel.findById(userid, _filter,(err, doc) => {
    if (err) {
      return res.json({
        code: 1,
        msg: '服务器错误！'
      })
    }

    if (doc) {
      return res.json({
        code: 0,
        data: doc
      })
    }
  })
})

router.get('/list', (req, res) => {
  const { identity } = req.query
  userModel.find({identity}, (err, doc) => {
    return res.json({
      code: 0,
      data: doc
    })
  })
})

module.exports = router