const express=require('express')
const { getAllBooks, getBooksById, addBooks, updateBooks, deleteBooks } = require('../controllers/book-controller')

//create express router
const router=express.Router()

//create routes for books

router.get('/',getAllBooks )
router.get('/:id',getBooksById )
router.post('/add-books',addBooks)
router.put('/update-books/:id',updateBooks)
router.delete('/delete-books/:id',deleteBooks)

module.exports=router