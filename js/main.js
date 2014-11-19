(function ($) {
    "use strict";

    ///////////////////////////////////////////////////// Your
    var venueAddress = "Grand Place, 1000, Brussels"; // Venue
    /////////////////////////////////////////////////// Adress

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.MenuSticky();
            fn.MainSlider();
            fn.MainSliderAlign();
            fn.Navigation();
            fn.Apps();
        },




        // Sticky Menu
        MenuSticky: function () {
            var menu = document.querySelector('#menu'),
                origOffsetY = menu.offsetTop + 100;
            function scroll() {
                if ($(window).scrollTop() >= origOffsetY) {
                    $('#menu').addClass('sticky');
                    $('#menu').removeClass('fixed');
                } else {
                    $('#menu').removeClass('sticky');
                    $('#menu').addClass('fixed');
                }
            }
            document.onscroll = scroll;
        },



        // Align Slider Horizontally
        MainSliderAlign: function () {
            var imageWidth, widthFix, container = $('.header-bg');
            function centerImage() {
                imageWidth = container.find('img').width();
                widthFix = imageWidth / 2;
                container.find('img').css('margin-left', -widthFix);
            }
            $(window).on("load resize", centerImage);
        },



        // Main FlexSlider
        MainSlider: function () {
            $(window).load(function () {
                $('.main-slider').flexslider({
                    noCSS: true,
                    touch: false,
                    controlNav: false,
                    directionNav: false,
                    animation: "fade",
                    start: function () {
                        $('#preloader').addClass('ready');
                    }
                });
            });
        },



        // One Page Navigation
        Navigation: function () {
            $('#menu').onePageNav({
                currentClass: 'current',
                scrollSpeed: 500,
                scrollOffset: 60,
                scrollThreshold: 0.2,
                easing: 'swing'
            });
        },

        // Apps
        Apps: function () {

            // Accordion
            $('.accordion-group').accordion();

            // Go Top
            $('#gotop').click(function () {
                $('html, body').scrollTo($('#header'), 300);
            });

        }


    };

    $(document).ready(function () {
        fn.Launch();
    });



        // Register / Login
$(document).ready(function () {
        $('.alert').delay(2000).fadeIn(300);

$('.fa-times-circle').click(function(){
   $(this).parent('.alert').fadeOut(300);
});

$('.switch').click(function(){
   $(this).children('i').toggleClass('fa-pencil');
   $('.login').animate({height: "toggle", opacity: "toggle"}, "slow");
   $('.register').animate({height: "toggle", opacity: "toggle"}, "slow");
});
});

})(jQuery);