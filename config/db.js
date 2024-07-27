const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
require('dotenv').config(); // Pour charger les variables d'environnement depuis un fichier .env

const app = express();
const port = process.env.PORT || 3000; // Utilisation d'une variable d'environnement pour le port

// Middleware pour parser les requêtes JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Connexion à la base de données MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect(err => {
  if (err) {
    console.error('Erreur de connexion à MySQL :', err);
    throw err;
  }
  console.log('Connecté à la base de données MySQL');
});

// Routes API

// Route GET pour récupérer tous les hopitaux
app.get('/api/students', (req, res) => {
  const query = 'SELECT * FROM ';

  connection.query(query, (err, rows) => {
    if (err) {
      console.error('Erreur lors de la récupération  :', err);
      res.status(500).json({ error: 'Erreur serveur lors de la récupération des' });
      return;
    }
    res.json(rows);
  });
});