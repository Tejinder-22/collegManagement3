const read = require('body-parser/lib/read');
const students = require('../services/getStudentModule')
exports.getAllInfo = (req,res)=>{   // task to make database queries in diffrent file
 students.fetchStudent(req.body.name).then((data,fields)=>{
  // console.log(data);
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

exports.courses = (req,res)=>{

  const myid = req.query.stid;
  console.log(myid);
}
