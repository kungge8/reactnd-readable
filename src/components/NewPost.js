import React, { Component } from 'react';
import { omit } from 'lodash';
import { connect } from 'react-redux';
import ID from 'uniqid';
import { addPost } from '../utils/thunk.js';
// import './App.css';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';

class NewPost extends Component {
	state = {
		isOpen: false,
		title: "",
		body: "",
		author: "Alexander"
	}

	toggleOpen = () => {
		if (this.state.isOpen){
			this.setState({isOpen: false});
		} else {
			this.setState({isOpen: true});
		}
	}

	handleTitle = (e) => {
		this.setState({ title: e.target.value });
	}

	handlePostBody = (e) => {
		this.setState({ body: e.target.value });
	}

	categorySelect = (e) => {
		this.setState({
			category: e.target.value
		})
	}

	//WHY ISNT THERE ACTUAL SUBSTANCE TO THE POST??????
	sendPost = (e) => {
		e.preventDefault();
		this.props.addPost({
			id: ID(),
			timestamp: Date.now(),
			...omit(this.state, 'isOpen')
		});
	}

	render(){
		return (
			<div>
				{(this.state.isOpen)
					?	<div>
							<form>
								<FormGroup
									controlId="formBasicText"
								>
									<ControlLabel>Testing forms</ControlLabel>
									<FormControl
										type="text"
										value={this.state.title}
										placeholder="Enter Title"
										onChange={this.handleTitle}
									/>

									<ControlLabel>Select Category</ControlLabel>
									<select onChange={this.categorySelect}>
										<option value="none">Select a Category</option>
				            { (this.props.categories.categories) ? this.props.categories.categories.map((n) => <option key={n.name} value={n.name}>{n.name}</option>) : "NO CATEGORIES FOUND"}
				          </select>

									<FormControl
										type="text"
										value={this.state.postBody}
										placeholder="What are you posting?"
										onChange={this.handlePostBody}
									/>
									<FormControl.Feedback />
								</FormGroup>
							</form>
							<Button onClick={this.sendPost}>Submit</Button>
							<Button onClick={this.toggleOpen}>Close</Button>
						</div>
					: <Button onClick={this.toggleOpen}>Add New Post!</Button>}
			</div>
		);
	}
}

function mapStateToProps({categories}){
	return {
		categories: categories
	}
}

export default connect(mapStateToProps, { addPost })(NewPost);