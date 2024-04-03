import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

const SignUp2 = () => {
    // 네 개의 입력을 한 번에 처리하기 위해서
    // useState()의 초깃값으로 객체를 지정한다.
    const [form, setForm] = useState({
        id: 'hong123',
        password: '',
        name: '홍길동',
        address: '서울특별시'
    });
    const {id, password, name, address} = form;
    const idRef = useRef(null);

    const onChangeForm = (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log({...form, [event.target.name]: event.target.value});

        // 기존 form을 복사한 뒤 원하는 값을 덮어 씌운다.
        // 객체 안에서 key을 []로 감싸면 그 안에 넣은 실제 속성 값이
        // key 값으로 사용된다.
        setForm({
            ...form, 
            [event.target.name]: event.target.value
        });
    };

    const printValue = () => {
        alert(`아이디: ${id}, 암호: ${password}, 이름: ${name}, 주소: ${address}`);
        setForm({
            id: '',
            password: '',
            name: '',
            address: ''
        });

        idRef.current.focus();
    }

    const onKeyUpAddress = (event) => {
        if (event.key === 'Enter') {
            printValue();
        }
    };

    return (
        <>
            <h3>1. 회원 가입</h3>

            <input 
                type="text"
                placeholder="아이디를 입력하세요."
                value={id}
                onChange={onChangeForm}
                ref={idRef}
                name="id"
            />

            <br/>

            <input 
                type="password" 
                placeholder="비밀번호를 입력하세요."
                value={password}
                onChange={onChangeForm}
                name="password"
            />

            <br/>

            <input 
                type="text"
                placeholder="이름을 입력하세요."
                value={name}
                onChange={onChangeForm}
                name="name"
            />

            <br/>

            <input 
                type="text"
                placeholder="주소를 입력하세요."
                value={address}
                onChange={onChangeForm}
                onKeyUp={onKeyUpAddress}
                name="address"
            />

            <br/><br/>

            <button onClick={printValue}>회원 가입</button>

            <h5>아이디 : {id}</h5>
            <h5>비밀번호 : {password}</h5>
            <h5>이름 : {name}</h5>
            <h5>주소 : {address}</h5>
        </>
    );
};

export default SignUp2;