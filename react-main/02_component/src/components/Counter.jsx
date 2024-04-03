import React, { useState } from 'react';

const Counter = () => {
    // let count = 0;
    let [count, setCount] = useState(10);
    let [color, setColor] = useState('black');
    let style = {
        color, // color: color과 같다.
        fontWeight: 'bold',
        fontSize: '1.5em'
    };

    const onIncrease = () => {
        console.log(count);

        // count = count + 1;
        setCount(count + 1);
        setColor('green');
    };
    
    const onDecrease = () => {
        setCount(count - 1)
        setColor('red');
    }

    const onReset = () => {
        // setCount(0);
        setCount(parseInt(Math.random() * 100) + 1);
        setColor('black');
    }

    return (
        <div>
            <p>카운트: <span style={style}>{count}</span></p>

            <button onClick={onIncrease}>증가</button>
            <button onClick={onDecrease} className='ml-3'>감소</button>
            {/* <button onClick={() => setCount(count - 1)} className='ml-3'>감소</button> */}
            <button onClick={onReset} className='ml-3'>초기화</button>
        </div>
    );
};

export default Counter;