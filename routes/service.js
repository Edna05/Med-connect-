import express from 'express';
const service = express.Router();

//liste des services
service.get('/service', (req, res) => {
    res.send('Liste des services')
  });
  
  //information d'un service
  
  service.get('/service/:id', (req, res) => {
    res.send(`Informations d'un service°${req.params.id}`)
  })
  
  //ajout d'un service
  
  service.post('/service', (req, res) => {
    res.send(`Service ajouté avec succès`)
  })
  
  //modification des information d'un service
  service.put('/Service/:id', (req, res) => {
    res.send(`Information modifié avec succès`)
  })
  
  
  //suppression d'un service
  service.delete('/service/:id', (req, res) => {
    res.send(`service supprimé avec succès`)
  })
  


export default service;