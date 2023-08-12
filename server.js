var express = require('express');
var server = express();
var routes = require('./routes/routes');
var mongoose = require('mongoose');
const cors = require('cors');
mongoose.set('strictQuery',true);
/*mongoose.connect("mongodb+srv://londhesahil88:<test123>@cluster0.uqcxowj.mongodb.net/?retryWrites=true&w=majority",{useNewUrlParser: true,  useUnifiedTopology: true },function checkDB(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("DB Connectedddd!!!!!!!!!!!")
    }
 });*/
 const uri="mongodb+srv://londhesahil88:KFjubgRM2Mah6cqB@cluster0.uqcxowj.mongodb.net/?retryWrites=true&w=majority"
 mongoose 
  .connect(
    uri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("Connected to MongoDB!"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));
 
server.use(cors());
server.use(express.json());
server.use(routes);
 
server.listen(8000,function check(error)
{
    if(error)
    {
        console.log("errorr")
    }
    else
    {
        console.log("startedddddd")
    }
});