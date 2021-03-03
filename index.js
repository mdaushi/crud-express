const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');


var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// for parsing application/json
app.use(bodyParser.json());

const db = require('./app/models');
db.sequelize.sync();


app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// import router here
require('./app/routes/user.route')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});