import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendCommentVote, deleteComment } from '../utils/thunk';
import { Panel, Button, Row, Col, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

class Comment extends Component {
	sendVote = (e) => {
		e.preventDefault();
		console.log("SENDVOTECOMMENT: ", e.target.value);
		this.props.sendCommentVote({ option: e.target.value }, this.props.commentData.id);
	}

	removeComment = (e) => {
		console.log("COMMENT DELETE");
		this.props.deleteComment(this.props.commentData.id);
	}

	render (){
		const { body, author, voteScore, id } = this.props.commentData;
		return (
			<Row>
				<Col xs={12}>
					<Panel>
						<Panel.Body>
							{body}
						</Panel.Body>

						<Panel.Footer className={'clearfix'}>
							{author} - <Badge>{voteScore}</Badge> Votescore
							<Button className={'pull-right'} onClick={this.removeComment}>Delete Comment</Button>
							<LinkContainer to={`/comment/edit/${id}`}><Button className={'pull-right'}>Edit Comment</Button></LinkContainer>
							<Button value={'downVote'} onClick={this.sendVote} className={'pull-right'}>Downvote!</Button>
							<Button value={'upVote'} onClick={this.sendVote} className={'pull-right'}>Upvote!</Button>
						</Panel.Footer>
					</Panel>
				</Col>
			</Row>
		);
	}
}

function mapStateToProps({}) {
	return {};
}

export default connect(mapStateToProps, { sendCommentVote, deleteComment })(Comment);