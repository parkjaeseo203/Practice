
const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.json({
        message:'get product'
    })
})


router.post('/', (req, res) => {

    const newProduct = {
        name: req.body.productName,
        price: req.body.productPrice
    }

    res.json({
        message: 'post product',
        productinfo: newProduct
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