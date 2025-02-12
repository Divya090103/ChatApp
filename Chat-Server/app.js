const express= require('express');  //web framework of nodejs
const dotenv=require('dotenv');
const connect=require("./Database/Connect")
dotenv.config({path:"./config.env"}); //load environment variables from .env file


const router=require("./routes/authentication")

const cors=require("cors")
const app=express();
const port=process.env.PORT || 5000;

if(process.env.NODE_ENV==="developmet"){
  app.use(morgan("dev"));  //morgan middleware for development environment

}
// Middleware to parse JSON requests
app.use(express.json());
app.use(cors({
  origin:"*",
  methods:["GET","POST","DELETE","PATCH"],
  credentials:true,
}))

app.use("/Chit-Chat", router); 
app.listen(port, () => {
  console.log("server is created",port);
  connect();
})
app.get("/",(req,res)=>{
  res.send("server is rinning")
})


module.exports =app;
