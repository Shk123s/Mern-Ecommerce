const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const AdminUploadProduct = new Schema({
    title:{
        type:String,
        required:true,
        trim:true
    },description:{
        type:String,
        required:true,
    },date:{
        type:String,
       
    },photo:{
        type:String,
       
    },
});
const  UploadProduct = mongoose.model('Adminuploadproducts',AdminUploadProduct);
module.exports = UploadProduct;