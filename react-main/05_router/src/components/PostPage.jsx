import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const PostPage = () => {
    const { postId } = useParams();
    const [post, setPost] = useState({});
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const callApi = () => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
            .then((response) => response.json())
            .then((json) => {
                console.log(json);

                setPost(json);
                setLoading(false);
            });
    };

    useEffect(() => {
        callApi();
    }, []);

    if(loading) {
        return <h2>로딩중 입니다..</h2>
    }
    
    return (
        <>
            <h2>게시글 상세 조회</h2>

            <p>게시글 아이디 : {post.id}</p>
            <p>게시글 제목 : {post.title}</p>
            <p>게시글 내용</p>
            <p>{post.body}</p>

            {/* <button onClick={() => navigate(`/comments?postId=${postId}`) }>댓글 목록 조회</button> */}
            <button onClick={() => navigate(`/posts/${postId}/comments`) }>댓글 목록 조회</button>
        </>
    );
};

export default PostPage;