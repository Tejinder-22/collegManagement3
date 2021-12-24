const studentModule = require('./studentModule');
const insertCourseModule = require('./insertCourseModule');

const express = require('express');
const path = require('path');


const StudentInfo = require('./studentModule/controllers/studentController');

 const StudentInsert = require('./insertCourseModule/controllers/insertStudentController');

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const router = express.Router();

router.get('/', StudentInfo.dashboard); 

router.get('/st_info', StudentInfo.studentInfo);

router.post('/getInfo', urlencodedParser, StudentInfo.getAllInfo);


// router.get('/', StudentInsert.dashboard);

router.get('/addStudent', StudentInsert.form);

router.post('/register', urlencodedParser, StudentInsert.insertStudent);




//urlencodedParser when form is submitted at action method POST then that post request is handeled here and this middlware help to pass that form data here then we access it with  req body parmameter and see the data of form


module.exports = router; 


// module.exports = studentModule;
// module.exports = insertCourseModule;