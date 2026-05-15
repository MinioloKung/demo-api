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

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }
  res.status(200).json(user);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.status(201).json(newUser);
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users[index] = { ...users[index], ...req.body};
  res.status(200).json(users[index]);
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index === -1) {
    return res.status(404).json({ message: 'User not found' });
  }
  users.splice(index, 1);
  res.status(200).json({ message: 'User with ID ${id} deleted successfully' });
});

let products = [
  { id: 1, name: "Laptop", price: 999.99 },
  { id: 2, name: "Smartphone", price: 499.99 },
  { id: 3, name: "Headphones", price: 199.99 }
];

app.get('/products', (req, res)  => {
  res.status(200).json(products);
});