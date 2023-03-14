import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import User from '../models/Users.js'

export const register = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      picturePath,
      posts,
    } = req.body
    const salt = await bcrypt.genSalt()
    const hashedPassword = await bcrypt.hash(password, salt)

    if (password === confirmPassword) {
      const newUser = new User({
        firstName,
        lastName,
        email,
        password: hashedPassword,
        confirmPassword: hashedPassword, 
        picturePath,
        posts,
      })
      const registerUser = await newUser.save()
      res.status(201).json(registerUser)
    }
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email: email })

    if (!user) {
      return res.status(400).json({ message: 'User does not exit...' })
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if (!isMatch)
      return res.status(400).json({ message: 'Invalid Credentials ... ' })
    delete user.password
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.status(200).json({ token, user })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
