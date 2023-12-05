const express = require('express')
var router = express.Router()

router.get('/', (req, res,next) => res.send('Shannu World!'))
module.exports = router