import express from 'express';
export const hopital = express.Router();

 
//liste des hopitaux
hopital.get('/hopitaux', (req, res) => {
    res.send('Liste des hopitaux')
  });
  
  //information d'un hopital
  
  hopital.get('/hopital/:id', (req, res) => {
    res.send(`Informations d'un hopital n°${req.params.id}`)
  })
  
  //ajout d'un hopital
  
  hopital.post('/hopital', (req, res) => {
    res.send(`Hopital ajouté avec succès`)
  })
  
  //modification des information d'un hopital
  hopital.put('/Hopital/:id', (req, res) => {
    res.send(`Information modifié avec succès`)
  })
  
  //suppression d'un hopital
  hopital.delete('/Hopital/:id', (req, res) => {
    res.send(`Hopital supprimé avec succès`)
  })



export default hopital;