require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

function generateRandomNumber() {
  return Math.random();
}

app.get('/token', (req, res) => {
  const secret = process.env.JWT_SECRET;

  if (!secret) {
    return res.status(500).json({ error: 'O JWT Secret não está configurado.' });
  }

  const payload = { randomNumber: generateRandomNumber() };

  const token = jwt.sign(payload, secret, { expiresIn: '1h' });

  res.json({ token });
});

app.listen(PORT, () => {
  console.log('Servidor funcionando na porta http://localhost:${PORT}');
});