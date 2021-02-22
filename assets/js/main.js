(function($) {
    "use strict";

    //===== Prealoder
    $(window).on('load', function(event) {
        $('.proloader').delay(500).fadeOut(500);
    });


    // sticky
    var wind = $(window);
    var sticky = $('.header-bar-area');
    wind.on('scroll', function() {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });
    $('.hamburger-menu').on('click', function() {
        $(this).toggleClass('open');
        $('.main-menu').toggleClass('open');
    });

    $('.notifi-icon').on('click', function() {
        $(this).toggleClass('open');
        $('.body_overlay').toggleClass('open');
    });
    $('.client-menu').on('click', function() {
        $('.body_overlay').toggleClass('open');
        $(this).toggleClass('open');
    });
     $('.body_overlay').on('click', function() {
        $(this).removeClass('open');
        if($('.client-menu').hasClass('open')){
            $('.client-menu').removeClass('open');
        }
        if($('.notifi-icon').hasClass('open')){
            $('.notifi-icon').removeClass('open');
        }
    });

    

    //Slider 

    $('.mission-slider-one').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        // autoplay: true,
        // autoplaySpeed: 3000,
        arrows: false,
        speed:900,
        centerMode: false,
        // slidesToShow: 1,
        // slidesToScroll: 1,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }

        ]
    });
    $('.mission-slider-two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: false,
        speed: 900,
        centerMode: false,
        responsive: [{
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    dots: true
                }
            }

        ]
    });

    // Show or hide the sticky footer button
    $(window).on('scroll', function(event) {
        if ($(this).scrollTop() > 600) {
            $('.back-to-top').fadeIn(200)
        } else {
            $('.back-to-top').fadeOut(200)
        }
    });


    //Animate the scroll to yop
    $('.back-to-top').on('click', function(event) {
        event.preventDefault();

        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });

    /* ----------------------------------------
                  datepicker
     ------------------------------------------- */
    $("#datepicker-from-1, #datepicker-to-1").datepicker({
        autoclose: true,
        todayHighlight: true
    });
    $('select').niceSelect();


})(jQuery);