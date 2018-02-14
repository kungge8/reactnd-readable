import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Panel, Button, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { sendVotePost } from '../utils/thunk';


class Post extends Component {
	sendVote = (e) => {
		e.preventDefault();
		this.props.sendVotePost({ option: e.target.value }, this.props.post.id);
	}

	//why is post not rerendering after upvote count is changed? no change in state detected?
	render() {
		const { title, author, body, category, id, voteScore, timestamp } = this.props.post;
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title>
						{title} - {author}
					</Panel.Title>
				</Panel.Heading>

				<Panel.Body>
					{body}
				</Panel.Body>

				<Panel.Footer className={'clearfix'}>
					<Badge>{this.props.comments.filter((n) => n.parentId === id).length}</Badge> {'Comments '}
					<Badge>{voteScore}</Badge> {'Upvotes! '}
					Posted {Date(timestamp)}
					<Button className={'pull-right'} onClick={this.sendVote} value="downVote">Downvote</Button>
					<Button className={'pull-right'} onClick={this.sendVote} value="upVote">Upvote</Button>
					<LinkContainer className={'pull-right'} to={`/${category}/${id}`}><Button>Detailed View</Button></LinkContainer>


				</Panel.Footer>
			</Panel>
		);
	}
}

//use this to display #of comments in Display
function mapStateToProps({ comment }) {
	return {
		comments: comment
	}
}

export default connect(mapStateToProps, { sendVotePost })(Post);