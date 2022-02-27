const config=require("./config");
const express=require('express');
const cors=require('cors');


const bodyParser=require("body-parser");
const mongoose=require('mongoose');

// const allMovies=require("./routes/movie.route");
const allUser=require("./routes/user.route");
const allProduct=require("./routes/product.route");
const allMr=require("./routes/mr.route");
const allOrder=require("./routes/order.route");
const allLogin=require("./routes/login.route");
const allCart=require("./routes/cart.route");

const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors());

//  app.use("/Movie",allMovies);
 app.use("/User",allUser);
 app.use("/Product",allProduct);
 app.use("/Mr",allMr);
 app.use("/Order",allOrder);
 app.use("/Login",allLogin);
 app.use("/cart",allCart);

mongoose
.connect(config.mongoURL)
.then(console.log("DB connected"))
.catch(err=>console.log(err));

mongoose.Promise=global.Promise;

let db=mongoose.connection;
db.on("error",console.error.bind(console,"Connection error in mongo"));

app.listen(config.serverPort,function(){
    console.log("Server is running");
})