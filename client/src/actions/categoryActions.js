import * as Types from './actionTypes';

export function getCategories (categories){
	return {
		type: Types.GET_CATEGORIES,
		categories
	}
}

