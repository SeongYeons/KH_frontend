import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';

// useReducer
//   - 컴포넌트 상황에 따라 상태를 다른 값으로 
//     업데이트해 주고 싶을 때 사용하는 Hook이다.

// reducer 함수는 액션 값을 전달받아 새로운 상태를 반환하는 함수이다.
const reducer = (state, action) => {
    switch(action.type) {
        case 'INCREMENT' :
            return {count: state.count + 1};
        case 'DECREMENT' : 
            return {count: state.count - 1};
        default:
            return state;
    }
};

const Counter = () => {
    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count: 0});

    return (
        <>
            <h3>1. useReducer</h3>

            <p>현재 카운트의 값은 {state.count} 입니다.</p>

            {/* <button onClick={() => setCount(count + 1)}>+1 증가</button> */}
            {/* <button onClick={() => setCount(count - 1)}>-1 감소</button> */}

            {/* dispatch 함수에 파라미터로 액션 값을 넣어 주면 reducer 함수가 호출된다. */}
            <button onClick={() => dispatch({type: 'INCREMENT'})}>+1 증가</button>
            <button onClick={() => dispatch({type: 'DECREMENT'})}>-1 감소</button>
        </>
    );
};

export default Counter;