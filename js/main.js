$(document).ready(function(){
    $('#serv').click(function(){
        const servDest = $('#services');

        $('html').animate({
            scrollTop: servDest.offset().top
        }, 900);
    });

    $('#sob').click(function() {
        const sobDest = $('#about');

        $('html').animate({
            scrollTop: sobDest.offset().top
        }, 900);
    });

    $('#gal').click(function() {
        const galDest = $('#gallery');

        $('html').animate({
            scrollTop: galDest.offset().top
        }, 900);
    });

    $('#con').click(function() {
        const conDest = $('#contact');

        $('html').animate({
            scrollTop: conDest.offset().top
        }, 900);
    });
})