import express, { Router } from 'express'
import router from './routes/gestionnaire.js';
import hopital from './routes/hopital.js';
import medecin from './routes/medecin.js';
import service from './routes/service.js';
import patient from './routes/patients.js';
const app = express()

app.use('/gestionnaire', router);
app.use('/hopital', hopital);
app.use('/medecin', medecin);
app.use('/patients', patient);
app.use('/service', service);

const port = 3000

app.get('/', (req, res) => {
  res.send('Bienvenue sur MEDCONNECT!')
});




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})