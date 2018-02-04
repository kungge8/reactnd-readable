import React, {Component} from 'react';
import NewComment from './NewComment';
import Comment from './Comment';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import { Panel, Button } from 'react-bootstrap';

class Post extends Component {
	state = {
		commentsOpen: false
	};

	toggleComments = (e) => {
		if (this.state.commentsOpen){
			this.setState({ commentsOpen: false });
		} else {
			this.setState({ commentsOpen: true });
		}
	};

	render() {
		return (
			<Panel>
				<Panel.Heading>
					<Panel.Title toggle>
						{this.props.post.title}
					</Panel.Title>
				</Panel.Heading>

				<Panel.Collapse>
					<Panel.Body>
						{this.props.post.body}
					</Panel.Body>

					<Panel.Footer>
						<Button onClick={this.toggleComments}>{(this.state.commentsOpen) ? "Hide Comments" : "Show Comments"}</Button>

						{(this.state.commentsOpen)
							?	<div>
									<NewComment parentId={this.props.post.id} />
									{(!isEmpty(this.props.comments))
										? this.props.comments.map((n) => <Comment key={n.id} commentData = {n} />)
										: ""}
								</div>
							: <div />}
					</Panel.Footer>
				</Panel.Collapse>
			</Panel>
		);
	}
}

// function mapStateToProps({ comment }) {
// 	return {
// 		comments: comment
// 	}
// }

// export default connect(mapStateToProps)(Post);

export default Post;