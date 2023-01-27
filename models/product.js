const mongoose = require("mongoose");
const { stringify } = require("querystring");

const productSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true,
    },

    price:{
        type:Number,
        required:[true,"price must be provided"],
    },

    featured:{
        type: Boolean,
        default:false,
    },

    rating:{
        type:Number,
        default:4.8
   },

   createdAt:{
       type:Date,
       default:Date.now(),
   },

   company:{
       type:String,
       enum:{
        values:["apple","samsung","mi","oppo","vivo","realme","oneplus"],
        message: `{VALUE} is not supported`,
       },
   },
});

module.exports= mongoose.model("Product",productSchema)