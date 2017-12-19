const express = require("express")
const path = require("path")
const bodyParser = require('body-parser')
const apiRouter = require('./api')

const app = express()

app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname, "views"))

const assetsPath = path.resolve(__dirname, 'views/assets')
app.use(express.static(assetsPath))

// ! important: to parse request JSON as req.body
app.use(bodyParser.json({ type: 'application/json' }))

app.get('/', (req, res) => {
    res.render('home')
})

app.use('/api', apiRouter)

app.listen(8088)

console.log('App started on 8088...')









































/* const express        = require('express');
const bodyParser     = require('body-parser');
const apiRouter      = require('./api');
const path           = require("path");
const mongoose       = require("mongoose");
const mongodb        = require("mongodb");


// Initialize my app as an instance of Express, my framework
const app            = express();

const port = 7080;


//to setup bodyParser(middleware) use "app.use"
//bodyparser.urlencoded ([options]) returns middleware that only parses urlencoded bodies 
//and only looks at requests where the content-type header matches the type option.
app.use(bodyParser.urlencoded({ extended: true }));


//returns middleware that only parses json and only looks at
//requests where the content-type header matches the type option.
//type defines what media type the middleware will parse. 
app.use(bodyParser.json({ type: 'application/json'}))

// syntax: app.set(name, value); register the template engine.
app.set("view engine", "ejs")


// paht.resolve treats views as the root directory and will always result in an absolute URL.
//__dirname stores the directory path storing the current source code.
//in this case, project445/server.js
app.set("views", path.resolve(__dirname, "views"))



const assetsPath = path.resolve(__dirname, 'views/assets')
app.use(express.static(assetsPath))


//systax app.METHOD(PATH, HANDLER)
// METHOD is an HTTP request method, in lowercase.
// app is an instance of express
//PATH is a path on the server
//HANDLER is the function executed when route is matched 
app.get('/', (req,res) => {
    res.render('home')
})

app.use('/api', apiRouter)

app.listen(port);
console.log('App started on ' + port);

const db = mongoose.connect('mongodb://K949433:hello@ds159926.mlab.com:59926/contact_lists')

 */