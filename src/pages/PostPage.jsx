import React from 'react'
import PostContainer from '../containers/PostContainer';

function PostPage({ match }) {
    const { id } = match.params; //URL 파라미터 조회

    return <PostContainer postId={parseInt(id, 10)} />;
}

export default PostPage
