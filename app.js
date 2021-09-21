const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
port = 80;

app.use(express.urlencoded())
app.use('/static', express.static('static')) // For serving static files

app.set('view engine', 'pug') // set pug as view engine
app.set('views', path.join(__dirname, 'views')) // set directory

// ENDPOINTS
app.get('/', (req, res) => {
    const temp = {}
    res.status(200).render('index.pug', temp);
})
app.get('/about', (req, res) => {
    const temp = {}
    res.status(200).render('about.pug', temp);
})
app.get('/services', (req, res) => {
    const temp = {}
    res.status(200).render('index.pug', temp);
})
app.get('/clinfo', (req, res) => {
    const temp = {}
    res.status(200).render('index.pug', temp);
})
app.get('/contact', (req, res) => {
    const temp = {}
    res.status(200).render('contact.pug', temp);
})

// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});