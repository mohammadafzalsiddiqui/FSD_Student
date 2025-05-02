const mongoose =require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'});
async function dbConn(){

    const conn=await mongoose.connect('mongodb+srv://new-afzal-1123:root@cluster0.r8ifk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
    if(conn){
        console.log('database connect successfully')

    }
    else{
        console.log('connection fail');
    }
}
module.exports=dbConn;