require("dotenv").config()
const app = require("./src/app")
const conectDb = require("./src/db/db")

conectDb()
app.listen(3000, ()=>{
    console.log("server running at port 3000");
    
})