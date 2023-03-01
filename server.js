const express = require('express');
const path = require('path');

const app = express();

// Increase the size limit of the HTTP request headers
app.use(express.json({ limit: '10mb' }));

// Serve static files from the public directory
app.use(express.static('public'));

// Serve the built version of the React app from the client/build directory
app.use(express.static(path.join(__dirname, 'build')));

// Serve the index.html file for any other requests
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

app.get('/api/tasks', (req, res) => {
  // In a real app, you would retrieve the tasks from a database
  const tasks = [
    { id: 1, text: 'Task 1', completed: false },
    { id: 2, text: 'Task 2', completed: true },
    { id: 3, text: 'Task 3', completed: false },
  ];

  res.json(tasks);
});
