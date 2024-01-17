const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const adminid="admin";
const adminpassword="111";

// to get user profile
router.post("/",(req,res)=>
{
  const {email,password}=req.body;
//   console.log(email);
  if(!email || !password)
  {
    return res.status(422).json({error:"Please add email and password"})
  }
    if(email==adminid&&password==adminpassword)
    {
        return res.status(200).json({login:"logged in successfully"});
    }
    else
    {
        return res.status(401).json({error:"credentials are not correct"});
    }
})

module.exports = router;