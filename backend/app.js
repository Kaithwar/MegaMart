const express = require("express")
const app = express();
const errorMiddleware = require("./middleware/error")
const cookieparser = require("cookie-parser")
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");
const path = require("path");

// Config
if (process.env.NODE_ENV !== "PRODUCTION") {
  require("dotenv").config({ path: "backend/config/config.env" });
}

app.use(express.json());
app.use(cookieparser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

//Route
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoute");
const payment = require("./routes/paymentRoute");

app.use("/api/v1",product);
app.use("/api/v1",user);
app.use("/api/v1",order);
app.use("/api/v1",payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

//Middleware for Error
app.use(errorMiddleware);

module.exports = app;

