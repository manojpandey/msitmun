jQuery(document).ready(function($) {

    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
        return false;
    });

    $(window).scroll(function(e){
        parallax();
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