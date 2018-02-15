import * as Types from './actionTypes';

export function login (user) {
	return {
		type: Types.LOGIN,
		user
	}
}