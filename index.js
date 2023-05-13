const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser("secret"));






app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from subpages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// use express router
app.use('/', require('./routes/index'));

// set the view engine ejs for view
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, function(err){
    if(err){
        console.log(`error in running the server : ${err}`);
    }
    console.log(`server is running on port : ${port}`);
});