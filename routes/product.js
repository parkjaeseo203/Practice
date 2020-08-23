
const express = require('express')
const router = express.Router()

const productModel = require('../model/product')


router.get('/', (req, res) => {

    productModel
        .find()
        .then(docs => {
            res.json({
                message: "Successfully get Date",
                count: docs.length,
                products: docs
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })


    // res.json({
    //     message:'get product'
    // })
})

router.get('/:productId', (req, res) => {

    productModel
        .findById(req.params.productId)
        .then(doc => {
            res.json({
                message: "Successful get product at" + req.params.productId,
                productInfo: doc
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })
    })



router.post('/', (req, res) => {

    const newProduct = new productModel({
        name: req.body.productname,
        price: req.body.productprice
    })

    newProduct
        .save()
        .then(doc => {
            res.json({
                message: "saved product",
                productInfo: doc
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })



    // const newProduct = {
    //     name: req.body.productName,
    //     price: req.body.productPrice
    // }
    //
    // res.json({
    //     message: 'post product',
    //     productinfo: newProduct
    // })
})


router.put('/', (req, res) => {
    res.json({
        message: 'put product'
    })
})


router.delete('/:productId', (req, res) => {

    productModel
        .findByIdAndDelete(req.params.productId)
        .then(() => {
            res.json({
                message: 'deleted product'
            })
        })
        .catch(err => {
            res.json({
                message: err.message
            })
        })



    // res.json({
    //     message: 'delete product'
    // })
})




module.exports = router