import express from 'express'
import { getProduct, createProduct, getProductById, removeProductById, updateProductById } from '../controller/product.js'

const router = express.Router();


router.get('/', getProduct)
router.post('/', createProduct)
router.get('/:id', getProductById)
router.delete('/:id', removeProductById)
router.patch('/:id', updateProductById)


export default router;