const mongoose=require("mongoose");
const MONGO_URL=process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
.then((res)=>console.log(`Connected to database.`))
.catch((error)=>console.log(error))
module.exports = mongoose.connection;