const express = require('express')

const router = express.Router()

router.get('/info', (req, res) => {
  res.json({
    code: 1
  })
})

module.exports = router