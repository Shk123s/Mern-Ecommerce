const express = require('express');
const router = express.Router();
const {UploadFile,ProductdeleteImageupload} = require("../controllers/AdminUploadProduct");
const {upload,getproducts} = require("../controllers/AdminUploadProduct")
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
router.get("/getproducts", getproducts);
router.delete("/delete/:id",ProductdeleteImageupload);
module.exports = router

   