// create web server again
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/comments', (req, res) => {
  res.send('Comments!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Run the server and visit http://localhost:3000/comments
// You should see "Comments!" in the browser