import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchPost } from 'utils/ToggleThemeProvider'

export const UserPostDetail = ({ postID, title, firstName, lastName}) => {

	const [userPost, setUserPost ] = useState()
	useEffect(() => {
		fetchPost(postID)
		.then(data => setUserPost(data))
		.catch(error => console.log(error))
	},[postID])

	return (
		<div
			onClick={() => console.log(postID)}
		>
			<Link to={`${postID}`}>{title}</Link>
		</div>
	)
}


