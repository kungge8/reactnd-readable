import React, { Component } from 'react';
import { connect } from 'react-redux';
import { omit } from 'lodash';
import ID from 'uniqid';
import { addComment } from '../utils/thunk.js';	
import { Button, FormGroup, FormControl, ControlLabel } from  'react-bootstrap';

class NewComment extends Component {
	state = {
		body: "",
		parentId: this.props.parentId,
		isOpen: false,
		author: "Alexander"
	}

	handleBody = (e) => {
		this.setState({ body: e.target.value });
	}

	toggleOpen = () => {
		if (this.state.isOpen){
			this.setState({ isOpen: false });
		} else {
			this.setState({ isOpen: true });
		}
	}

	sendComment = (e) => {
		console.log("-----------------------");
		e.preventDefault();
		this.props.addComment({
			id: ID(),
			timestamp: Date.now(),
			...omit(this.state, 'isOpen')
		});

		this.setState({ isOpen: false });
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

function mapStateToProps({}){
	return {};
}

export default connect(mapStateToProps, { addComment })(NewComment);