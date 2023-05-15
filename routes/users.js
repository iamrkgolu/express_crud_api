import express from 'express'
import { getUser, createUser, getUserById, removeUserById, updateUserById } from '../controller/user.js'

const router = express.Router();


router.get('/', getUser)
router.post('/', createUser)
router.get('/:id', getUserById)
router.delete('/:id', removeUserById)
router.patch('/:id', updateUserById)


export default router;