require("dotenv").config();

const express = require("express");
const app = express();
const axios = require("axios");
const cors = require("cors");

const bodyParser = require("body-parser");
app.use(cors());

//parse json
app.use(bodyParser.json());

const notesControllers = require("./controllers/notes");

app.use("/notes", notesControllers);

//this is for the numbers fact API
app.use("/fact", (req, res) => {
  axios
    .get("http://numbersapi.com/random/trivia?json")
    .then((response) => {
      console.log(response.data);
      res.status(200).json(response.data);
    })
    .catch((err) => {
      console.log(err);
    });
});

app.listen(process.env.PORT, () => {
  console.log("Connected!");
});
