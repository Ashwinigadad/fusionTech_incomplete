const express = require('express');
const mongoose = require('mongoose');
const routes=require("express").Router();


// Connect to MongoDB (change the connection URL as needed)
mongoose.connect('mongodb://localhost:27017/farmer', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});



// Define a mongoose schema for your data
const userSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email: String,
  location: String,
  interests: String,
},{
    timestamps:true
});

const User = mongoose.model('User', userSchema);

routes.post('/', (req, res) => {
    console.log(true)
  // Create a new User instance from the request data
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    location: req.body.location,
    interests: req.body.interests,
  });
// console.log(newUser);
  // Save the user data to the database
  try{
    newUser.save()
  }catch(err){
    console.log(err.message)
  }finally{
    console.log("saved successfully")
  }
  
});





module.exports=routes;
