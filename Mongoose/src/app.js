const mongoose = require("mongoose");

// Building Connection 
mongoose.connect("mongodb://0.0.0.0.27017/QuizZen",{useNewUrlParser:true, useUnifiedTopology:true})
.then(()=>{console.log("Connection Successful...");})
.catch((err)=>{console.log(err);})