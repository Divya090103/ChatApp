const mongoose=require("mongoose");
require('dotenv').config({path:"./config.env"} )
const URL=process.env.MONGODB_URL;
const connect=async()=>{
try{
  await  mongoose.connect(URL,{tls: true});
  console.log("Connected to MongoDB successfully!");
}catch(e){
console.log("connection error",e);
}

}
module.exports=connect;