import React, { Component } from 'react';
import { connect } from 'react-redux';
import Display from "./Display";
import NewPost from './NewPost';
import PostDetail from './PostDetail';
import EditPost from './EditPost';
import EditComment from './EditComment';
import Login from './Login';
import { Link, Route, withRouter, Switch } from 'react-router-dom';
import { Navbar, NavItem, Nav, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


import { fetchCategories } from '../utils/categories';
import { sortPosts } from '../utils/posts';

class App extends Component {
  state = {
    selectedCat: "",
  }

  sortPosts = (e) => {
    this.props.sortPosts(e);
  }

  componentDidMount(){
    this.props.fetchCategories();
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to='/'>Readable</Link>
            </Navbar.Brand>
          </Navbar.Header>

          <Nav>
            <NavDropdown eventkey={1} title="Select Category" id="basic-nav-dropdown">
              <MenuItem componentClass={Link} href="/" to="/">All</MenuItem>
              {(this.props.categories) ? this.props.categories.map((n, i) => <LinkContainer key={`${n.name}`} to={`/${n.name}`}><MenuItem>{n.name}</MenuItem></LinkContainer>) : "No Categories Found"}
            </NavDropdown>

            <NavDropdown title="Select Filter" id="basic-nav-dropdown" onSelect={this.sortPosts}>
              <MenuItem eventKey={'voteScore'}>Popular topics</MenuItem>
              <MenuItem eventKey={'timestamp'}>Recent topics</MenuItem>
            </NavDropdown>

            <NavItem componentClass={Link} href="/new" to="/new">
              New Post!
            </NavItem>

            <NavItem componentClass={Link} href="/login" to="/login">
              Login!
            </NavItem>
          </Nav>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Display} />
          <Route exact path="/new" component={NewPost} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/:category" component={Display} />
          <Route exact path="/:category/:postId" component={PostDetail} />
          <Route exact path="/post/edit/:postId" component={EditPost} />
          <Route exact path="/comment/edit/:commentId" component={EditComment} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps({ categories }) {
  return {
    categories: categories.categories
  }
}

export default withRouter(connect(mapStateToProps, { sortPosts, fetchCategories })(App));
