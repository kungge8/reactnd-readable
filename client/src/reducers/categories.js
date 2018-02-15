import * as Types from '../actions/actionTypes';

function categories (state = [], action){
	const { categories } = action;

	switch (action.type){
		case Types.GET_CATEGORIES :
			return categories;
		default :
			return state;
	}
}

export default categories;