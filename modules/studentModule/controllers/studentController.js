const read = require('body-parser/lib/read');
const students = require('../services/getStudentModule')
exports.getAllInfo = (req,res)=>{   // task to make database queries in diffrent file
 students.fetchStudent(req.body.name).then((data,fields)=>{
  console.log(data);
     res.render('displayStudent', { userData : data});
 })

};

exports.dashboard = (req,res)=>{

  res.render('dashboard');
}

exports.studentInfo = (req,res)=>{   
  res.render('studentInfo');  
}

exports.courseInfo = (req,res)=>{

  res.render('practiceDynamicRoute');
}

exports.courses = async (req,res)=>{

  const myid = await req.query.id;
  
  if(myid>=0){  console.log(myid); res.render('dashboard')}


}
