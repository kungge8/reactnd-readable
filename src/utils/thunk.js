import * as API from './api';

import {
	getPosts,
	getCategories,
	getComments,
	createPost
} from '../actions';

export const fetchPosts = () => dispatch => (
	API.fetchPosts()
		.then((posts) => {
			dispatch(getPosts(posts));
			dispatch(fetchComments(posts));
		})
);

export const fetchCategories = () => dispatch => (
	API.getCategories()
		.then((categories) => {
			dispatch(getCategories(categories));
		})
);

export const fetchComments = posts => dispatch => (
	Promise.all(posts.map((n) => {
		return API.getComments(n.id);
	}))
		.then((comments) => dispatch(getComments(comments.reduce( (a, n) => a.concat(n), []))))
);

//incomplete, to come back to after getting comment fetch to work??
export const addPost = post => {
	return (dispatch) => {
		// console.log("thunk post: ", post);
		API.sendPost(post)
			.then((res) => {
				dispatch(createPost(post));
			});
	}
}