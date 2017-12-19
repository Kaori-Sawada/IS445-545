const express        = require("express")

//to create modular, mountable route handlers.Router is 
//a complete middleware and routing system.
const api            = express.Router()


const store = require('./data/store')

//define the user page route



//set up database
require ('mongoose-type-email');
mongoose.connect('mongodb://K949433:hello@ds159926.mlab.com:59926/contact_lists')
const Schema   = mongoose.Schema, 
      ObjectId = Schema.ObjectId;

const contactLists = new Schema ({
    userId    : ObjectId,
    name      : {
        type: String,
        required: true
    },
    email     : {
        type: tyemongoose.SchemaTypes.email,
        required: true,
        unique: true,
        validate: [isEmail, "Email should be username@server.domain." ]
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
    
module.exports = mongoose.model('Contacts', contactLists);
module.exports = api


