const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/codial_development');

const db = mongoose.connection;
db.on('error', console.log.bind(console, "erroe connecting to mongodb"));

db.once('open', function(){
    console.log('connect to database succesfully')
});

//module.exports = db;
