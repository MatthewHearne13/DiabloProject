const express = require('express')
const router = express.Router()

//Barbarian Classes Route
router.get('/barbarian', (req, res) => {
    res.render('classes/barbarian')
})

//Druid Route
router.get('/druid', (req, res) => {
    res.render('classes/druid')
})

//Necromancer Route
router.get('/necromancer', (req, res) => {
    res.render('classes/necromancer')
})

//Rogue Route
router.get('/rogue', (req, res) => {
    res.render('classes/rogue')
})

//Sorcerer Route
router.get('/sorcerer', (req, res) => {
    res.render('classes/sorcerer')
})

module.exports = router