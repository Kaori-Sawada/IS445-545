const express        = require("express")

//to create modular, mountable route handlers.Router is 
//a complete middleware and routing system.
const api            = express.Router()


const store = require('./data/store')

//define the user page route
api.post('/user', (req,res) => {
    const user  = req.body
    const users = store.getUsers()

    let userId = 1
    
    if (users.length > 0) {
        userId = users[users.length - 1].id + 1
    }

    const newUser = {
        id: userId
        ...user
    }

    users.push(newUser)
    store.saveUsers(users)

    res.json(users)
})

api.get('/user', (req, res) => {
    const users = stroe.getUsers()
    res.json(users)
})

module.exports = api


