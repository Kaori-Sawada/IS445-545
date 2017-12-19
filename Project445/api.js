const express        = require("express")
const Email          = require ("mongoose-type-email");
const Schema         = mongoose.Schema;


//to create modular, mountable route handlers.Router is 
//a complete middleware and routing system.
const api            = express.Router()


const store = require('./data/store')

//define the user page route



//set up database

const contactLists = new mongoose.Schema ({
    userId    : ObjectId,
    name      : {
        type: String,
        required: true
    },
    email     : {
        type: Email,
        required: [true, 'email is required'],
        unique: true,
        validate: [isEmail, 'Email should be username@server.domain.' ]
    },
    phone     : {
        type: Number, 
        max: 10,
        required: true,
        validate: {
            validator: Number.isInteger,
            message  : '{VALUE} is not integer'
        }
    }
    })
    
module.exports = db.model('Contacts', contactLists);
module.exports = api


