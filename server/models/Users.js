import mongoose, { Schema } from 'mongoose'

const UserSchema = new Schema({
	firstName: {
		type: String, 
		required: true,
		min: 2, 
		max: 50
	}, 
	lastName: {
		type: String, 
		required: true,
		min: 2, 
		max: 50
	}, 
	email: {
		type: String, 
		required: true, 
		unique: true, 
		max: 50
	}, 
	password: {
		type: String,
		required: true, 
		min: [5, 'must be greater than 5']
	}, 
	confirmPassword: {
		type: String, 
		required: true, 
		min: [5, 'must be greater than 5']
	},
	picturePath: { 
		type: String,
		default: '' 
	}, 
	posts: {
		type: Array, 
		default: [], 
	}
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)

export default User