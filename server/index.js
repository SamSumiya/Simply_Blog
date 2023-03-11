import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import multer from 'multer'
import helmet from 'helmet'
import authRoutes from './routes/auth.js'
import postRouters from './routes/post.js'
import userRouters from './routes/user.js'
import cookieParser from 'cookie-parser'
import path from 'path'
import { fileURLToPath } from 'url'
import { verifyToken } from './middleware/verifyToken.js';
import { createNewPost } from './controllers/post.js';
import { register } from './controllers/auth.js';


// Configurations
const __filename__ = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename__)
dotenv.config()
const app = express()
app.use(express.json())
app.use(helmet())
app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(morgan('common'))
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors())
app.use(cookieParser())
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

// File Storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, 'public/assets')
  }, 
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

const upload = multer({ storage })

// Routes with Files
app.post('/auth/register', upload.single('picture'), register)
app.post('/posts/create', verifyToken, upload.single('picture'), createNewPost)

// Routes
app.use('/auth', authRoutes)
app.use('/posts', postRouters)
app.use('/users', userRouters)

// Mongoose Setup
const PORT = process.env.PORT || 6001

mongoose
  .connect(
    process.env.MONGODBURL.replace('<password>', process.env.MONGODBPASSWORD),
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
  .then(() => {
    app.listen(PORT, () => {
      console.log(`App is listening on port ${PORT}`)
    })
  })
  .catch((error) => console.error(error, 'Error from server'))
