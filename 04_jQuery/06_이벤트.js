$(document).ready(() => {
    // 1. 이벤트 연결
    // 1) on(), off()
    // $('#div1').on('mouseenter', (event) => {
    //     let element = event.target;

    //     element.style.backgroundColor = 'green';
    //     element.style.color = 'white';
    //     element.innerText = '마우스 올라감';
    // });

    // $('#div1').on('mouseleave', (event) => {
    //     $(event.target)
    //         .css({backgroundColor: 'red', color: 'white'})
    //         .text('마우스 내려감');
    // });

    // $('#div1').on('click', (event) => {
    //     $(event.target)
    //         .css({backgroundColor: 'white', color: 'black'})
    //         .text('')
    //         // .off('mouseenter')
    //         // .off('mouseleave')
    //         // .off('click');
    //         .off('mouseenter mouseleave click');
    // });

    // $('#div1').on('mouseenter mouseleave click', (event) => {
    //     console.log(event.type);

    //     if (event.type === 'mouseenter') {
    //         $(event.target)
    //             .css({backgroundColor: 'green', color: 'white'})
    //             .text('마우스 올라감');
    //     } else if (event.type === 'mouseleave') {
    //         $(event.target)
    //             .css({backgroundColor: 'red', color: 'white'})
    //             .text('마우스 내려감');
    //     } else if (event.type === 'click') {
    //         $(event.target)
    //             .css({backgroundColor: 'white', color: 'black'})
    //             .text('')
    //             .off('mouseenter mouseleave click');
    //     }
    // });

    $('#div1').on({
        mouseenter: (event) => {
            $(event.target)
                .css({backgroundColor: 'green', color: 'white'})
                .text('마우스 올라감');
        },
        mouseleave: (event) => {
            $(event.target)
                .css({backgroundColor: 'red', color: 'white'})
                .text('마우스 내려감');
        },
        click: (event) => {
            $(event.target)
                .css({backgroundColor: 'white', color: 'black'})
                .text('')
                .off('mouseenter mouseleave click');
        }
    });

    // 2) one()
    $('#div2').one('mouseenter mouseleave click',(event) => {
        if (event.type === 'mouseenter') {
            $(event.target)
                .css({backgroundColor: 'green', color: 'white'})
                .text('마우스 올라감');
        } else if (event.type === 'mouseleave') {
            $(event.target)
                .css({backgroundColor: 'red', color: 'white'})
                .text('마우스 내려감');
        } else if (event.type === 'click') {
            $(event.target)
                .css({backgroundColor: 'white', color: 'black'})
                .text('처음이자 마지막으로 이벤트 핸들러 실행');
        }
    });

    // 2. 키보드 이벤트
    // 1) keydown, keypress, keyup
    // 키보드가 눌려질 때
    $('#textarea1').keydown((event) => {
        console.log(`keydown: ${event.key}, ${event.keyCode}`);
    });
    
    // 글자가 입력될 때(한글, 기능키, 펑션키 사용 못함)
    $('#textarea1').keypress((event) => {
        console.log(`keypress: ${event.key}, ${event.keyCode}`);
    });
    
    // 키보드가 떼어질 때
    $('#textarea1').keyup((event) => {
        console.log(`keyup: ${event.key}, ${event.keyCode}`);
    });

    // 2) 동적으로 글자 수 세기
    $('#textarea2').on('keyup', (event) => {
        let target = $(event.target);
        let currentLength = target.val().length;
        let maxLength = parseInt($('#maxLength').text());

        console.log(currentLength, maxLength);

        if (currentLength > maxLength) {
            target.val(target.val().substr(0, maxLength));
        } else {
            $('#currentLength').text(currentLength);
        }
    });

    // 3) 동적으로 아이디 조건 확인
    $('#userId').keyup((event) => {
        let userId = event.target.value;
        let regExp = /^[a-z][a-z0-9]{3,11}$/;

        console.log(userId);

        if (userId === null || userId === '') {
            $('#idCheck').text('');
        } else if (regExp.test(userId)) {
            $('#idCheck')
                .text('사용 가능한 아이디입니다.')
                .css({color: 'green', fontWeight: 'bold'});
        } else {
            $('#idCheck')
                .text('사용 불가능한 아이디입니다.')
                .css({color: 'red', fontWeight: 'bold'});
        }
    });

    // 3. trigger() 메소드
    $('#div3').click((event) => $(event.target).toggleClass('bg-hotpink'));

    $('#btn1').click(() => {
        $('#div3').trigger('click');
    });
});