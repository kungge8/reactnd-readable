import React, { Component } from 'react';
import { connect } from 'react-redux';
import { omit } from 'lodash';
import ID from 'uniqid';
import { addComment } from '../utils/comments.js';	
import { Button, FormGroup, FormControl, ControlLabel } from  'react-bootstrap';

class NewComment extends Component {
	state = {
		body: "",
		parentId: this.props.parentId,
		isOpen: false
	}

	handleBody = (e) => {
		this.setState({ body: e.target.value });
	}

	toggleOpen = () => {
			this.setState({ isOpen: !this.state.isOpen });
	}

	sendComment = (e) => {
		e.preventDefault();
		if (this.props.user === ""){
			alert('Please log in!');
		} else {
			this.props.addComment({
				id: ID(),
				timestamp: Date.now(),
				author: this.props.user,
				...omit(this.state, 'isOpen')
			});

			this.setState({ isOpen: false });
		}
	}

	render(){
		return (
			<div>
				{(this.state.isOpen) 
						?	<form>
								<FormGroup
									controlId="formBasicText"
								/>
									<ControlLabel>Submit a new comment!</ControlLabel>
									<FormControl
										type="text"
										value={this.state.body}
										placeholder="What would you like to say?"
										onChange={this.handleBody}
									/>
								<Button onClick={this.sendComment}>Submit!</Button>
								<Button onClick={this.toggleOpen}>Close</Button>
							</form>
						: <Button onClick={this.toggleOpen}>Add New Comment!</Button>}
			</div>
		);
	}
}

function mapStateToProps ({ user }){
	return {
		user
	};
}

export default connect(mapStateToProps, { addComment })(NewComment);