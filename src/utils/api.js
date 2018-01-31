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
	// console.log("API post: ", post);
	return fetch(`${url}/posts`, {
		method: `POST`,
		headers: headers,
		body: JSON.stringify(post)
	});
}