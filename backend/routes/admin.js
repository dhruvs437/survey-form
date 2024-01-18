const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FORM = mongoose.model("FORM");


// to get user profile
router.get("/",async (req,res)=>
{    
    const data = await FORM.find();
    res.status(200).json({data:data});
   
})

module.exports = router;