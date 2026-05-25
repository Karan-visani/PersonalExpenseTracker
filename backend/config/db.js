const mongoose = require("mongoose")
const connectDB = async (req,res)=>{
    mongoose.connect("mongodb://localhost:27017/PersonalExpenseTracker").then(()=>console.log("Connected to DB"))
}

module.exports = connectDB