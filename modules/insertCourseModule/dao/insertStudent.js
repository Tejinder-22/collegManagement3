const {connection} = require('../../../database/db');

exports.addFun = (req)=>{
     
  return new Promise(function(resolve, reject){
    var sql1="INSERT INTO students ( first_name, last_name, email, phone, gender, dob, address, state, country, pincode) VALUES (' "+req.body.sname+"  ','"+req.body.lname+"', '"+req.body.email+"','"+req.body.phone+"','"+req.body.gender+"','"+req.body.dob+"','"+req.body.address+"','"+req.body.state+"','"+req.body.country+"','"+req.body.pincode+"')";
    connection.query(sql1, function (err, data, fields) {
    if (err){ throw err}
    else{
       const mydata = "inserted";
       resolve(mydata); 
    }
  }); 

  })
 
    // return db.execute(sql);
    
}