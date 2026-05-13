// import required modules
const express = require('express');  // Framework for creating web server
const bodyParser = require('body-parser');  // JSON data parser from request body
const cors = require('cors');   // Allow access from other domains

// create Express application
const app = express();
const port = 5000;  // Define the port where server will run

// install middleware
app.use(cors());  // Enable CORS for all routes
app.use(bodyParser.json());  // Parse JSON in request body to JavaScript object

// main route - test if server is working
app.get('/', (req, res) => {
  res.status(200).send('Hello! RESTful API is ready');
});

// Start sever and listen for requests
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

let users = [
  {
    id: 1,
    fname: "Jinnapad",
    lname: "Nooman",
    username: "jinnapad.nooman",
    email: "karn.yong@melivecode.com",
    avatar: "https://www.melivecode.com/users/1.png"
  }, {
    id: 2,
    fname: "Parkpoom",
    lname: "Chasiriprasert",
    username: "parkpoom",
    email: "parkpoom@melivecode.com",
    avatar: "https://www.melivecode.com/users/2.png"
  }
];

app.get('/users', (req, res) => {
  res.status(200).json(users);
});