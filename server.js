export

const express = require("express");
const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router.get('/post', (req, res) => {
//     res.json({message: "voici les données du post"});
//     });
app. use("/post", postRoute);


app.listen(port, () => {
    console.log(" je travaille bien " + port);
});


