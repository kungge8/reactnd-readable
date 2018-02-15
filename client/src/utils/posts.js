import * as Act from '../actions/postActions';
import * as API from './api';
import { fetchComments } from './comments';

export const fetchPosts = () => dispatch => (
	API.fetchPosts()
		.then((posts) => {
			dispatch(Act.getPosts(posts));
			dispatch(fetchComments(posts));
		})
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
