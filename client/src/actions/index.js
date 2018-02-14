export const GET_POSTS = 'GET_POSTS';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_COMMENTS = 'GET_COMMENTS';
export const CREATE_COMMENT = 'CREATE_COMMENT';
export const VOTE_COMMENT = 'VOTE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const DELETE_COMMENT = 'DELETE_COMMENT';
export const CREATE_POST = 'CREATE_POST';
export const VOTE_POST = 'VOTE_POST';
export const EDIT_POST = 'EDIT_POST';
export const DELETE_POST = 'DELETE_POST';
export const SORT_POST = 'SORT_POST';

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

export function createComment (comment){
	return {
		type: CREATE_COMMENT,
		comment
	}
}

export function voteComment (vote, commentId) {
	return {
		type: VOTE_COMMENT,
		vote: { vote, commentId }
	}
}

export function editComment (commentData, commentId){
	return {
		type: EDIT_COMMENT,
		comment: { commentData, commentId }
	}
}

export function deleteComment (commentId){
	return {
		type: DELETE_COMMENT,
		comment: commentId
	}
}

export function votePost (vote, postId) {
	return {
		type: VOTE_POST,
		vote: { vote, postId }
	}
}

export function createPost (post){
	return {
		type: CREATE_POST,
		post
	}
}

export function editPost (postData, postId) {
	return {
		type: EDIT_POST,
		post: { postData, postId }
	}
}

export function deletePost (postId) {
	return {
		type: DELETE_POST,
		post: postId
	}
}

export function sortPost (sortKey) {
	return {
		type: SORT_POST,
		sortKey
	}
}