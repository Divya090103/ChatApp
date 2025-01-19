const express= require('express');  //web framework of nodejs
const dotenv=require('dotenv');
const connect=require("./Database/Connect")
dotenv.config({path:"./config.env"}); //load environment variables from .env file


// Morgan is a popular HTTP request logger middleware for Node.js applications. It's often used with the Express framework to log details about incoming requests, such as method, URL, status code, response time, and more.
const morgan = require('morgan');  //HTTP request logger middleware for Node.js applications

const cors=require("cors")
const app=express();
const port=process.env.PORT || 5000;

if(process.env.NODE_ENV==="developmet"){
  app.use(morgan("dev"));  //morgan middleware for development environment

}
app.use(cors({
  origin:"*",
  methods:["GET","POST","DELETE","PATCH"],
  credentials:true,
}))

app.use("/",(req,res)=>{
 res.send("server")
})
app.listen(port, () => {
  console.log("server is created");
  connect();
})


module.exports =app;
