const express = require("express")
const api = express.Router()

const store = require('./data/store')

api.post('/user', (req, res) => {
    const user = req.body
    const users = store.getUsers()

    let userId = 1

    if (users.length > 0) {
        userId = users[users.length - 1].id + 1
    }

    const newUser = {
        id: userId,
        ...user
    }

    users.push(newUser)
    store.saveUsers(users)

    res.json(users)
})

api.get('/user', (req, res) => {
    const users = store.getUsers()
    res.json(users)
})

api.put('user/:index', (req,res) => {
    const newUser = req.body
    const users = store.getUsers()
    users[index] = newUser
    store.saveUsers(users)
    res.json(users)
    })

api.delete('user/:index', (req, res) => {
    const users = req.users[index]
    store.saveUsers(users)
})

    

module.exports = api













































/* const express        = require("express")
const mongoose       = require("mongoose")
const Email          = require ("mongoose-type-email");

const Schema         = mongoose.Schema,
      ObjectId       = Schema.ObjectId;


//to create modular, mountable route handlers.Router is 
//a complete middleware and routing system.
const api            = express.Router()


const store = require('./data/store')

//define the user page route


//set up database
const validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email);
};



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
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
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

 */