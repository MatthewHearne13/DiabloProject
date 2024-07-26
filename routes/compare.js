const express = require('express')
const router = express.Router()

//Barbarian Classes Route
router.get('/classCompare', (req, res) => {
    res.render('compare/classCompare')
})


module.exports = router