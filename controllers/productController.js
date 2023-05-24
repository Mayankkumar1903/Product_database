//callback functions from productRoutes

const productModel = require('../models/productModel')


//add a product
exports.createProduct = async(req,res) => {
    try{
        const {name,description,price} = req.body
        //validation
        if(!name || !description || !price){
            return res.status(400).send({
                success:false,
                message:"Please fill all the fields",
            })
        }

        //existing product
        const existingProduct = await productModel.findOne({name})
        if(existingProduct){
            return res.status(401).send({
                success:false,
                message:"product already created",
            })
        }
       //save new  product 
       const product = new productModel({name,description,price})
       await product.save()
       return res.status(201).send({
        success:true,
        message:"new product added",
       })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            message:'Error in Adding product Callback',
            success:false,
            error
        })
    }
};

//get all products
exports.getAllProducts = async (req,res) =>{
    try{
        const products = await productModel.find({})
        return res.status(200).send({
            productCount : products.length,
            success:true,
            message:"all products data",
            products
        })
    }catch(error){
        console.log(error)
        return res.status(500).send({
            success:false,
            message:"error in getting all products ",
            error
        })
    }
};


//update product 
exports.updateProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const {name,description,price} = req.body
        const product =  await productModel.findByIdAndUpdate(
            id,
            {...req.body},
            {new:true}
        );
        return res.status(200).send({
            success:true,
            message:"price updated",
            product,
        });
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:"Error while updating product",
            error
        })
    }
};

//get single product by id
exports.getproductDetail = async(req,res)=>{
    try{
        const {id} = req.params
        const product = await productModel.findById(id)
        if(!product){
            return res.status(404).send({
                success:false,
                message:"product not found with this id"
            })
        }
        return res.status(200).send({
            success:true,
            message:"fetch single product",
            product
        })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:"error while getting single  product by id",
            error
        })
    }
};

//delete a single product by id
exports.deleteProduct = async(req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.params.id)
        return res.status(200).send({
            success:true,
            message:"Product deleted",
        })
    }catch(error){
        console.log(error)
        return res.status(400).send({
            success:false,
            message:"Error while fetching product",
            error
        })
    }
};


