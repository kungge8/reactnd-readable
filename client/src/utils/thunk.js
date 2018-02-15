import * as API from './api';

import * as Act from '../actions';

export const login = (user) => {
	return (dispatch) => {
		dispatch(Act.login(user));
	}
};

export const fetchPosts = () => dispatch => (
	API.fetchPosts()
		.then((posts) => {
			dispatch(Act.getPosts(posts));
			dispatch(fetchComments(posts));
		})
);

export const fetchCategories = () => dispatch => (
	API.getCategories()
		.then((categories) => {
			dispatch(Act.getCategories(categories));
		})
);

export const fetchComments = posts => dispatch => (
	Promise.all(posts.map((n) => {
		return API.getComments(n.id);
	}))
		.then((comments) => dispatch(Act.getComments(comments.reduce( (a, n) => a.concat(n), []))))
);

export const addPost = post => {
	return (dispatch) => {
		API.sendPost(post)
			.then((res) => {
				dispatch(Act.createPost(post));
			});
	};
};

export const sendVotePost = (vote, postId) => {
	return (dispatch) => {
		API.postVote(vote, postId)
			.then((res) => {
				(vote.option === 'upVote')
					? dispatch(Act.votePost(1, postId))
					: dispatch(Act.votePost(-1, postId))
			});
	};
};

export const postEdit = (postData, postId) => {
	return (dispatch) => {
		API.editPost(postData, postId)
			.then((res) => {
				dispatch(Act.editPost(postData, postId));
			});
	};
};

export const deletePost = (postId) => {
	return (dispatch) => {
		API.deletePost(postId)
			.then((res) => {
				dispatch(Act.deletePost(postId));
			});
	};
};

export const sortPosts = (sortKey) => {
	return (dispatch) => {
		dispatch(Act.sortPost(sortKey));
	};
};

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