import * as Act from '../actions/commentActions';
import * as API from './api';

export const fetchComments = posts => dispatch => (
	Promise.all(posts.map((n) => {
		return API.getComments(n.id);
	}))
		.then((comments) => dispatch(Act.getComments(comments.reduce( (a, n) => a.concat(n), []))))
);

export const addComment = comment => {
	return (dispatch) => {
		API.sendComment(comment)
			.then((res) => {
				dispatch(Act.createComment(comment));
			});
	};
};

export const sendCommentVote = (vote, commentId) => {
	return (dispatch) => {
		API.commentVote(vote, commentId)
			.then((res) => {
				(vote.option === 'upVote')
					? dispatch(Act.voteComment(1, commentId))
					: dispatch(Act.voteComment(-1, commentId))
			});
	};
};

export const commentEdit = (commentData, commentId) => {
	return (dispatch) => {
		API.editComment(commentData, commentId)
			.then((res) => {
				dispatch(Act.editComment(commentData, commentId));
			});
	};
};

export const deleteComment = (commentId) => {
	return (dispatch) => {
		API.deleteComment(commentId)
			.then((res) => {
				dispatch(Act.deleteComment(commentId));
			});
	};
};