import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, FormGroup, FormControl, ControlLabel, Panel, Button } from 'react-bootstrap';
import { postEdit, fetchPosts } from '../utils/posts';

class EditPost extends Component {
	sendEdit = (e) => {
		e.preventDefault();
		this.props.postEdit({ title: e.target.title.value, body: e.target.body.value }, this.props.post.id);
		this.props.history.goBack();
	}

	render() {
		const { title, body } = this.props.post || { title: "", body: "" };
		return (
			<Grid>
				<Panel>
					<Panel.Heading>
						<Panel.Title>
							{'Edit Post!'}
						</Panel.Title>
					</Panel.Heading>

					<Panel.Body>
						<form onSubmit={this.sendEdit}>
							<FormGroup controlId="formBasicText">
								<ControlLabel>Edit Post Title</ControlLabel>
								<FormControl
									type="text"
									name="title"
									defaultValue={title}
								/>

								<ControlLabel>Edit Post Body</ControlLabel>
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
		);
	}
}

function mapStateToProps ({ post, categories }, { match }){
	const postId = match.params.postId;
	return {
		post: (postId) ? post.filter((n) => n.id === postId)[0] : post,
		categories: categories.categories
	};
}

export default connect(mapStateToProps, { postEdit, fetchPosts })(EditPost);