import React, { Component } from 'react';
import { connect } from 'react-redux';
import ID from 'uniqid';
import { addPost } from '../utils/posts';
import { Button, FormGroup, FormControl, ControlLabel, Panel, Grid } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

class NewPost extends Component {
	state = {
		title: "",
		body: "",
		redirect: false
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

	sendPost = (e) => {
		e.preventDefault();
		if (this.props.user === ""){
			alert('Please log in!');
		} else {
			this.props.addPost({
				id: ID(),
				timestamp: Date.now(),
				author: this.props.user,
				...this.state
			});

			this.setState({ redirect: true });
		}
	}

	render(){
		if (this.state.redirect) {
			return <Redirect push to='/' />
		}

		return (
			<Grid>
				<Panel>
					<Panel.Heading>
						<Panel.Title>
							{'Submit a new Post!'}
						</Panel.Title>
					</Panel.Heading>

					<Panel.Body>
						<form>
							<FormGroup controlId="formBasicText">
								<ControlLabel>Post Title</ControlLabel>
								<FormControl
									type="text"
									value={this.state.title}
									placeholder="Enter Title"
									onChange={this.handleTitle}
								/>

								<ControlLabel>Select Category</ControlLabel>
								<select onChange={this.categorySelect}>
									<option value="none">Select a Category</option>
			            { (this.props.categories) ? this.props.categories.map((n) => <option key={n.name} value={n.name}>{n.name}</option>) : "NO CATEGORIES FOUND"}
			          </select>

								<FormControl
									type="text"
									value={this.state.body}
									placeholder="What are you posting?"
									onChange={this.handlePostBody}
								/>
								<FormControl.Feedback />
							</FormGroup>
						</form>
					</Panel.Body>

					<Panel.Footer className={'clearfix'}>
						<Button className={'pull-right'} onClick={this.sendPost}>Submit</Button>
					</Panel.Footer>
				</Panel>
			</Grid>
		);
	}
}

function mapStateToProps({ categories, user }){
	return {
		categories: categories.categories,
		user
	}
}

export default connect(mapStateToProps, { addPost })(NewPost);