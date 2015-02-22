(function ($) {
    "use strict";

    var fn = {

        // Launch Functions
        Launch: function () {
            fn.MenuSticky();
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



})(jQuery);