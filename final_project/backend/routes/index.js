const express = require('express')
const router = express.Router()

const path = require('path')
const conn = require('../config/db.js')

router.get('/', (req, res)=>{
    console.log('메인서버접근!');
})

module.exports = router