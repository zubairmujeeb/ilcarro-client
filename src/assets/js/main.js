// JQUERY MASKING
$('.date').mask('00/00/0000');
$('.time').mask('00:00');


$(".nav-tabs").on("click", ".nav-item", function() {
    $(this).addClass("active").siblings().removeClass("active");
});

$(".btn-group").on("click", ".btn", function() {
    $(this).addClass("active").siblings().removeClass("active");
});



// OWL JS
$(document).ready(function() {

    $('#mostPopularOwl').owlCarousel({
        loop: true,
        nav: true,
        width: 100,
        itemsDesktop: false,
        itemsMobile: true,
        dots: true,
        mouseDrag: false,
        responsiveClass: true,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1,
                mouseDrag: true
            },
            600: {
                items: 1,
                mouseDrag: true
            },
            1000: {
                items: 2,
                mouseDrag: true
            },
            1280: {
                items: 3,
                nav: false,
                dots: false,
                loop: false,

            }
        }
    });
});

// mCustomScrollbar JS INIT
$(window).on("load", function() {
    $("body, .search-detail").mCustomScrollbar({
        autoHideScrollbar: true,
        theme: "rounded",
        mouseWheelPixels: 1000
    });

});