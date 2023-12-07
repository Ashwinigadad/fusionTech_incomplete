const express=require("express");
const route=express.Router();

route.route("/").post((req,res)=>{
    console.log(req.body);
})

module.exports=route;