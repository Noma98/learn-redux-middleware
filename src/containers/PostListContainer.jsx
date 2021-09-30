import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { getPosts } from '../modules/posts';
import PostList from '../components/PostList'

function PostListContainer() {
    const { data, loading, error } = useSelector(state => state.posts.posts);
    const dispatch = useDispatch();

    useEffect(() => {
        // if (data) return; //재로딩 피하는 방법1
        dispatch(getPosts());
    }, [dispatch]);// [+data] 

    if (loading && !data) return <div>로딩중..</div>//로딩중이면서 데이터가 없을 때만 로딩중.. 표시
    if (error) return <div>에러 발생</div>
    if (!data) return null;
    return (
        <PostList posts={data} />
    )
}

export default PostListContainer
