1 - Initier un projet nodejs
- npm init
- npm init -y

2 - installer un module
- npm install nomdumodule
- npm i nomdumodule

3 - desinstaller un module
```bsh
- npm uninstall nomdumodule
- npm un nomdumodule
```

## II - Travailler avec express
```js
const express = require("express")
const app = express()
```

1 - On utilise bodyParser pour recuperer les données d'un formulaire
```js
const bodyParser = require("body-parser")
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
```


2 - Fichier stactic
Permet de données l'accès aux fichiers vu par l'utilisateur (Ex: images, fichier css et js ou pdf ...)
```js
app.use(express.static('public'))
```

3- view engine
 Pour afficher les données de ma page en utilisant un moteur de template tel que html, ejs ou pug...

 ```js
 app.set('view engine', 'ejs') //les fichiers renvoyés doivent être contenir dans le dossier views créé a la racine du projet

 app.get("/profil", (req, res)=>{
    res.render("index")
})
 ```




 ### Lien

 "https://www.npmjs.com/package/query-param" => faire des recherche sur les modules de npm

 "https://ejs.co/#install"=> utiliser ejs

 "https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr" => Explication détaillé de comment utiliser ejs

 "https://expressjs.com/en/starter/static-files.html" => Documentation d'express (fichier static)

 "https://apprendre-nodejs.fr/v1/chapter-07/index.html#static" => Apprendre Node js (cours complet)

 