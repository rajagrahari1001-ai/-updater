const mongoose = require("mongoose")

async function conectDb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("mongo db conected");
    
}
module.exports = conectDb
