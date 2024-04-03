var btn2 = document.getElementById('btn2');

// btn2.onclick = function () {
//     console.log('"console 출력 버튼" 클릭!!')
// };

function consolePrint() {
    console.log('"console 출력 버튼" 클릭!!');
}

btn2.onclick = consolePrint;