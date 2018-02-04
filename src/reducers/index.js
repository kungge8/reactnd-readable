import { combineReducers } from 'redux';

import {
	GET_POSTS,
	GET_CATEGORIES,
	GET_COMMENTS,
	CREATE_POST,
	CREATE_COMMENT
} from '../actions'

function post (state = {}, action){
	const { posts, post } = action;

	switch (action.type){
		case GET_POSTS :
			return posts;
		case CREATE_POST :
			return state.concat([post]);
		default :
			return state;
	}
}

function comment (state = {}, action){
	const { comments, comment } = action;

	switch (action.type){
		case GET_COMMENTS:
			return comments;
		case CREATE_COMMENT:
			return state.concat([comment]);
		default :
			return state;
	}

	// return state;
}

function categories (state = {}, action){
	const { categories } = action;

	switch (action.type){
		case GET_CATEGORIES :
			return categories;
		default :
			return state;
	}
}

export default combineReducers ({
	post,
	comment,
	categories
})