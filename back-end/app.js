
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


// app.get("/test", async (req, res) => {
//     try {
//         const sampletesting = [
//             {
//                 name: "The Burger House",
//                 image: "https://b.zmtcdn.com/data/pictures/5/21754635/59aba7dc309fc6d60b352ffbd168a3c5_o2_featured_v2.jpg",
//                 price: 250,
//                 rating: 4.5,
//                 category: "Fast Food"
//             },
//             {
//                 name: "Italian Delight",
//                 image: "https://b.zmtcdn.com/data/dish_photos/447/81b88fdbf58adef1ceff5673ba343447.jpg?output-format=webp",
//                 price: 400,
//                 rating: 4.2,
//                 category: "Italian"
//             },
//             {
//                 name: "Spice Garden",
//                 image: "https://b.zmtcdn.com/data/pictures/6/21613036/9d4afa0d12a13a8efd75f97f8397953d_o2_featured_v2.jpg?output-format=webp",
//                 price: 300,
//                 rating: 3.8,
//                 category: "Indian"
//             },
//             {
//                 name: "Sushi Hub",
//                 image: "https://b.zmtcdn.com/data/dish_photos/792/299f57aa5990c080d8a7b649e8e65792.jpg?output-format=webp",
//                 price: 500,
//                 rating: 4.7,
//                 category: "Japanese"
//             },
//             {
//                 name: "The Coffee Lounge",
//                 image: "https://b.zmtcdn.com/data/dish_photos/468/beafebeb370a02fdc9fdd1dc4ac45468.jpg?output-format=webp",
//                 price: 150,
//                 rating: 4.0,
//                 category: "Beverages"
//             }
//         ];

//         await ListingRestaurant.insertMany(sampletesting);

//         res.send("Success: Data Inserted!");
//     } catch (error) {
//         console.error("Error inserting data:", error);
//         res.status(500).send("Error inserting data");
//     }
// });

//Start server
app.listen(8080, () => {
    console.log('server listening on port 8080')
});

app.get("/",(req,res)=>{
    res.send("Hello World");
})

app.get("/listings",async (req,res)=>{
    const listing = await ListingRestaurant.find();
    res.json(listing);
})

// app.get("*", (req, res) => {
//     res.sendFile(path.resolve(__dirname, "build", "index.html"));
//   });


