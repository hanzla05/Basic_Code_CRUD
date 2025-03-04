import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{type:String,required:true,unique:true},
    author:{type :String , required:true},
    price :{type:Number , required:true},
    stock:{type : Number ,required:true}
})

const bookModel = mongoose.model('Book',schema)

export default bookModel