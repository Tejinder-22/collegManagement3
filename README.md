# collageManagement
1> dependencies - npm install express body-parser ejs mysql 
2> db name - practice2
3> http://localhost:3030/
4> add dummy data to students table , student_course, student_department, courses and department
5> you can add dummy data to students by clicking add_student button first 
6> then add dummy data to student_course by clicking st_course button in project  ( add student id = 1 and course id = 2), then (1, 3), (1,6) respectively 
7> add dummy data to student department by running query = INSERT INTO `student_department`(`student_id`, `department_id`) VALUES (1,1);
8> add dummy data to courses = INSERT INTO `courses`( `courseName`) VALUES ('accounts','node','math','java' );
              
              IF INCASE  ABOVE POINTS NOT WORKED I HAD UPDATED MY DATABASE AS (practice2.sql) CODE  IN GIT REPO ABOVE 
 
9> TESTING 
  1> click on display_st_info button and enter name = Tejinder 
  2> output must be all details of student plus student courses with department assigned 


                                              NODE NOTES
                                   \\\\\\\\  NODE NOTES ///////////
prototype was used before es6 to extend function as a class ..because then classes were not in use .. functionName.prototype.method 

method above here is defined to use in function  as we use normally in classes for furthur use

a function must be anonymous(stored in variable first) type which  is going as a parameter in callback funs
 const asPara = function(){}
 anotherFun(asPara);

globalObjects image

this keyword is an referance to the object in context

sync and async - image

to make code syncronous we use promises

Why server  side validation is more important then client side validation -> because on client side the user can see that code(inspect), the user could change that code  and the user can disable javascript so that is not a protection that secures you against incorrect data bieng sent to the server, so that is not that much secure  yes it only improve the user experiernce thing.. so validate in server side also user cant see and disable this backend code

Order matters in which you had written routes in router file

Middleware is anything(function) execute btw the time the server 
gets the request and the time that the server sends out the response 
if writing middleware in app.js always write top of the routes in the app.use() to use it before when every route runs

check('email'),isEmail() and withMessage('blab labla') are the function provided by express-validator

write this whole array in between route as a middleware [check().options().options(), check().options().options(), body().option()..........]
 in .custom() function of validator we also do async promises validation