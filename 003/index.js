const express = require("express")
const bodyParser = require("body-parser")

var app = express()

//Configurer un dossier static
app.use(express.static('public'))
app.set('view engine', 'ejs')



app.get("/", (req, res)=>{
    res.send('BISMILLAH ...')
})

app.get("/profil", (req, res)=>{
    res.render("index")
})

app.listen(4000, ()=>{
    console.log("votre server a demarer sur localhost:4000")
})