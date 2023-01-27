const mongoose = require("mongoose");

 uri = "mongodb+srv://Harshchaprana:Harshchaprana@harshapi.63khmra.mongodb.net/HarshAPI?retryWrites=true&w=majority";


const connectDB = ()=>{
    // console.log("connect DB");
    return mongoose.connect(uri,{
        useNewUrlParser: true, useUnifiedTopology: true, 
    });
}

module.exports = connectDB;



