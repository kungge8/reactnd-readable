import React from 'react';
import NewComment from './NewComment';

// class Post extends Component {

// }

const Post = (props) => {
	return (
		<div>
			{props.post.title}
			<NewComment />
		</div>
	);
}


export default Post;