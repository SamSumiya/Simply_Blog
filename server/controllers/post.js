import Post from "../models/Post.js";
import User from "../models/Users.js";

export const createNewPost = async (req, res) => {
  try {
    const { userId, title, summary, content } = req.body;
    const user = await User.findById(userId);

    const newPost = new Post({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      title,
      summary,
      content,
    });
    await newPost.save();
    user.posts.push(newPost)
    await user.save()
    const post = await Post.find();
    res.status(201).json(post);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getAllPosts = async (req, res) => {
  try {
    const data = await Post.find();
    res.status(201).json(data);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { postId } = req.params;
    const postData = await Post.findById(postId);
    res.status(201).json(postData);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getUserPosts = async (req, res) => {
  try {
    const {userId} = req.params
    const response = await Post.find({ userId: userId } )
    res.status(201).json(response)
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
