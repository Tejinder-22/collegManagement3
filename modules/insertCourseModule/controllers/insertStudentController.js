
const students = require('../services/insertStudentModule')
const {validationResult} = require('express-validator') //validation 

exports.insertStudent = (req,res)=>{
 
  const error = validationResult(req);  // if any error at middleware check(email) is captured is handeled here in req by these function
   if(!error.isEmpty()){               //val
      console.log(error);                  //val
      res.render('form',{
        msg:error
      })
      return;
    }
   else{

    students.addStudent(req).then((data,fields)=>{   //go to services
    console.log(data);
    res.render('dashboard');  
   
   })
  } 
}

exports.myforms = (req,res)=>{

  res.render('form'); 
}

exports.dashboard = (req,res)=>{
 
   res.render('dashboard');
}



