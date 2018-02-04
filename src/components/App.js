import React, { Component } from 'react';
import { connect } from 'react-redux';
import { isEmpty } from 'lodash';
import Post from './Post';
import NewPost from './NewPost';


import {
  fetchPosts,
  fetchCategories
} from '../utils/thunk';


class App extends Component {
  state = {
    selectedCat: "",
    newPostOpen: false,
    newCommentOpen: false
  }

  componentDidMount(){
    this.props.dispatch(fetchPosts());
    this.props.dispatch(fetchCategories());
  }

  //Controller for dropdown that selects and filters posts by category to display in body of page.
  categorySelect = (e) => {
    switch(e.target.value){
      case("All"):
        this.setState({
          selectedCat: ""
        });
        return;
      case(e.target.value):
        this.setState({
          selectedCat: e.target.value
        })
        return;
      default:
        return;
    }
  };

  // toggleOpen = (e) => {
  //   console.log("ToggleOpen: ", e.target);

  // };

  filterComments = (postId) => {
    if (!this.props.comment || isEmpty(this.props.comment)){
      return {};
      // return this.props.comment.filter((n) => n.parentId === postId);
      // return (this.props.comments.filter((n) => n.id === postId));
    } else {
      return this.props.comment.filter((n) => n.parentId === postId);
    }
  };

  render() {
    console.log("APP rendered: ", this.props);
    return (
      <div className="App">
        <header>
          <p>THIS IS A CONTENT PLATFORM.</p>
          <NewPost />
        </header>

        <div>
          <select onChange={this.categorySelect}>
            <option value="All">All</option>
            { (this.props.categories)
              ? this.props.categories.map((n) => <option key={n.name} value={n.name}>{n.name}</option>)
              : "NO CATEGORIES FOUND" }
          </select>    

          { (!this.props.post[0]) 
            ?  "NO POSTS FOUND"
            : this.props.post.filter((n) => (this.state.selectedCat) ? n.category === this.state.selectedCat : n).map((m) => <Post key={m.id} post={m} comments={this.filterComments(m.id)}/>) }

        </div>
      </div>
    );
  }
}

function mapStateToProps({post, comment, categories}) {
  return {
    post: post,
    comment: comment,
    categories: categories.categories
  }
}

export default connect(mapStateToProps)(App);
