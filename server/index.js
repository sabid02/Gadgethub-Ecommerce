const express = require("express");
const dotenv = require("dotenv").config();
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const passport = require("passport");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");

// database connection

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
// app.use(cors());

app.use(passport.initialize(undefined));

app.use("/", require("./routes/authRoute"));

const PORT = process.env.PORT || 8000;

const server = app.listen(PORT, () =>
  console.log(`Sever running on port ${PORT}`)
);

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err.message}`);
  server.close(() => process.exit(1));
});
