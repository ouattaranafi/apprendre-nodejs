const express = require("express")
const bodyParser = require("body-parser")


const app = express()
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



//Création d'une route accessible en get
app.get('/',(req, res)  => {
    res.end("BismiLLah")
})

app.get("/user", (req, res)=>{
    res.end("Bienvenue sur la page user")
})

app.get("/contactez", (req, res) => {
    res.send(`
        <form method="post" action="/save-contact">
        <input type="text" name="username" placeholder="Votre nom">
        <input type="email" name="email" placeholder="Votre email">
        <button type="submit"> Envoyer </button>
        </form>
        `)
})

app.post("/save-contact", (req, res)=>{
    console.log(req.body)
    console.log(req.body.username)
    console.log(req.body.email)
    console.log("j'ai récupéré les données et je les enregistré dans la base de données")
})

//Lancer mon application sur un port

app.listen(3000, () => {
    console.log("Votre application a démaré sur le port 3000")
})