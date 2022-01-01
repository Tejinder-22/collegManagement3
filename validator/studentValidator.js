
const schema = require('./index')

module.exports.addStudentValidation = async (req,res,next) =>{
        const result = await schema.validate(req.body);  // this req.body is the body comming during post rout method ...as this will use as a middleware there thats y we ahave access of req and response here
        if(result.error){
        res.status(400).send(result.error.details); 
        }
        else
        {
        next();
        }
    }

