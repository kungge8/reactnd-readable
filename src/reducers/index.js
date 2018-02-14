import { combineReducers } from 'redux';
import sortBy from 'sort-by';

import {
	GET_POSTS,
	GET_CATEGORIES,
	GET_COMMENTS,
	CREATE_COMMENT,
	VOTE_COMMENT,
	EDIT_COMMENT,
	DELETE_COMMENT,
	CREATE_POST,
	VOTE_POST,
	EDIT_POST,
	DELETE_POST,
	SORT_POST
} from '../actions'

function post (state = [], action){
	const { posts, post, vote, sortKey } = action;

	switch (action.type){
		case SORT_POST:
			return [].concat(state.sort(sortBy("-" + sortKey)));
		case DELETE_POST:
			return state.filter((n) => n.id !== post);
		case EDIT_POST :
			return state.map((n) => {
				if (n.id === post.postId){
					n.title = post.postData.title;
					n.body = post.postData.body;
					return n;
				} else {
					return n;
				};
			});
		case VOTE_POST :
			return state.map((n) => {
				if (n.id === vote.postId){
					n.voteScore += vote.vote;
					return n;
				} else {
					return n;
				};
			});
		case GET_POSTS :
			return posts;
		case CREATE_POST :
			return state.concat([post]);
		default :
			return state;
	}
}

function comment (state = [], action){
	const { comments, comment, vote } = action;

	switch (action.type){
		case DELETE_COMMENT:
			return state.filter((n) => n.id !== comment);
		case EDIT_COMMENT:
			return state.map((n) => {
				if (n.id === comment.commentId){
					n.timestamp = comment.commentData.timestamp;
					n.body = comment.commentData.body;
					return n;
				} else {
					return n;
				}
			});
		case VOTE_COMMENT:
			return state.map((n) => {
				if (n.id === vote.commentId){
					n.voteScore += vote.vote;
					return n;
				} else {
					return n;
				}
			})
		case GET_COMMENTS:
			return comments;
		case CREATE_COMMENT:
			return state.concat([comment]);
		default :
			return state;
	}
}

function categories (state = [], action){
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