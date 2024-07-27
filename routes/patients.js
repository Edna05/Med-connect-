import express from 'express';
const patient = express.Router();

//information sur les patients
patient.get('/patients', (req, res) => {
    res.send('Liste des patients')
  })

//information sur les patients
patient.get('/patients', (req, res) => {
    res.send('Liste des patients')
  })
  
  //information d'un patient
  patient.get('/patients/:id', (req, res) => {
    res.send(`Informations du patient n°${req.params.id}`)
  })
  
  //ajout d'un patient
  
  patient.post('/patients', (req, res) => {
    res.send(`Patient ajouté avec succès`)
  })
  
  //modification d'info d'un patient
  
  patient.put('/patients/:id', (req, res) => {
    res.send(`Patient modifié avec succès`)
  })
  
  //suppression d'un patient
  
  patient.delete('/patients/:id', (req, res) => {
    res.send(`Patient supprimé avec succès`)
  })





export default patient;
