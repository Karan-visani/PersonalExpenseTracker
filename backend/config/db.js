const mongoose = require("mongoose")
const connectDB = async (req,res)=>{
    mongoose.connect(process.env.MONGO_URI).then(()=>console.log("Connected to DB"))
}

module.exports = connectDB