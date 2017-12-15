//build routes --express are wrapped in a function
module.exports = function(app, db) {
    //Make a CREATE route
    app.post('/notes', (req, res) => {

        res.send('Hello')
    });
};






