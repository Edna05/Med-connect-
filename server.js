import express from 'express'
const app = express()
const port = 3000

/*Middleware pour parser les json */
app.use(express.json());

/*Middleware pour parser les donnees de formulaire */

app.use(express.urlencoded({ extended: false }));
/*Route */
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})