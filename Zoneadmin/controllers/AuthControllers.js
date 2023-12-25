const UserModel = require("../Models/UserModel");
const jwt = require("jsonwebtoken")

const maxAge = 3*24*60*60;

const createToken = (id)=>{
    return jwt.sign({id},"shaqeeb shaikh secret key",{
        expiresIn:maxAge
    });
}
const handleErrors = (err)=>{
    let errors = {email:"",password:""};
    if(err.message === "Incorrect email")
    {
       errors.email = "That email is not registered";
       return errors;
    } 
    if(err.message === "incorrect password")
    {
       errors.email = "That password is incorrect ";
       return errors;
    } 
    if (err.code === 11000) {
        errors.email = "Email is already registered";
        return errors;
    }
    if(err.message.includes("User validation failed"))
    {
        Object.values(err.errors).forEach(({properties})=>
        {
            errors[properties.path] = properties.message;
        });
        return errors;
    }
}
module.exports.register = async (req,res,next )=>
{
    try { 
        const {email ,password} = req.body;
        const user = await UserModel.create({email,password});
        const token = createToken(user._id);
        res.cookie("jwt",token,{
            withcrdentials:true,
            httpOnly:false,
            maxAge:maxAge * 1000,
        });
        res.status(201).json({user:user._id,created:true})
      } catch (err) {
        console.log(err);
        const errors= handleErrors(err);
        // console.log(errors);
        res.json({errors,created:false});
      } 
    next();
}
module.exports.login = async (req,res,next )=>
{  
    try { 
        const {email ,password} = req.body;
        const user = await UserModel.login(email,password);
        const token = createToken(user._id);
        res.cookie("jwt",token,{
            withcrdentials:true,
            httpOnly:false,
            maxAge:maxAge * 1000,
        });
        res.status(200).json({user:user._id,created:true})
      } catch (err) {
        console.log(err);
        const errors= handleErrors(err);
        // console.log(errors);
        res.json({errors,created:false});
      } 
}