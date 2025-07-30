const express = require('express');
const mongoose = require('mongoose');
const app = express();

const databaseName = 'Node-js';
const PORT = 4000;




const MONGODB_URI = `mongodb+srv://yogeshdbe:t1dNcw7PCHGTjZGt@nodejs.xfhr3pw.mongodb.net/${databaseName}`

//database-connection
mongoose.connect(MONGODB_URI).then(() => {
    console.log("MongoDb connected")
})
.catch((err)=>{
console.error("MongoDB connection error", err)
})


//server listen in specific port
app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})


//mongoose schema creation
const userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    }
},{
    collection:"User"
});


//mongoose-model creation
const userModel = mongoose.model('User', userSchema);

// data from user(browser)
//body
//query
//params




// text/html - <></>
// text/plain - 'String'
// application/json - {"key": "value"}


//use express.json() for auto parse data and store it in req
app.use(express.json());

//router
app.post("/user", async(req, res) =>{
    const userData = req.body;// data
    const storeData = new userModel(userData); //data stored in usermodel
    await storeData.save(); //save the data

    res.status(201).send("User data created") // send response
})

{/* <Buffer 48 65 6c 6c 6f>  */}

// app.post("/user", (req, res) => {
//   let data = "";

//   req.on("data", (chunk) => {
//     data += chunk;
//   });


//   req.on("end", () => {
//     try {
//         console.log("data", data)
//       const parsedData = JSON.parse(data);
//       console.log("Parsed body data:", parsedData);
//       res.send("Data received");
//     } catch (err) {
//       console.error("Invalid JSON:", err);
//       res.status(400).send("Invalid JSON");
//     }
//   });

// });




