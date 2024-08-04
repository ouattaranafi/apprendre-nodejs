const express = require("express")
const bodyParser = require("body-parser")
const mysql2 = require("mysql2")

const app = express()

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Create the connection to database
const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'projet-nodejs',
    password: ''
});



app.get("/", (req, res)=>{
    res.render("index")
})

app.get("/user", (req, res)=>{
    const action = req.query.action

    if (action == "save")  {
        connection.query(
            "INSERT INTO `user`(`name`, `email`, `password`) VALUES (?,?,?)", 
            [req.query.name, req.query.email, req.query.password],
            function (err, results) {
              console.log(results);
              if (err) {
                console.log(err)
                res.send("Une erreur est survenue")
            } else {
                console.log(results);
                res.send("Données enregistré avec succès")
            }
            }
        );
    } else {
        connection.query(
            'SELECT * FROM `user`', 
            function (err, results) {
                if (err) {
                    console.log(err)
                    res.send("Une erreur est survenue")
                } else {
                    console.log(results);
                    res.send(results)
                }
            }
        );
    }
    
})



app.listen(3000, ()=>{
    console.log("l'application est lancée sur le port 3000")
})
