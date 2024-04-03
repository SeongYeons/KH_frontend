// 함수
// 1. 함수 선언
// 1) 선언적 함수
function funcTest() {
    alert('funcTest() 함수 호출');
    
    // return 'funcTest() 함수 호출';

    // return;
}

// 2) 익명 함수
let btn1 = document.getElementById('btn1');

btn1.onclick = function () {
    let p1 = document.getElementById('p1');

    p1.innerHTML = '익명 함수 호출';
};

// 스스로 실행하는 함수
// 함수 정의와 동시에 즉시 실행되는 함수로 한 번만
// 호출되며 다시 호출할 수 없다.
(
    function (a, b) {
        document.getElementById('p1').innerHTML = 
            `a + b = ${a + b}, (스스로 실행)`;
    }
)(10, 30);

/*
    3) 화살표 함수
        [표현법]
            1) 매개 변수 처리
                - 매개 변수가 없을 때 : () => { ... }
                - 매개 변수가 하나일 때 : x => { ... }
                - 매개 변수가 두 개 이상일 때 : (x, y, ...) => { ... }
            2) 리턴 처리
                - 처리할 라인이 여러 개라면 {}로 감싸서 처리해야 한다.
                    (a, b) => {
                        let result = a + b;
                        return result;
                    };
                - 처리할 라인이 하나라면 {}와 return 문을 생략할 수 있다.
                    (a, b) => a + b;
*/

let btn2 = document.getElementById('btn2');

btn2.onclick = () => {
    let p2 = document.getElementById('p2');

    p2.innerHTML = '화살표 함수 호출';
};

// 2. 함수 호출
// 1) 매개 변수
let btn3 = document.getElementById('btn3');

btn3.addEventListener('click', () => {
    // argTest();
    // argTest('안녕하세요.');
    argTest('안녕하세요.', '반갑습니다.');
});

// 매개 변수 기본값을 지정하면 전달되는 매개값이 없을 경우
// 기본값으로 사용한다. (ES6부터 도입)
// function argTest(value) {
function argTest(value = '매개값 없음') {
    document.getElementById('p3').innerHTML = value;
}

// 2) arguments 객체
let btn4 = document.getElementById('btn4');

// btn4.addEventListener('click', () => {
btn4.addEventListener('click', function () {
    let result = 0;
    let p4 = document.getElementById('p4');

    // 화살표 함수에서는 arguments 객체를 생성하지 않는다.
    console.log(arguments);

    // result = sum();
    // result = sum(125, 600);
    // result = sum(125, 600, 900);
    result = sum(11, 22, 33, 44);

    p4.innerHTML = `result: ${result}`;
});

// function sum() {
//     let result = 0;

//     console.log(arguments);
//     console.log(arguments.length);
//     console.log(typeof(arguments));

//     for (const value of arguments) {
//         result += value; // result = result + value;
//     }

//     return result;
// }

// arguments 대신 Rest 파라미터를 사용해서 구현할 수 있다.
function sum(...numbers) {
    let result = 0;

    console.log(numbers);
    console.log(numbers.length);
    console.log(typeof(numbers));

    for (const number of numbers) {
        result += number;
    }

    // Spread 연산자를 활용하여
    // 배열의 요소를 풀어서 함수(메소드)에 전달

    // let array = [1, 3, 60, 8];
    // Math.max(array[0], array[1], array[2], array[3]);
    // Math.max(...array);

    return result;
}

// 3. 함수 리턴
// 1) 일반적인 값 리턴
let btn5 = document.getElementById('btn5');

btn5.addEventListener('click', () => {
    alert(`random: ${random()}`);
});

// 1 ~ 100까지의 랜덤값을 리턴하는 함수
function random() {
    let result = 0;

    result = parseInt(Math.random() * 100) + 1;

    return result;
}

// 2) 익명 함수 리턴
let btn6 = document.getElementById('btn6');

btn6.addEventListener('click', () => {
    let func = returnTest();

    func();
    
    // returnTest()();
});

function returnTest() {
    // 클로저
    //   - 내부 함수가 사용하는 외부 함수의 지역 변수는
    //     내부 함수가 소멸될 때까지 소멸되지 않는 특성을 갖는데
    //     이러한 특성을 클로저라고 한다.
    let name = '홍길동';
    // let func = function () {
    //     alert('안녕하세요.');
    // };

    // return func;

    return function () {
        alert(`${name}님 안녕하세요.`);
    };
}

// 4. 내장 함수
// 1) eval() 함수 
let btn7 = document.getElementById('btn7');

btn7.addEventListener('click', () => {
    let p5 = document.getElementById('p5');
    let calc = document.getElementById('calc');

    p5.innerHTML = `실제 입력된 값 : ${calc.value}<br>`;
    p5.innerHTML += `eval() 후 : ${eval(calc.value)}`;
});

// 2) isFinite(), isNaN()
let btn8 = document.getElementById('btn8');

btn8.addEventListener('click', () => {
    let p6 = document.getElementById('p6');

    p6.innerHTML = '<h4>안녕하세요.</h4>';
    p6.innerHTML += `10 / 0 : ${10 / 0}<br>`;
    p6.innerHTML += `-10 / 0 : ${-10 / 0}<br>`;
    // p6.innerHTML += `${(-10 / 0) === -Infinity}<br>`;
    p6.innerHTML += `isFinite(10 / 0) : ${isFinite(10 / 0)}<br>`;
    p6.innerHTML += `isFinite(-10 / 0) : ${isFinite(-10 / 0)}<br>`;
    p6.innerHTML += `isFinite(-10 / 2) : ${isFinite(-10 / 2)}<br><br>`;
    p6.innerHTML += `10 / 'a' : ${10 / 'a'}<br>`;
    // p6.innerHTML += `${10 / 'a' === NaN}<br>`;
    p6.innerHTML += `isNaN(10 / 'a') : ${isNaN(10 / 'a')}<br>`;
    p6.innerHTML += `isNaN(10 / 2) : ${isNaN(10 / 2)}<br>`;


});