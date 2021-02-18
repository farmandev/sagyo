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
        // $('.body_overlay').toggleClass('open');
    });
    $('.client-menu').on('click', function() {
        // $('.body_overlay').toggleClass('open');
        $(this).toggleClass('open');
    });
    // $('.pop-btn').on('click', function() {
    //     $('.home').addClass('open');
    //     // $('.create-mission-wrap').addClass('d-none');
    //     // $('.filter-btn-wrap').removeClass('d-none');
    //     // $('.filter-btn-wrap').addClass('d-flex');
    //     // $('.mission-slider-wrap.v1').removeClass('d-none');
    // });
    //popup close
    // $('.pop-btn').on('click', function() {
    //     if ($('.mission-slider-wrap.v1').hasClass('d-none')) {
    //         $('.mission-slider-wrap.v1').removeClass('d-none');
    //         $('.create-mission-wrap').addClass('d-none');
    //     }
    // });
    // $('.body_overlay').on('click', function() {
    //     if($('.client-menu').hasClass('open') && $('.notif-list').hasClass('open')){
    //         $('.client-menu').removeClass('open');
    //         $('.notif-list').removeClass('open');
    //     }

    // });

    //Slider 

    $('.mission-slider-one').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        infinite: true,
        arrows: false,
        speed: 300,
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
                    slidesToShow: 1
                }
            }

        ]
    });
    $('.mission-slider-two').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
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
                    slidesToShow: 1
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