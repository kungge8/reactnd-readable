import { combineReducers } from 'redux';

import {
	GET_POSTS,
	GET_CATEGORIES,
	GET_COMMENTS
} from '../actions'

function post (state = {}, action){
	const { posts } = action;

	switch (action.type){
		case GET_POSTS :
			return posts;
		default :
			return state;
	}
}

function comment (state = {}, action){
	const { comments } = action;

	switch (action.type){
		case GET_COMMENTS:
			return comments;
		default:
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