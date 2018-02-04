import React from 'react';
import { Panel, Button } from 'react-bootstrap';

const Comment = (props) => {
	return (
		<Panel>
			{props.commentData.body}
		</Panel>
	);
}

export default Comment;