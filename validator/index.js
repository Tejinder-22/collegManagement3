const joi = require('joi');

const schema = joi.object({        // in a schema object we can define validation for our fields we have in our form 
    sname: joi.string().min(3).required()
}) 

module.exports = schema; // 2nd step go to studentValidator file