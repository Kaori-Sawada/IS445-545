const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db')
const apiRouter      = require('./api')


// Initialize my app as an instance of Express, my framework
const app            = express();

const port = 7080;


//to setup bodyParser(middleware) use "app.use"
//bodyparser.urlencoded ([options]) returns middleware that only parses urlencoded bodies 
//and only looks at requests where the content-type header matches the type option.
/* app.use(bodyParser.urlencoded({ extended: true })); */


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


// To set up db 
/* MongoClient.connect('mongodb://admin:hello@ds159926.mlab.com:59926/contact_lists', (err, client) => {
    const contactLists = database.db('contact_lists')
    contact_lists.collection('notes')

    if (err) return console.log(err)
    require('./app/routes')(app, database);

    app.listen(port, () => {
    console.log('Now live on ' + port);
    });
})

*/

// A request is something that your server/app gets from a visitor. A response is something your app gives the user. 