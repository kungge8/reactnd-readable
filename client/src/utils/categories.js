import * as Act from '../actions/categoryActions';
import * as API from './api';

export const fetchCategories = () => dispatch => (
	API.getCategories()
		.then((categories) => {
			dispatch(Act.getCategories(categories));
		})
);