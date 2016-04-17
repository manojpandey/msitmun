setInterval(function() {
    $(".holder > p:first")
        .removeClass("middle, right")
        .next()
        .addClass("middle").removeClass("right")
        .end()

    .addClass("right").removeClass("middle").appendTo(".holder");
}, 4500);


jQuery(document).ready(function($) {

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });


    $('.team-one-button').mouseenter(function() {

        $(this).addClass('active');

    });


    $('.avatar').mouseleave(function() {

        $(this).children('.team-one-button').removeClass('active');

    });

    $('.sub-one').hover(function(el) {

        $('.sub-one').not(this).addClass('sibling-has-focus');
        $(this).addClass('has-focus');
        //$(el).removeClass('sibling-has-focus');

    }, function() {

        $('.sub-one').removeClass('sibling-has-focus').removeClass('has-focus');

    });



    var isLateralNavAnimating = false;
    $('.nav-trigger').on('click', function(event) {
        event.preventDefault();

        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

                isLateralNavAnimating = false;
            });
        }
    });

    function parallax() {
        var scrolled = $(window).scrollTop();
        $('img').css('top', -(scrolled * 0.2) + 'px');
    }

    $(function() {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $("body").addClass("safari");
        }
    });

    $('.navigation-wrapper').find('li').click(function() {

        console.log($(this).index());
    })
});

//JS FOR TIMER

var deadline = '2016-08-13';

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24) % 24);
    var months = Math.floor((t / (1000 * 60 * 60 * 24)) / 30);
    return {
        'total': t,
        'months': months,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var monthsSpan = clock.querySelector('.months');
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);
        monthsSpan.innerHTML = t.months;
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}


initializeClock('clockdiv', deadline);
