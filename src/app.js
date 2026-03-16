const express = require("express");
const path = require("path");
const buddyRoutes = require("./routes/buddyRoute");
const categoryRoutes = require("./routes/categoryRoute");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static(path.join(__dirname, "public")));

app.use("/", buddyRoutes);
app.use("/", categoryRoutes);

module.exports = app;
