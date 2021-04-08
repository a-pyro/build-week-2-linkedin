import React, { Component } from 'react';
import { ardisToken } from 'data/utilities';
import { Container } from 'react-bootstrap';
import CreatePost from 'components/news-feed-comp/CreatePost';
import PostList from 'components/news-feed-comp/PostList';

export default class NewsFeed extends Component {
  state = {
    isLoading: true,
    posts: [],
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
      this.setState({ isLoading: false });
    } catch (error) {
      console.log(error);
      this.setState({ isLoading: false });
    }
  };

  componentDidMount = () => {
    this.getPosts();
  };

  render() {
    return (
      <>
        <Container>
          <h1>it's cool to be feed</h1>
          <CreatePost />
          <PostList />
        </Container>
      </>
    );
  }
}
