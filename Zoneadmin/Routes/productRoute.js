const express = require('express');
const router = express.Router();
const {UploadFile} = require("../controllers/AdminUploadProduct");
const {upload} = require("../controllers/AdminUploadProduct")
const UploadProduct = require("../Models/AdminUploadProduct")
const {register,login } = require("../controllers/AuthControllers");
const { checkUser } = require("../Middlerwares/AuthMiddleware");
const {AllProduct,AddProduct,GetProductbyId,UpdateProduct,deleteProduct} = require("../controllers/crudProductCont");
//products
router.get('/',AllProduct);
router.post('/post',AddProduct )
// router.get('/:id',GetProductbyId);
router.patch('/:id',UpdateProduct);
router.delete('/:id',deleteProduct);
// Login route 
router.post("/",checkUser);
router.post("/register",register);
router.post("/login",login);
//admin upload product routes
router.post("/uploadproduct",upload.single("photo"),UploadFile);
router.get("/getproducts", async (req,res,next)=>{
        try {
         console.log("object")
         const result = await  UploadProduct.find({},{__v:0});
         console.log(result)
         res.send(result);
        } catch (error) {
         console.log(error);
        }
       
     }
        );
module.exports = router

   