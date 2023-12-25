const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const authRoutes = require("./Routes/productRoute");
const cookieParser = require("cookie-parser");
module.exports = () => {
  // // mongodb+srv://shaqeebData:<password>@cluster0.kyx4iij.mongodb.net/
  // // b5USGE0NfPlaO1TG
  // // { dbName:"shaqeebdata",
  // // user:"shaqeebdata",
  // // pass:"b5USGE0NfPlaO1TG"}
  // // will check this optional parameters wala
  mongoose
    .connect("mongodb://127.0.0.1:27017/crud", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("mongodb connected....");
      // console.log("Q3T46RNg3TwRlQIr")
    })
    .catch((error) => {
      console.log(error.message);
    });
};

app.listen(4000, console.log("listening port 4000"));

app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["GET,HEAD,PUT,PATCH,POST,DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use("/", authRoutes);
