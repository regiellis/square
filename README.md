![Square Branding](www/images/branding.png)

## Square

Square is a simple [Express](expressjs.com) based server built with the purpose of helping to facilitate the study of the crazy amount of Javascript frameworks floating around.

Quite simply, there is no mind-blowing code within, I wrote this as an aternative to using the [Simple HTTP Python Server](https://docs.python.org/2/library/simplehttpserver.html) that every tutorial writer seems to suggest. It was built for a simple purpose and nothing more.

Why [Express](expressjs.com)? Simple, if I want to add some quick API calls or maybe a redis database for
quick prototyping, it is quick and easy.

#### Ready Set Fire
----------------------------
`npm install` **then** `npm run dev` **or** `npm start`

####Two routes are already setup: 
- **"/"**, Serves you a static HTML file
- **"/api/status/"**, Gives you a JSON Status Object

####Static Files
Place static files in the `www` directory