export const GET_POSTS = 'GET_POSTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_POST = 'CREATE_POST';
export const CREATE_COMMENT = 'CREATE_COMMENT';

export function getPosts (posts){
	return {
		type: GET_POSTS,
		posts
	}
}

export function getCategories (categories){
	return {
		type: GET_CATEGORIES,
		categories
	}
}

export function getComments (comments){
	return {
		type: GET_COMMENTS,
		comments
	}
}

export function createPost (post){
	return {
		type: CREATE_POST,
		post
	}
}

export function createComment (comment){
	return {
		type: CREATE_COMMENT,
		comment
	}
}