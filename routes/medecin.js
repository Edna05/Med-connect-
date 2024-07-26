import express from 'express';
const medecin = express.Router();


//information du medecin
medecin.get('/medecin', (req, res) => {
    res.send('Information du medecin')
  });



export default medecin;