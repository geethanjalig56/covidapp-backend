const express = require("express")
const router = express.Router()
const patientModel = require("../model/patientModel")

router.post("/add", async(req,res)=>{
    let data = req.body
    let patient01 = new patientModel(data)
    let result = await patient01.save()
    res.json({status:"success"})
})

router.get("/view", async(req,res)=>{
    let data = await patientModel.find()
    res.json(data)

}) //patient view

//patientsearch




module.exports=router