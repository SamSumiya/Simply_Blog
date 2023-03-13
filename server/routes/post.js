import express from 'express'
import { verifyToken } from '../middleware/verifyToken.js'
import { createNewPost, getUserPosts } from '../controllers/post.js'
import { getAllPosts, getPost, deletePost} from '../controllers/post.js'
const router = express.Router()

// router.post('/create',  verifyToken, createNewPost)
router.get('/all', getAllPosts)
router.get('/:postId', getPost)
router.get('/user/:userId', getUserPosts)
router.delete('/:id', deletePost)


export default router 