//conection with express
const express = require("express");
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
//connection with mongoose
const mongoose = require("mongoose");
var dbatlas = "mongodb+srv://arshi:Zoraiz@123@cluster0.uigji.mongodb.net/sasyadb?retryWrites=true&w=majority";


//schema
const sasyadataSchema = mongoose.Schema({ 
    name:String,
    email:String,
    mobile:Number,
    message:String
    

})

//creat collection
const SasyaData = new mongoose.model("sasyaData",sasyadataSchema);

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
//conectivity with post method 
app.post("/addname", urlencodedParser, (req, res) => {

    mongoose.connect(dbatlas, { useNewUrlParser: true , useFindAndModify: false, useUnifiedTopology: true  })
    .then( () => console.log("connection successful"))
    .catch ( () => console.log(err) );

console.log(req.body);

    const user = new SasyaData(req.body);
    user.save().then( () => console.log("connection successful"))
    .catch ( () => console.log(err) );


    res.send("item saved to database");
})




app.listen(port, () => {
    console.log("connection is setup on port " + port);
   });
