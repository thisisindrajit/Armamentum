require("dotenv").config(); 

const app = require('express')();
const cors = require('cors');

const bodyParser = require("body-parser");
app.use(cors());

//parse json
app.use(bodyParser.json());

const notesControllers = require('./controllers/notes');

app.use("/notes", notesControllers)

app.listen(process.env.PORT, () => {
    console.log("Connected!");
})