 require('./studentModule');
require('./insertCourseModule');

const express = require('express');
const path = require('path');

const {check} = require('express-validator') //these brackets are come under destructuring syntax, when wanna use specific thing from a module having many diffrent functions
const joi = require('joi');

const StudentInfo = require('./studentModule/controllers/studentController');

const StudentInsert = require('./insertCourseModule/controllers/insertStudentController');

const {addStudentValidation} = require('../validator/studentValidator');


const router = express.Router();

// router.get('/', StudentInfo.dashboard); 
router.get('/', StudentInsert.dashboard);

router.get('/st_info', StudentInfo.studentInfo);

router.get('/addstudent', StudentInsert.myforms);

router.get('/courseInfo',StudentInfo.courseInfo);

router.get('/courses',StudentInfo.courses);

router.get('/:stid',StudentInfo.courses);

router.post('/getInfo', StudentInfo.getAllInfo);




router.post('/register',addStudentValidation,StudentInsert.insertStudent);

//urlencodedParser when form is submitted at action method POST then that post request is handeled here and this middlware help to pass that form data here then we access it with  req body parmameter and see the data of form


module.exports = router; 


