import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentsPage2 = () => {
    const params = useParams();
    const postId = params.postId;

    const array = useState([]);
    const comments = array[0];
    const setComments = array[1];

    const array2 = useState(false);
    const loading = array2[0];
    const setLoading = array2[1];

    console.log(params);
    console.log(postId);

    const callApi = () => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then((res) => res.json())
            .then((obj) => {
                console.log(obj);

                setComments(obj);
                setLoading(false);
            });
    };

    useEffect(() => {
        callApi();
    }, []);
    
    if (loading) {
        return <h2>로딩중 입니다...</h2>;
    }

    return (
        <>
            <h2>{postId}번 게시글 댓글 목록</h2>

            <table border={1}>
                <thead>
                    <tr>
                        <th width="80px">댓글 번호</th>
                        <th width="100px">게시글 번호</th>
                        <th>작성자 이메일</th>
                        <th>내용</th>
                    </tr>
                </thead>
                <tbody>
                    {comments.length !== 0 ? (
                        comments.map((comment) => {
                            return (
                                <tr key={comment.id}>
                                    <td>{comment.id}</td>
                                    <td>{comment.postId}</td>
                                    <td>{comment.email}</td>
                                    <td>{comment.body}</td>
                                </tr>
                            );
                        })
                    ) : (
                        <tr>
                            <td colSpan="4">조회된 데이터가 없습니다.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </>
    );
};

export default CommentsPage2;