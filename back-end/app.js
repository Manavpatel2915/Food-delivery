
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const connectDB = require('./db');
const ListingRestaurant = require('./models/listing')


app.use(cors());
//body parser
app.use(express.json());

//connect to database
connectDB();


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

app.get('/message', (req, res) => {
    res.json({ message: "Hello from server!" });
});

app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "build", "index.html"));
  });


