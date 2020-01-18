const express = require("express")
const app = express()
const mongoose =require("mongoose");
const dotenv = require("dotenv");
const authRoute =require("./routes/auth") 

const coreRouter = require("./routes/core")
dotenv.config();

//connect To The Database 
mongoose.connect(process.env.DB_CONNECT,{useUnifiedTopology: true, useNewUrlParser: true},()=>console.log('connected to Database ...')
)

//importing Routes

// Middlewares
app.use(express.json())


//Route Middleware
app.use('/api/user',authRoute);
app.use('/api',coreRouter);



const port ="5000"
app.listen(port,console.log(`server up and running on port ${port}`))