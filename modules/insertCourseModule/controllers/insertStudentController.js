
const students = require('../services/insertStudentModule')
exports.insertStudent = (req,res)=>{
  
  students.addStudent(req).then((data,fields)=>{
   
    console.log(data);
    res.render('form');  
   
   })
  
}

exports.myforms = (req,res)=>{

  res.render('form'); 
}

exports.dashboard = (req,res)=>{
 
   res.render('dashboard');
}



