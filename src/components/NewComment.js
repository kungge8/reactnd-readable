import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewComment extends Component {
	state = {
		isOpen: false
	}

	toggleOpen = () => {
		if (this.state.isOpen){
			this.setState({
				isOpen: false
			});
		} else {
			this.setState({
				isOpen: true
			});
		}
	}

	render(){
		return (
			<div onClick={this.toggleOpen}>
				{(this.state.isOpen) 
						? "NEWCOMMENT OPEN"
						: "NEWCOMMENT CLOSED"}
			</div>
		);
	}
}

export default connect()(NewComment);