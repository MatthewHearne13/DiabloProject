const express = require('express')
const router = express.Router()

//Solo Play Route
router.get('/solo', (req, res) => {
    res.render('GroupOrSolo/solo')
})

//Group Play Route
router.get('/group', (req, res) => {
    res.render('GroupOrSolo/group')
})

module.exports = router