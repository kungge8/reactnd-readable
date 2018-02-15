import React from 'react';
import { connect } from 'react-redux';
import { sendCommentVote, deleteComment } from '../utils/comments';
import { Panel, Button, Row, Col, Badge } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Comment = ({ commentData, sendCommentVote, deleteComment }) => {
	const { body, author, voteScore, id } = commentData;

	const sendVote = (e) => {
		e.preventDefault();
		sendCommentVote({ option: e.target.value }, id);
	}

	const removeComment = (e) => {
		deleteComment(id);
	}

	return (
		<Row>
			<Col xs={12}>
				<Panel>
					<Panel.Body>
						{body}
					</Panel.Body>

					<Panel.Footer className={'clearfix'}>
            {author} - <Badge>{voteScore}</Badge> Votescore
            <Button className={'pull-right'} onClick={removeComment}>Delete Comment</Button>
            <LinkContainer to={`/comment/edit/${id}`}><Button className={'pull-right'}>Edit Comment</Button></LinkContainer>
            <Button value={'downVote'} onClick={sendVote} className={'pull-right'}>Downvote!</Button>
            <Button value={'upVote'} onClick={sendVote} className={'pull-right'}>Upvote!</Button>
          </Panel.Footer>
				</Panel>
			</Col>
		</Row>
	);
}

export default connect(null, { sendCommentVote, deleteComment })(Comment);