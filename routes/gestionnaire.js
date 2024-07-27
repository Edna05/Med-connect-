import express from 'express';
const router = express.Router();

//information sur les gestionnaires
router.get('/gestionnaire', (req, res) => {
    res.send('Liste des gestionnaires')
  });
  
  //ajout d'un patient
  
  router.post('/gestionnaire', (req, res) => {
    res.send(`gestionnaire ajouté avec succès`)
  })
  
  //information d'un gestionnaire
  
  router.get('/gestionnaire/:id', (req, res) => {
    res.send(`Informations du gestionnaire n°${req.params.id}`)
  })
  
  
  //suppression d'un gestionnaire
  
  router.delete('/gestionnaire/:id', (req, res) => {
    res.send(`Gestionnaire supprimé avec succès`)
  })
  
  
  //modification d'info d'un gestionnaire
  
  router.put('/gestionnaire/:id', (req, res) => {
    res.send(`Gestionnaire modifié avec succès`)
  })



export default router;