const express = require('express');
const path = require('path');

const app = express();

// Increase the size limit of the HTTP request headers
app.use(express.json({ limit: '10mb' }));

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the built version of the React app from the client/build directory
app.use(express.static(path.join(__dirname, 'client/build')));

// Serve the index.html file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
