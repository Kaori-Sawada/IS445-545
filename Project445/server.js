const express        = require('express');
const MongoClient    = require('mongodb').MongoClient;
const bodyParser     = require('body-parser');


// Initialize my app as an instance of Express, my framework
const app            = express();



const port = 7080;


require('./app/routes')(app, {});  //passing an empty object 空なのはまだdbセットしてないから
app.listen(port, () => {
    console.log('Now live on ' + port);
});

