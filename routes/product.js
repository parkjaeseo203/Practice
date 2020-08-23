
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.json({
        message:'get product'
    })
})


router.post('/', (req, res) => {
    res.json({
        message: 'post product'
    })
})


router.put('/', (req, res) => {
    res.json({
        message: 'put product'
    })
})


router.delete('/', (req, res) => {
    res.json({
        message: 'delete product'
    })
})




module.exports = router