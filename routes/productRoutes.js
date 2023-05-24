const express = require('express')
const { getAllProducts, createProduct,updateProduct,getproductDetail, deleteProduct } = require('../controllers/productController')

//router  object
const router = express.Router()
//you can write callback function here also but 
// we have to follow mvc architecture so we will 
//write the callback function in productController.js
// i.e, getAllProducts  

//GET ALL PRODUCTS || GET
router.get('/all-products',getAllProducts)

//ADD PRODUCT || POST
router.post('/addproduct',createProduct)


// GET  || single product details
router.get("/get-product/:id",getproductDetail);

//PUT || Update single product
router.put("/update-product/:id",updateProduct);

//DELETE || Delete a blog by Id
router.delete("/delete-product/:id",deleteProduct)

module.exports = router