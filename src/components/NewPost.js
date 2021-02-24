/* JMJ */
import React from 'react';
import { connect } from 'react-redux';
import { startAddPost } from '../actions/posts';
import PostForm from './PostForm';

export class NewPost extends React.Component {
  onSubmit = (post) => {
    this.props.startAddPost(post);
    this.props.history.push('/dashboard');
  };
  render() {
    return (
      <div className="content-container">
        <div className="content-container__edit-post">
          <h1>New Post page</h1>
          <PostForm onSubmit={this.onSubmit} />
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = (dispatch) => ({
  startAddPost: (post) => dispatch(startAddPost(post))
});

export default connect(undefined, mapDispatchToProps)(NewPost);