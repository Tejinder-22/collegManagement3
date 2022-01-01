
const students = require('../services/insertStudentModule')
const {validationResult} = require('express-validator') //validation 


exports.insertStudent = (req,res)=>{

    students.addStudent(req).then((data,fields)=>{   //go to services
    console.log(data);
    res.render('dashboard');  
   
   })
   
}

exports.myforms = (req,res)=>{

  res.render('form'); 
}

exports.dashboard = (req,res)=>{
 
   res.render('dashboard');
}



