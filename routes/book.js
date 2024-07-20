import express from 'express'
import bookModel from '../models/book.mjs';


const router = express.Router()


router.get('/',async(req,res)=>{
    try {
        const books = await bookModel.find();
        res.json(books)
    } catch ({message}) {
   res.json(message)
    }
})


router.post("/", async (req, res) => {
    try {
        const result = await bookModel.create(req.body);
        res.status(200).json(result);
    } catch ({ message }) {
        res.json({ message });
    }
});

router.get('/:id',async(req,res)=>{
 try {
    const book= await bookModel.findById(req.params.id)
    res.json(book)
 } catch ({message}) {
    res.json(message)
    
 }
})


router.patch('/:id',async (req,res) =>{
try {
    const result = await bookModel.findByIdAndUpdate(req.params.id,req.body)
    res.status(200).json(result)
} catch ({message}) {
    res.json(message)
}
})

router.delete('/:id',async(req,res)=>{
    try {
        const book = await bookModel.findByIdAndDelete(req.params.id)
        res.json(book)
    } catch ({message}) {
        res.json(message) 
    }
    
})


router.delete('/',async(req,res)=>{
    try {
        const book = await bookModel.deleteMany()
        res.json(book)
    } catch ({message}) {
        res.json(message)
    }
})


export default router