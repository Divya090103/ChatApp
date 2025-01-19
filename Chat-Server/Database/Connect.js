const mongoose=require("mongoose");
require('dotenv').config({path:"./config.env"} )
const URL=process.env.MONGODB_URL.replace("<Password>",process.env.Password)

const connect=async()=>{
try{
  await  mongoose.connect(URL);
console.log("Connected to MongoDB successfully!");
}catch(e){
console.log("connection error",e);
}
}
module.exports=connect;