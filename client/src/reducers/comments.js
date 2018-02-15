import * as Types from '../actions/actionTypes';

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
			});
		case Types.GET_COMMENTS:
			return comments;
		case Types.CREATE_COMMENT:
			return state.concat([comment]);
		default :
			return state;
	}
}

export default comment;