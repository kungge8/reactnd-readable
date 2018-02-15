import * as Types from './actionTypes';

export function login (user) {
	return {
		type: Types.LOGIN,
		user
	}
}

export function getPosts (posts){
	return {
		type: Types.GET_POSTS,
		posts
	}
}

export function getCategories (categories){
	return {
		type: Types.GET_CATEGORIES,
		categories
	}
}

export function getComments (comments){
	return {
		type: Types.GET_COMMENTS,
		comments
	}
}

export function createComment (comment){
	return {
		type: Types.CREATE_COMMENT,
		comment
	}
}

export function voteComment (vote, commentId) {
	return {
		type: Types.VOTE_COMMENT,
		vote: { vote, commentId }
	}
}

export function editComment (commentData, commentId){
	return {
		type: Types.EDIT_COMMENT,
		comment: { commentData, commentId }
	}
}

export function deleteComment (commentId){
	return {
		type: Types.DELETE_COMMENT,
		comment: commentId
	}
}

export function votePost (vote, postId) {
	return {
		type: Types.VOTE_POST,
		vote: { vote, postId }
	}
}

export function createPost (post){
	return {
		type: Types.CREATE_POST,
		post
	}
}

export function editPost (postData, postId) {
	return {
		type: Types.EDIT_POST,
		post: { postData, postId }
	}
}

export function deletePost (postId) {
	return {
		type: Types.DELETE_POST,
		post: postId
	}
}

export function sortPost (sortKey) {
	return {
		type: Types.SORT_POST,
		sortKey
	}
}