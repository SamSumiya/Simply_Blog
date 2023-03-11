import express from 'express'
import { getPostUser } from '../controllers/user.js'
const router = express.Router()

router.get('/post/:id', getPostUser)

export default router 