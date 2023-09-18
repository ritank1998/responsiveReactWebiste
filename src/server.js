const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3003
const app = express()

app.use(cors())

app.get("/test" , (req,res)=>{
    res.send("Its Working")
})

app.listen(port , ()=>{
    console.log("App is listening")
})
