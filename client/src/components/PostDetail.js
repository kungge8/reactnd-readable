import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { sendVotePost, deletePost, fetchPosts } from '../utils/posts';
import Comment from './Comment';
import NewComment from './NewComment';

class PostDetail extends Component {
	sendVote = (e) => {
		e.preventDefault();
		this.props.sendVotePost({ option: e.target.value }, this.props.post.id);
	}

	removePost = (e) => {
		this.props.deletePost(this.props.post.id);
	}

	componentDidMount() {
		this.props.fetchPosts();
	}

	render() {
		const { post } = this.props;

		if (!post){
			return <Grid>404 Post not Found</Grid>;
		}
		return (
			<Grid>
				<Row className="show-grid">
					<Col xs={12}>
						<Panel>
							<Panel.Heading>
								{post.title} - <Badge>{post.voteScore}</Badge> vote score
							</Panel.Heading>

							<Panel.Body>
								{post.body}
							</Panel.Body>

							<Panel.Footer className={'clearfix'}>
								Posted by: {post.author} at {Date(post.timestamp)} - <Badge>{this.props.comments.length}</Badge> comments
								<Button className={'pull-right'} onClick={this.removePost}>Delete Post!</Button>
								<LinkContainer className={'pull-right'} to={`/post/edit/${post.id}`}><Button>Edit Post</Button></LinkContainer>
								<Button className={'pull-right'} onClick={this.sendVote} value="downVote">Downvote</Button>
								<Button  className={'pull-right'} onClick={this.sendVote} value="upVote">Upvote</Button>
								<NewComment parentId={post.id} />
							</Panel.Footer>
						</Panel>
					</Col>
				</Row>

				{this.props.comments.map((n) => <Comment key={n.id} commentData={n} voteScore={n.voteScore} body={n.body} />)}
			</Grid>
		);
	}
}

function mapStateToProps ({ post, comment }, { match }){
	const postId = match.params.postId;
	return {
		post: (postId) ? post.filter((n) => n.id === postId)[0] : post,
		comments: comment.filter((n) => n.parentId === postId)
	};
}

export default connect(mapStateToProps, { sendVotePost, deletePost, fetchPosts })(PostDetail);