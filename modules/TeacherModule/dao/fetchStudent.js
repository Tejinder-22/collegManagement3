const {connection} = require('../../../database/db');

exports.fetchFun =  (name)=>{
     
  return new Promise(function(resolve, reject){

    connection.query("SELECT students.student_id, students.first_name,students.address,students.email,department.departmentName,sports.sportsName, GROUP_CONCAT(courses.courseName SEPARATOR ',') AS Mycourses FROM students JOIN student_courses ON students.student_id = student_courses.student_id JOIN courses on student_courses.course_id = courses.course_id JOIN student_department ON students.student_id = student_department.student_id JOIN department ON department.department_id = student_department.department_id JOIN student_sport ON student_sport.student_id = students.student_id JOIN sports ON sports.sport_id = student_sport.sport_id GROUP BY students.student_id HAVING students.first_name = '"+name+"'", function (err, data, fields) {  
      
        if (err) throw err; 
        resolve(data);
    });
  
  })
 
 
    // return db.execute(sql);
    
}