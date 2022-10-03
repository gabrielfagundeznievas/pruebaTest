const express = require('express')
const router = express.Router()

router.post('/register', (req, res) => {
    let data = req.body

    res.status(200).json(
        req.body
    )
})

module.exports = router