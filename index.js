// Accessing the Express Router
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser")
const port = 8000;


// Accessing the mongoose database
const db = require('./config/mongoose');
const Contact = require('./models/task');
const app = express();

// Setting up EJS view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('assets'));
app.use(bodyParser.urlencoded({ extended: true }));




// use express router 
// app.use('/', require('./routes/index'));
app.use('/', require('./routes'));




app.listen(port, function(err){

    if(err){
    
        console.log(`Error in running the server: ${err}`);
    
    }

    console.log(`Server is running on port: ${port}`);

})

