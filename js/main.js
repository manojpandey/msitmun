jQuery(document).ready(function($) {
    var isLateralNavAnimating = false;

    $('.cd-nav-trigger').on('click', function(event) {
        event.preventDefault();

        if (!isLateralNavAnimating) {
            if ($(this).parents('.csstransitions').length > 0) isLateralNavAnimating = true;

            $('body').toggleClass('navigation-is-open');
            $('.cd-navigation-wrapper').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {

                isLateralNavAnimating = false;
            });
        }
    });
    $(function() {
        if (navigator.userAgent.indexOf('Safari') != -1 &&
            navigator.userAgent.indexOf('Chrome') == -1) {
            $("body").addClass("safari");
        }
    });
});