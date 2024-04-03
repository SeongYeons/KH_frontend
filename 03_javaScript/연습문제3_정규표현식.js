function validate() {
    let userId = document.getElementById('userId').value;
    let userPwd1 = document.getElementById('userPwd1').value;
    let userPwd2 = document.getElementById('userPwd2').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;

    // 첫글자는 반드시 소문자로, 
    // 그리고 영문자,숫자 포함하여 총 4~12자로 입력하시오.
    if(!(/^[a-z][a-zA-Z0-9]{3,11}$/.test(userId))) {
        alert('유효한 아이디를 입력하세요.');

        return false;
    }

    // 영문자, 숫자, 특수문자 포함하여 총 8자~15자로 입력하시오.
    if (!(/^[\w!@#$%^&*]{8,15}$/.test(userPwd1))) {
        alert('유효한 비밀번호를 입력하세요.');

        return false;
    }

    // 비밀번호 확인
    if (userPwd1 !== userPwd2) {
        alert('동일한 비밀번호를 입력하세요.');

        return false;
    }

    // 이름 검사
    // 한글로만 이루어져야 되며 2글자 이상으로 입력하시오.
    if(!(/^[가-힣]{2,}$/.test(userName))) {
        alert('유효한 이름을 입력하세요.');
        
        return false;
    }

    // 이메일
    if(!(/^[\w]+@[\w]+\.[A-Za-z\.]{2,6}$/.test(email))) {
        alert('유효한 이메일을 입력하세요.');
        
        return false;
    }
}