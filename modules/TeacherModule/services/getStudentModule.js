const { resolve } = require('path/posix');
const studentDao = require('../dao/fetchStudent')
exports.fetchStudent = async (name)=> {
 
   //logic

   return new Promise(function(resolve, reject){

  studentDao.fetchFun(name).then( ([data,fields])=>{
   
    resolve(data);
  });

});

   
  
}