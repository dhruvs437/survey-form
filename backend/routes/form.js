const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const FORM = mongoose.model("FORM");


// to get user profile
router.post("/",(req,res)=>
{    
  const {name,gender,email,address,message,phone,nationality}=req.body;
  if(!name|| !gender||!email||!address||!message||!phone||!nationality)
  {
    return res.status(422).json({error:"Please all details"})
  }
  
  const form = new FORM({
    name,
    gender,
    email,
    address,
    message,
    phone,
    nationality,
  });

  form.save()
  .then((form) => {
    res.status(200).json({ message: "Submited Successfully" });
  })
  .catch((err) => {
    console.log(err);
  });
   
})

module.exports = router;