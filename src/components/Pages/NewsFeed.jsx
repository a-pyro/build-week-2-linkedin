import React, { Component } from 'react';
import { ardisToken } from 'data/utilities';
import { Container } from 'react-bootstrap';
import CreatePost from 'components/news-feed-comp/CreatePost';
import PostList from 'components/news-feed-comp/PostList';

export default class NewsFeed extends Component {
  state = {
    isLoading: true,
    posts: [],
    userLogged: 'ardi',
  };

  getPosts = async () => {
    this.setState({ isLoading: true });
    try {
      const resp = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
        {
          headers: {
            Authorization: ardisToken,
          },
        }
      );
      const posts = await resp.json();
      console.log(posts[0]);
      this.setState({ posts });
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.getPosts();
  };

  // componentDidUpdate = (prevProps, prevState) => {
  //   if (prevState.posts !== this.state.posts) this.getPosts();
  // };

  render() {
    return (
      <>
        <Container>
          <h1>it's cool to be feed</h1>
          <CreatePost />
          <PostList
            posts={this.state.posts}
            userLogged={this.state.userLogged}
            getPosts={this.getPosts}
          />
        </Container>
      </>
    );
  }
}
