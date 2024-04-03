$(document).ready(() => {
    // 1.  show(), hide(), toggle()
    $('#btnShow').on('click', () => {
        // $('#img1').show();
        // $('#img1').show(1000);
        $('#img1').show(1500, 'swing');
    });

    $('#btnHide').on('click', () => {
        // $('#img1').hide();
        // $('#img1').hide(1000);
        $('#img1').hide(1500, 'linear');
        // $('#img1').hide(1500, 'linear', () => {
        //     alert('이미지가 사라짐');
        // });
    });

    $('#btnToggle').on('click', () => {
        $('#img1').toggle(1000, 'swing');
    });

    // 2. slideDown(), slideUp(), slideToggle()
    $('.menu').on('click', (event) => {
        let content = $(event.target).next();

        // if (content.css('display') === 'none') {
        //     content.slideDown(500, 'swing');
        // } else {
        //     content.slideUp(500, 'swing');
        // }

        content.slideToggle(500, 'swing');
    });

    // 3. fadeIn(), fadeOut(), fadeToggle(), fadeTo()
    $('#btnFadeIn').on('click', () => {
        // $('#img2').fadeIn();
        // $('#img2').fadeIn(1500);
        $('#img2').fadeIn(1500, 'linear');
    });

    $('#btnFadeOut').on('click', () => {
        // $('#img2').fadeOut();
        // $('#img2').fadeOut(1000);
        $('#img2').fadeOut(1000, 'swing');
    });

    $('#btnFadeToggle').on('click', () => {
        // $('#img2').fadeToggle();
        // $('#img2').fadeToggle(1000);
        $('#img2').fadeToggle(1000, 'swing');
    });

    $('#img2').hover((event) => {
        if (event.type === 'mouseenter') {
            $(event.target).fadeTo(500, .3, 'linear');
        } else {
            $(event.target).fadeTo(500, 1, 'swing');
        }
    });
});