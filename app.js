//conection 
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/arshidatabase", { useNewUrlParser: true ,  useUnifiedTopology: true  })
.then( () => console.log("connection successful"))
.catch ( () => console.log(err) );

//schema
const arshidataSchema = mongoose.Schema({ 
    center:{
        type:String,
        require:true 
    },
    
    temp:Number,
    capital:String,
    active:Boolean
})

//creat collection
const Arshidata = new mongoose.model("Arshidata",arshidataSchema);

//creat document in collection with async/await operation.

/* creat Single document with async/await
const docAsync = async () => {
   try{
        const newDocument  = new Arshidata({
            center:"Lucnow",
            temp:"40 deg Celsius",
            capital:"UP",
            active :true
        })

        const result = await newDocument.save();
        console.log(result);
    }catch(error){
        console.log(error);
    }
   
}
docAsync()

*/

/*creat multiple ducument with async/await

const docAsync = async () => {
   try{
        const newPuneDocument  = new Arshidata({
            center:"Pune",
            temp:28,
            capital:"MH",
            active :true
        })

        const newIndoreDocument  = new Arshidata({
            center:"Indore",
            temp:40,
            capital:"MP",
            active :true
        })

        const newChennaiDocument  = new Arshidata({
            center:"Chennai",
            temp:45,
            capital:"TN",
            active :true
        })

        const result = await Arshidata.insertMany([newChennaiDocument,newIndoreDocument,newPuneDocument]);
        console.log(result);
    }catch(error){
        console.log(error);
    }
   
}
docAsync()
*/

// Read(advanced) Query with comparision and logical operator.

/*const docAsync = async () => {
    try{
       
        const result = await Arshidata.find({$and : [ {temp:{$gte: 25} }, {active:"true"} ] })
       // .limit(1)
       //.countDocuments();
       // .select({center:1});
       // .sort({center:-1}); //-1 for decending,1 for accending
        console.log(result);
    }catch(error){
        console.log(error);
    }

   
    
}
docAsync() */

// Update document 
const updateDocument = async () => {
try{
        const result = await Arshidata.updateOne({"active":true},
             {$set:{ temp:60, center:"madras"}});
      
console.log(result);
}catch(err){
 console.log(err);
}
}
 updateDocument ()
 

 // Update document with findByIdAndUpdate
/* const updateDocument = async (_id) => {
    try{
            const result = await Arshidata.findByIdAndUpdate({_id},
                 {$set:
                    { temp:35} }, 
                    { new:true,
                        useFindAndModify:false
                    });
          
    console.log(result);
    }catch(err){
     console.log(err);
    }
    }
     updateDocument ("607d1f652eea916abaeeb102")
   

     // Delete document with findByIdAndUpdate
const deleteDocument = async (_id) => {
    try{
            const result = await Arshidata.deleteMany({_id},
                {$set:{
                    center:""
                }}
          
    console.log(result);
    }catch(err){
     console.log(err);
    }
    }
     deleteDocument ("607d1f652eea916abaeeb102")
       */