const express = require("express")
const bodyParser = require("body-parser")

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get("/", (req, res)=>{
    res.send(`
        <form method="get" action="/save-contact">
        <input type="text" name="username" placeholder="Votre nom">
        <input type="email" name="email" placeholder="Votre email">
        <button type="submit"> Envoyer </button>
        </form>
        `)
})

app.get("/save-contact", (req, res)=>{
    console.log(req.query)
    console.log(req.query.username)
    console.log(req.query.email)
})

app.listen(3000, ()=>{
    console.log("le port est en ecoute")
})