const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');
const db             = require('./config/db')

// Initialize my app as an instance of Express, my framework
const app            = express();

const port = 7080;

//to setup bodyParser(middleware) use "app.use"
app.use(bodyParser.urlencoded({ extended: true }));


// To set up db 
MongoClient.connect('mongodb://admin:hello@ds159926.mlab.com:59926/contact_lists', (err, client) => {
    const contactLists = database.db('contact_lists')
    contact_lists.collection('notes')

    if (err) return console.log(err)
    require('./app/routes')(app, database);

    app.listen(port, () => {
    console.log('Now live on ' + port);
    });
})

