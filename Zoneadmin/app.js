const express = require("express");
const app = express();
const cors = require('cors')
const ProductRoute = require("./Routes/productRoute");
const createHttpError = require("http-errors");
const path = require("path")
//intial db
require("./initDB")();
//products middlerware
// const corsOptions = {
//   origin: '*',
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
//   credentials:true,            //access-control-allow-credentials:true
//   optionSuccessStatus:200,// Include PATCH in allowed methods
//   // other options...
// };
// app.use(cors(corsOptions))

// Serve static files from the "public" directory
// app.use('../Frontend/src/images/', express.static(path.join(__dirname, '../Frontend/src/images/')));

// app.use('./images', express.static('images'));
// app.use(express.static(path.join(__dirname, 'images')));
app.use(express.json());
app.use("/products", ProductRoute);
// body parse to json
app.use(express.urlencoded({ extended: true }));
// error handlers
app.use((req, res, next) => {
  next(createHttpError(404, "Not found"));
});
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.send({
    error: {
      status: err.status || 500,
      message: err.message,
    },
  });
});
// server port
// app.listen(3000, () => {
//   console.log(" 3000 is listening");
// });
