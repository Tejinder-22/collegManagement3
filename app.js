const express = require('express');

const  authRoutes = require('./modules');

const  app = express();

const port = 3031;

app.set('view engine','ejs'); 


app.use(authRoutes);  //here it will automatically consider our routes which are in routes folder in routes.js



app.listen(port, ()=>{
    console.log(`Example app listening at http://localhost:${port}`);
});






