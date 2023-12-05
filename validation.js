const Joi =require("joi")

const registerValidation=data=>{
    const schema=Joi.object({
        firstname:Joi.string().min(2).required(),
        lastname:Joi.string().min(2).required(),
        email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
        password: Joi.string().min(8).required(),
        address:Joi.string(),
        age:Joi.required(),
    });
    return schema.validate(data)
};
const registerDocValidation=data=>{
    const schema=Joi.object({
        username:Joi.required(),
        email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
        password: Joi.string().min(8).required(),
        address:Joi.string(),
        speciality:Joi.required(),
        Description:Joi.required(),
        PhoneNumber:Joi.required(),
        Location:Joi.required(),
        EducationDesc:Joi.required(),
        Experience:Joi.required(),
        Membership:Joi.required(),
        Picture:Joi.required(),
        Price:Joi.required(),
        TimeWorkStart:Joi.required(),
        TumeWorkEnd:Joi.required(),
    });
    return schema.validate(data)
};

const loginValidation=data=>{
    const schema=Joi.object({ 
        email: Joi.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/).required(),
        password: Joi.string().min(8).required(),
    });
    return schema.validate(data)
}

module.exports.registerValidation=registerValidation;
module.exports.registerDocValidation=registerDocValidation;
module.exports.loginValidation=loginValidation;