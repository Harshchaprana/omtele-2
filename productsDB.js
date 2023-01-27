const connectDB = require("./db/connect");
const connect = require("./db/connect");
const product = require("./models/product");
const Product = require("./models/product");

const ProductJson = require("./products.json")


const start = async ()=>{
    try{
        await connectDB("mongodb+srv://Harshchaprana:Harshchaprana@harshapi.63khmra.mongodb.net/HarshAPI?retryWrites=true&w=majority");
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success")
    }catch(error){


        console.log(error);
    }
};

start();