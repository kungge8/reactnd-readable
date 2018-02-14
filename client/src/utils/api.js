const url = `http://localhost:3001`

const headers = {
	'Authorization': 'pingu',
	'Accept': 'application/json',
	'Content-type': 'application/json'
};

export const fetchPosts = (post = '') => {
	return fetch(`${url}/posts`, { headers })
		.then( res => res.json() );
};

export const getCategories = (categories = '') => {
	return fetch(`${url}/categories`, { headers })
		.then( res => res.json() );
};

export const getComments = (postId = '') => {
	return fetch(`${url}/posts/${postId}/comments`, { headers })
		.then( res => res.json() );
};

export const sendPost = (post) => {
	return fetch(`${url}/posts`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify(post)
	});
};

export const postVote = (vote, postId) => {
	return fetch(`${url}/posts/${postId}`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify(vote)
	});
};

export const editPost = (postData, postId) => {
	return fetch(`${url}/posts/${postId}`, {
		method: `PUT`,
		headers: headers,
		body: JSON.stringify(postData)
	});
};

export const deletePost = (postId) => {
	return fetch(`${url}/posts/${postId}`, {
		method: `DELETE`,
		headers: headers
	})
};

export const sendComment = (comment) => {
	return fetch(`${url}/comments`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify(comment)
	});
};

export const commentVote = (vote, commentId) => {
	return fetch(`${url}/comments/${commentId}`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify(vote)
	});
};

export const editComment = (commentData, commentId) => {
	return fetch(`${url}/comments/${commentId}`, {
		method: `PUT`,
		headers: headers,
		body: JSON.stringify(commentData)
	});
};

export const deleteComment = (commentId) => {
	return fetch(`${url}/comments/${commentId}`, {
		method: `DELETE`,
		headers: headers
	})
};