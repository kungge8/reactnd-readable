import * as Act from '../actions/userActions';

export const login = (user) => {
	return (dispatch) => {
		dispatch(Act.login(user));
	}
};