const express = require('express');
const path = require('path');


const StudentInfo = require('../controllers/studentController');

const bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({
    extended: false
});

const router = express.Router();

router.get('/', StudentInfo.dashboard);

router.get('/st_info', StudentInfo.studentInfo);

router.post('/getInfo', urlencodedParser, StudentInfo.getAllInfo);



//urlencodedParser when form is submitted at action method POST then that post request is handeled here and this middlware help to pass that form data here then we access it with  req body parmameter and see the data of form


module.exports = router;