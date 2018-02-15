import * as Types from './actionTypes';

export function getPosts (posts){
	return {
		type: Types.GET_POSTS,
		posts
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