import SinglePost from './SinglePost';
import { v4 as uuidv4 } from 'uuid';
import { Row, Spinner } from 'react-bootstrap';

const PostList = ({ posts, userLogged, getPosts, isLoading }) => {
  // console.log(userLogged);
  // console.log(posts);
  if (isLoading)
    return (
      <Row className='justify-content-center mt-3'>
        <Spinner animation='grow' />
      </Row>
    );
  console.log(posts);
  return (
    <Row className='mt-3'>
      {posts.map((post) => (
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
