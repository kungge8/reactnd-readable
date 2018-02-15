import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';
import { Grid } from 'react-bootstrap';
import { fetchPosts } from '../utils/thunk';

class Display extends Component {
	componentDidMount() {
		this.props.fetchPosts();
	}

	render () {
		const { posts } = this.props;
		return (
			<Grid>
				{posts.map((post, i) => <Post order={i} key={post.id} post={post} voteScore={post.voteScore}/>)}
			</Grid>
		);
	}
}

function mapStateToProps ( { post }, { match }) {
	const category = match.params.category;
	return {
		posts: (category) ? post.filter((n) => n.category === category) : post
	};
}

export default connect(mapStateToProps, { fetchPosts })(Display);