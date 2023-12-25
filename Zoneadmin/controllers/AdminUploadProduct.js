const UploadProduct = require("../Models/AdminUploadProduct");
const UserModel = require("../Models/UserModel");
const multer = require('multer');
const  path = require('path'); 

const storage = multer.diskStorage({
  destination:function(req,file,cb)
  { 
      cb(null,"../Frontend/src/images/");
     // cb(null, path.join(__dirname,"../images")); 
      
      
  },
  filename:function(req,file,cb)
  {
      cb(null, Date.now() + path.extname(file.originalname));
  }
});
const fileFilter = (req,file,cb)=>{
  const allowedFileTypes = ["image/jpeg","image/jpg","image/png"];
  if(allowedFileTypes.includes(file.mimetype))
  {
      cb(null,true);
  }else{
      cb(null,false);
  }
}
let upload = multer({storage:storage});
const UploadFile = (req,res,next)=>{
  const title = req.body.title
  const date = req.body.date;
  const description = req.body.description;
  const photo = req.file.filename
;
  const newProductdata = {
      title,
      date,
      description,
      photo,
  }
  const newProduct = new UploadProduct(newProductdata);
  newProduct.save().
  then(()=>{res.json("Product ADDED")})
  .catch((err)=>{res.status(400).json("Error:" + err)})
 
}
module.exports = {UploadFile,upload}