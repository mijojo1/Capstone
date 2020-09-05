const express = require("express");
const app = express();
const env = require("dotenv");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//environment variables
env.config();

//mongodb connection
//mongodb+srv://admin:<password>@cluster0.v7wam.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.v7wam.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`, 
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('DB connected');
});

app.use(bodyParser()); //pass the data

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from server",
  });
});
app.post("/data", (req, res, next) => {
  res.status(200).json({
    message: req.body,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running in port ${process.env.PORT}`);
});
