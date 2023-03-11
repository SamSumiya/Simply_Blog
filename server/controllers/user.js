import User from "../models/Users.js"
import Post from '../models/Post.js'

export const getPostUser = async (req, res) => {
	try { 
		const{ id } = req.params
		const response = await Post.findById(id)
		const { userId } = response
		const posts = await Post.find({userId})
		res.status(201).json(posts)
	}	catch(err) {
		res.status(409).json({ message: err.message });
	}
}