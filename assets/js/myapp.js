$("document").ready(function($){
    var nav = $('.header');

    $(window).scroll(function () {
        if ($(this).scrollTop() > 5) {
            nav.addClass("fixed");
        } else {
            nav.removeClass("fixed");
        }
    });
});