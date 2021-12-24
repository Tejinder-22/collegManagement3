const { resolve } = require('path/posix');
const studentDao = require('../dao/insertStudent')
exports.addStudent = async (data)=> {
 
   //logic

   return new Promise(function(resolve, reject){
   
  studentDao.addFun(data).then( ([result,fields])=>{
         
        resolve(result);
  });

});

   
  
}