import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProfilePage = () => {
    // const params = useParams();
    // const id = params.id;
    const {userId} = useParams();
    const [user, setUser] = useState({});
    const {id, name, email, phone, company} = user;
    const [loading, setLoading] = useState(false);

    // console.log(params);
    // console.log(userId);

    const callApi = () => {
        setLoading(true);

        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setUser(json);
                setLoading(false);
            });
    }

    useEffect(() => {
        callApi();
    }, []);
    
    if (loading) {
        return <h2>로딩중 입니다..</h2>;
    }

    return (
        <>
            <h2>사용자 프로필</h2>

            {
                id ? (
                    <div>
                        <p>사용자 번호 : {id}</p>
                        <p>이름 : {name}</p>
                        <p>이메일 : {email}</p>
                        <p>전화번호 : {phone}</p>
                        <p>회사명 : { company ? company.name : ''}</p>
                    </div>
                ) : (
                    <div>
                        <p>존재하지 않는 프로필입니다.</p>
                    </div>
                )
            }
        </>
    );
};

export default ProfilePage;