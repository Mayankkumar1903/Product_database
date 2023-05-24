const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"product name is required"],
    },
    description:{
        type:String,
        required:[true,"description is required"],
    },
    price:{
        type:Number,
        requied:[true,"price is required"],
    },
},
{ timestamps:true }
);

const productModel = mongoose.model("Product",productSchema);
module.exports = productModel;
