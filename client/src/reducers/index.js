import { combineReducers } from 'redux';

import * as Types from '../actions/actionTypes';

import post from './posts';
import comment from './comments';
import categories from './categories';

function user (state = "", action){
	const { user } = action;

	switch (action.type){
		case Types.LOGIN:
			return user;
		default:
			return state;
	}
}

export default combineReducers ({
	post,
	comment,
	categories,
	user
})