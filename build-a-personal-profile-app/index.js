import express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.send("Welcome to Camper Bot's homepage!");
});

app.get('/hobbies', (request, response) => {
  response.send('I cycle, go boating, and play guitar.');
});

app.get('/skills', (request, response) => {
  response.send('JavaScript, Node.js, and Express.js!');
});

app.get('/api/profile', (request, response) => {
  response.json({
    name: 'Camper Bot',
    hobbies: ['cycling', 'boating', 'guitar'],
    skills: ['JavaScript', 'Node.js', 'Express.js']
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});