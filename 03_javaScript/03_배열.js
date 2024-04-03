window.onload = function () {
    // 1. 배열 선언 및 초기화
    let btn1 = document.getElementById('btn1');

    btn1.onclick = function() {
        let array1 = []; // []
        let array2 = new Array(); // []
        let array3 = new Array(3); // [empty x 3]
        let array4 = ['빨강', '파랑', '노랑', '초록'];
        let array5 = new Array('빨강', '파랑', '노랑', '초록');
        let array6 = Array.of('빨강', '파랑', '노랑', '초록');
        let array7 = [
            '홍길동',        // 문자열
            25,             // 숫자
            true,           // 논리
            [1, 2, 3, 4],   // 배열
            {},             // 객체
            function (){}   // 함수
        ];
        let div1 = document.getElementById('div1');

        console.log(array1, array2, array3);
        console.log(array4, array5, array6);
        console.log(array7);

        array1[0] = '귤';
        array1[1] = '사과';
        array1[2] = '자몽';

        array2[0] = '현대';
        array2[1] = '기아';
        array2[2] = '벤츠';
        array2[3] = 'BMW';
        array2[4] = '아우디';

        div1.innerHTML = '<h4>안녕하세요</h4>';
        div1.innerHTML += 
            `array1: [${array1}], length: ${array1.length}<br>`;
        div1.innerHTML += 
            `array2: [${array2}], length: ${array2.length}<br>`;
        div1.innerHTML += 
            `array3: [${array3}], length: ${array3.length}<br>`;
        div1.innerHTML += 
            `array4: [${array4}], length: ${array4.length}<br>`;
        div1.innerHTML += 
            `array5: [${array5}], length: ${array5.length}<br>`;
        div1.innerHTML += 
            `array6: [${array6}], length: ${array6.length}<br>`;
        div1.innerHTML += 
            `array7: [${array7}], length: ${array7.length}<br>`;
    };

    // 2. 배열의 메소드
    let btn2 = document.getElementById('btn2');

    btn2.onclick = function () {
        let div2 = document.getElementById('div2');

        // 1) indexOf()
        // let array = ['체리', '메론', '수박', '귤', '딸기'];
        
        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.indexOf('귤') : ${array.indexOf('귤')}<br>`;
        // div2.innerHTML += `array.indexOf('메론') : ${array.indexOf('메론')}<br>`;
        // div2.innerHTML += `array.indexOf('복숭아') : ${array.indexOf('복숭아')}<br>`;
        
        // 2) concat()
        // let array1 = ['체리', '메론', '수박', '귤', '딸기'];
        // let array2 = ['바나나', '오렌지', '두리안', '망고'];

        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br>`;
        // div2.innerHTML += `array1.concat(array2): [${array1.concat(array2)}]<br>`;
        // div2.innerHTML += `array1: [${array1}]<br>`; // 원본 배열에 영향을 미치지 않는다.
        // div2.innerHTML += `array2.concat(array1): [${array2.concat(array1)}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br>`; // 원본 배열에 영향을 미치지 않는다.
        
        // 3) sort()
        // let array1 = ['Apple', 'Cherry', 'apple', 'Banana'];
        // let array2 = [10, 543, 30, 450, 123, 4885];

        // div2.innerHTML = `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br>`;
        // div2.innerHTML += `array1.sort(): [${array1.sort()}]<br>`;
        // div2.innerHTML += `array2.sort(): [${array2.sort()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array1: [${array1}]<br>`;
        // div2.innerHTML += `array2: [${array2}]<br><br>`;
        
        // array2 오름차순 정렬
        // sort() 메소드에 함수를 매개값으로 전달해서 정렬 기준을 변경할 수 있다.
        // 비교하는 값이 같으면 0을 리턴한다.
        // 첫 번째 매개값이 크면 양수를 리턴한다.
        // 두 번째 매개값이 크면 음수를 리턴한다.
        // array2.sort(function (left, right) {
            
        //     return left - right; // 오름차순
        //     // return right - left; // 내림차순
        // });

        // 참고(화살표 함수 사용)
        // array2.sort((left, right) => left - right);

        // div2.innerHTML += `array2: [${array2}]<br>`;

        // 4) reverse()
        // let array = [8, 5, 3, 6, 1, 4];
        
        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.reverse(): [${array.reverse()}]<br>`;
        // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br><br>`;
        
        // array = ['Apple', 'Cherry', 'apple', 'Banana'];
        // div2.innerHTML += `array.sort().reverse(): [${array.sort().reverse()}]<br>`;
        
        // 5) push(), pop()
        // let array = ['HOT', '핑클', 'SES', 'GOD'];

        // div2.innerHTML = `array: [${array}]<br>`;
        // // push 후 요소의 개수를 리턴한다.
        // div2.innerHTML += `array.push(): [${array.push('신화')}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br><br>`;
        
        // // 배열의 맨 뒤 요소를 제거한 후 반환한다.
        // div2.innerHTML += `array.pop(): [${array.pop()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.pop(): [${array.pop()}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;

        // 6) unshift(), shift()
        // let array = ['HOT', '핑클', 'SES', 'GOD'];

        // div2.innerHTML = `array: [${array}]<br>`;
        // // unshift 후 요소의 개수를 리턴한다.
        // div2.innerHTML += `array.unshift(): [${array.unshift('젝스키스')}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br><br>`;
        
        // // 배열의 맨 앞 요소를 제거한 후 반환한다.
        // div2.innerHTML += `array.shift(): [${array.shift()}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.shift(): [${array.shift()}]<br>`;
        // div2.innerHTML += `array: [${array}]<br>`;

        // 7) slice(), splice()
        // let array = ['HOT', '핑클', 'SES', 'GOD', '신화'];

        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.slice(2): [${array.slice(2)}]<br>`;
        // // 원본 배열에 영향을 미치지 않는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;
        // div2.innerHTML += `array.slice(2, 4): [${array.slice(2, 4)}]<br>`;
        // div2.innerHTML += `array: [${array}]<br><br>`;
        
        // div2.innerHTML += `array: [${array}]<br>`;
        // // div2.innerHTML += `array.splice(2): [${array.splice(2)}]<br>`;
        // // div2.innerHTML += `array.splice(2, 2): [${array.splice(2, 2)}]<br>`;
        // // div2.innerHTML += `array.splice(2, 2, '젝스키스'): [${array.splice(2, 2, '젝스키스')}]<br>`;
        // div2.innerHTML += `array.splice(1, 0, '젝스키스', 'BTS'): [${array.splice(1, 0, '젝스키스', 'BTS')}]<br>`;
        // // 원본 배열에 영향을 미치는 메소드이다.
        // div2.innerHTML += `array: [${array}]<br>`;

        // 8) toString(), join()
        // let array = ['HOT', '핑클', 'SES', 'GOD', '신화'];

        // div2.innerHTML = `array: [${array}]<br>`;
        // div2.innerHTML += `array.toString(): [${array.toString()}]<br>`;
        // div2.innerHTML += `array.join(): [${array.join()}]<br>`;
        // div2.innerHTML += `array.join('|'): [${array.join('|')}]<br>`;

        // 9) forEach()
        // let array = ['HOT', '핑클', 'SES', 'GOD', '신화'];

        // array.forEach(function (value, index, array) {
        //     // div2.innerHTML += `value: ${value}, index: ${index}<br>`;
        //     div2.innerHTML += `array[${index}]: ${array[index]}<br>`;
        // });

        // 10) reduce()
        // 배열의 각 요소에 대해 콜백 함수의 실행 값을 누적하여 
        // 하나의 결과값을 반환한다.
        let array = [3, 5, 7, 9];

        let result = array.reduce(function(left, right) {
            // return left + right;
            return left * right;
        });

        div2.innerHTML = `result: ${result}`;

        // Spread 연산자 (ES6부터 추가)
        // 배열 병합 (concat 메소드와 같은 역할)
        // let arr1 = [1, 2, 3];
        // let arr2 = [8, 9, 10];
        // let arr3 = [...arr1, ...arr2] // [1, 2, 3, 8, 9, 10]
        // console.log(arr1, arr2, arr3)
        
        // 배열 복사
        // let arr1 = [1, 2, 3];
        // let arr2 = [...arr1]; // [1, 2, 3]
        // let arr3 = [...arr1, 4, 6, 8]; // [1, 2, 3, 4, 6, 8]
        // console.log(arr1, arr2, arr3);


    };
};