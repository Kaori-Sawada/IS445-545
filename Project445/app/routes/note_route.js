//build routes --express are wrapped in a function
module.exports = function(app, db) {
    app.post('/notes', (req, res) => {
    //Make a CREATE route
    const newUser = {text: req.body.body, title: req.body.title };
    db.collection('notes').insert(newUser, (err, results) => {
        if (err) {
            res.send({'error': ' An error has occurred' });
        } else {
            res.send(result.ops[0]);
        }
    });
  });
};







