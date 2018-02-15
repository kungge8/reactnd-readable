import * as Types from './actionTypes';

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