const app = require("express");
const http = require('http').Server(app);

const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://vishwajeet04022006:Vishupm12@project-management.y8ch5.mongodb.net/?retryWrites=true&w=majority&appName=Project-management')

const user=require("./model/userModel")

http.listen(3000, function(){
    console.log("Server is running");
})