const express = require('express')
const resultRouter = express.Router();

resultRouter.get('',async(req,res) => {
    res.render('result')
})

module.exports = resultRouter