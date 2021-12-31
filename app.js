const express = require('express');

const  authRoutes = require('./modules/index');

const  app = express();

const port = 3031;

const bodyParser = require('body-parser');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine','ejs'); 

app.use(urlencodedParser);

app.use(authRoutes);  //here it will automatically consider our routes which are in routes folder in routes.js

 

app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});






