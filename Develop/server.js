const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose")

const PORT = process.env.PORT || 4077;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URI || "mongodb://localhost/workout", { useNewUrlParser: true, useFindAndModify: false, });

// routes
require("./routes/apiRoutes.js");
require("./routes/htmlRoutes.js");

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
})