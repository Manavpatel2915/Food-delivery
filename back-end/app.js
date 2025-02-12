const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const ListingRestaurant = require('../back-end/models/listing');
const MONGO_URL = "mongodb://127.0.0.1:27017/urbaneats"


app.use(cors());

async function main(){
    await mongoose.connect(MONGO_URL);
}

main().then(()=>{
    console.log("connected to DB")
}).catch((err)=>{
    console.log(err)
});


app.get("/test",async (req,res)=>{
    let sampletesting = new ListingRestaurant({
        title:"pizza hut",
        description:"Yummy pizza",
        price:500,
        location:"Bardoli"
    })

    await sampletesting.save();
    res.send("Success");
});

//Start server
app.listen(8080, () => {
    console.log('server listening on port 8080')
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})


