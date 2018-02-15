import { combineReducers } from 'redux';
import sortBy from 'sort-by';

import * as Types from '../actions/actionTypes';

function post (state = [], action){
	const { posts, post, vote, sortKey } = action;

	switch (action.type){
		case Types.SORT_POST:
			return [].concat(state.sort(sortBy("-" + sortKey)));
		case Types.DELETE_POST:
			return state.filter((n) => n.id !== post);
		case Types.EDIT_POST :
			return state.map((n) => {
				if (n.id === post.postId){
					n.title = post.postData.title;
					n.body = post.postData.body;
					return n;
				} else {
					return n;
				};
			});
		case Types.VOTE_POST :
			return state.map((n) => {
				if (n.id === vote.postId){
					n.voteScore += vote.vote;
					return n;
				} else {
					return n;
				};
			});
		case Types.GET_POSTS :
			return posts;
		case Types.CREATE_POST :
			return state.concat([post]);
		default :
			return state;
	}
}

function comment (state = [], action){
	const { comments, comment, vote } = action;

	switch (action.type){
		case Types.DELETE_COMMENT:
			return state.filter((n) => n.id !== comment);
		case Types.EDIT_COMMENT:
			return state.map((n) => {
				if (n.id === comment.commentId){
					n.timestamp = comment.commentData.timestamp;
					n.body = comment.commentData.body;
					return n;
				} else {
					return n;
				}
			});
		case Types.VOTE_COMMENT:
			return state.map((n) => {
				if (n.id === vote.commentId){
					n.voteScore += vote.vote;
					return n;
				} else {
					return n;
				}
			})
		case Types.GET_COMMENTS:
			return comments;
		case Types.CREATE_COMMENT:
			return state.concat([comment]);
		default :
			return state;
	}
}

function categories (state = [], action){
	const { categories } = action;

	switch (action.type){
		case Types.GET_CATEGORIES :
			return categories;
		default :
			return state;
	}
}

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