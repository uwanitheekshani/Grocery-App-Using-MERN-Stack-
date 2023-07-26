const express = require('express')
const app = express();
app.use(express.json());
const userRoute = require('./routes/UserRoute')
const itemRoute = require('./routes/ItemRoute')
const adminRoute = require('./routes/AdminRoute')
const orderRoute = require('./routes/OrderRoute')
const mongoose = require('mongoose')
const PORT = 3500;

const cors = require("cors")
app.use(cors());

mongoose.connect(
    "mongodb://127.0.0.1:27017/Groccery"
).then(()=>{
    app.listen(PORT,()=>{
        console.log(`API Running on ${PORT}`)
    })
}).catch((err)=>{
     console.error(err)
});
app.use('/api/v1/',userRoute);
app.use('/api/v1/',itemRoute);
app.use('/api/v1/',adminRoute);
app.use('/api/v1/',orderRoute);