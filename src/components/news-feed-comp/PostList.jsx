import SinglePost from './SinglePost';
import { v4 as uuidv4 } from 'uuid';
import { Row, Spinner } from 'react-bootstrap';

const PostList = ({ posts, userLogged, getPosts, isLoading }) => {
  // console.log(userLogged);
  if (isLoading)
    return (
      <Row className='justify-content-center'>
        <Spinner animation='grow' />
      </Row>
    );
  return (
    <Row>
      <h3>qui vanno tutti i post</h3>
      {posts.slice(0, 10).map((post) => (
        <SinglePost
          getPosts={getPosts}
          key={uuidv4()}
          post={post}
          userLogged={userLogged}
        />
      ))}
    </Row>
  );
};

export default PostList;
