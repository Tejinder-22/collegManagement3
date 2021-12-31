 require('./studentModule');
require('./insertCourseModule');

const express = require('express');
const path = require('path');
const {check} = require('express-validator/check') //these brackets are come under destructuring syntax, when wanna use specific thing from a module having many diffrent functions

const StudentInfo = require('./studentModule/controllers/studentController');

const StudentInsert = require('./insertCourseModule/controllers/insertStudentController');



const router = express.Router();

// router.get('/', StudentInfo.dashboard); 
router.get('/', StudentInsert.dashboard);

router.get('/st_info', StudentInfo.studentInfo);

router.get('/addstudent', StudentInsert.myforms);

router.get('/courseInfo',StudentInfo.courseInfo);

router.get('/courses',StudentInfo.courses);

router.get('/:stid',StudentInfo.courses);


router.post('/getInfo', StudentInfo.getAllInfo);


router.post('/register',
[
        check('email')
        .isEmail()
        .custom((value, {req})=>{      //if you are writting custom message then there is no need to write withMessage()
            if(value=='wrong email'){
                throw new Error('this is not acceptable')
            }
            return true;
})
//     ,check('password').isLength({min: 5})
//    .isAlphanumeric()

    //    ,check('pincode').isNumeric()


    //    ,body('state', 
    //    'same error message for every condition written below after dot'       //instead of check use body to show same massage istead of writting custom message each times
    //      )
          

],
StudentInsert.insertStudent

);




//urlencodedParser when form is submitted at action method POST then that post request is handeled here and this middlware help to pass that form data here then we access it with  req body parmameter and see the data of form


module.exports = router; 


// module.exports = studentModule;
// module.exports = insertCourseModule;