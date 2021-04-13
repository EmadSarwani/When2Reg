const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('index') //what files are we rendering 
})

module.exports = router