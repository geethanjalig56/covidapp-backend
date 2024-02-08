const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const patientroute = require("./controllers/covidRouter")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://geethanjali2001:ammu2001@cluster0.iwq8qez.mongodb.net/patientDb?retryWrites=true&w=majority",{useNewUrlParser:true})

app.use("/api/covidapp",patientroute)
app. listen(3001,()=>{
    console.log("server running right noww")
})