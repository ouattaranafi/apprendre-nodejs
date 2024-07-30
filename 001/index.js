const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)
    // envoi la réponse au client
    if (req.url === "/user") {
        res.end("Bienvenue dans la page user")
    }

    if (req.url === "/profil") {
        res.end("Bienvenue sur la page profil")
    }

    if (req.url === "/contactez") {
        res.end(
        `<header>
            <a class="logo" href="#">Cute Puppies Express!</a>
          </header>
          
          <article>
            <header>
              <h1 style= "color: red;" >Beagles</h1>
              <time>08.12.2014</time>
            </header>
            <p>I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears are so, so snugly soft!</p>
          </article>
          `
          )
        
    }
    res.end('BISMILLAH')
})

server.listen(2000, 'localhost', () => {
    console.log('Server is listening at localhost on port 2000')
})

