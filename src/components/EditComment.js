import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, FormGroup, FormControl, ControlLabel, Panel, Button } from 'react-bootstrap';
import { commentEdit } from '../utils/thunk';

class EditComment extends Component {
	sendEdit = (e) => {
		e.preventDefault();
		this.props.commentEdit({ timestamp: Date.now(), body: e.target.body.value }, this.props.comment.id);
		this.props.history.goBack();
	}

	render (){
		const { body } = this.props.comment;
		return(
			<Grid>
				<Panel>
					<Panel.Heading>
						<Panel.Title>
							{'Edit Comment!'}
						</Panel.Title>
					</Panel.Heading>

					<Panel.Body>
						<form onSubmit={this.sendEdit}>
							<FormGroup controlId="formBasicText">
								<ControlLabel>Edit Comment Text</ControlLabel>
								<FormControl
									type="text"
									name="body"
									defaultValue={body}
								/>
							</FormGroup>

							<Button type='submit' className={'pull-right'}>Submit Edit</Button>
						</form>
					</Panel.Body>
				</Panel>
			</Grid>
		)
	};
}

function mapStateToProps ({ comment, categories }, { match }) {
	const commentId = match.params.commentId;
	return {
		comment: (commentId) ? comment.filter((n) => n.id === commentId)[0] : comment
	};
};

export default connect(mapStateToProps, { commentEdit })(EditComment);