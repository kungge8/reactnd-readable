import * as Types from '../actions/actionTypes';
import sortBy from 'sort-by';

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
				}
			});
		case Types.VOTE_POST :
			return state.map((n) => {
				if (n.id === vote.postId){
					n.voteScore += vote.vote;
					return n;
				} else {
					return n;
				}
			});
		case Types.GET_POSTS :
			return posts;
		case Types.CREATE_POST :
			return state.concat([post]);
		default :
			return state;
	}
}

export default post;