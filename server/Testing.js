const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

let obj = {
  name: "muniyaraj",
  age: 20
};

app.get('/', (req, res) => {
  res.json(obj);
});

app.post('/', (req, res) => {
  obj = { ...obj, ...req.body };  // Merge the old object with the new data
  res.send("Successfully updated");
});

app.listen(3001, () => {
  console.log("Server running on http://localhost:3001");
});
