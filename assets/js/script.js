(function($) {

    "use strict";
    //Match title height-1
    function MatchHeight1() {
        $('.match-1')
            .matchHeight({});
    }
    $(document).ready(function() {
        MatchHeight1();
    });

    function MatchHeight2() {
        $('.match-2')
            .matchHeight({});
    }
    $(document).ready(function() {
        MatchHeight2();
    });

    function MatchHeight3() {
        $('.match-3')
            .matchHeight({});
    }
    $(document).ready(function() {
        MatchHeight3();
    });


    //Hide Loading Box (Preloader)
    function handlePreloader() {
        if ($('.preloader').length) {
            $('.preloader').delay(200).fadeOut(500);
        }
    }


    //Submenu Dropdown Toggle
    if ($('.main-header li.dropdown ul').length) {
        $('.main-header li.dropdown').append('<div class="dropdown-btn"><span class="fas fa-caret-down"></span></div>');

        //Dropdown Button
        $('.main-header li.dropdown .dropdown-btn').on('click', function() {
            $(this).prev('ul').slideToggle(500);
        });

        //Disable dropdown parent link
        $('.main-header .navigation li.dropdown > a,.hidden-bar .side-menu li.dropdown > a').on('click', function(e) {
            e.preventDefault();
        });

    }


    //Update Header Style and Scroll to Top
    function headerStyle() {
        if ($('.main-header').length) {
            var windowpos = $(window).scrollTop();
            var siteHeader = $('.main-header');
            var scrollLink = $('.scroll-to-top');
            var sticky_header = $('.main-header .sticky-header');
            if (windowpos > 100) {
                siteHeader.addClass('fixed-header');
                sticky_header.addClass("animated slideInDown");
                scrollLink.fadeIn(300);
            } else {
                siteHeader.removeClass('fixed-header');
                sticky_header.removeClass("animated slideInDown");
                scrollLink.fadeOut(300);
            }
        }
    }

    headerStyle();


    //Hidden Sidebar
    if ($('.hidden-bar').length) {
        var hiddenBar = $('.hidden-bar');
        var hiddenBarOpener = $('.nav-toggler');
        var hiddenBarCloser = $('.hidden-bar-closer');
        $('.hidden-bar-wrapper').mCustomScrollbar();

        //Show Sidebar
        hiddenBarOpener.on('click', function() {
            hiddenBar.addClass('visible-sidebar');
        });

        //Hide Sidebar
        hiddenBarCloser.on('click', function() {
            hiddenBar.removeClass('visible-sidebar');
        });
    }


    //Hidden Bar Menu Config
    function hiddenBarMenuConfig() {
        var menuWrap = $('.hidden-bar .side-menu');
        // appending expander button
        menuWrap.find('.dropdown').children('a').append(function() {
            return '<button type="button" class="btn expander"><i class="icon fa fa-angle-right"></i></button>';
        });
        // hidding submenu
        menuWrap.find('.dropdown').children('ul').hide();
        // toggling child ul
        menuWrap.find('.btn.expander').each(function() {
            $(this).on('click', function() {
                $(this).parent() // return parent of .btn.expander (a)
                    .parent() // return parent of a (li)
                    .children('ul').slideToggle();

                // adding class to expander container
                $(this).parent().toggleClass('current');
                // toggling arrow of expander
                $(this).find('i').toggleClass('fa-angle-right fa-angle-down');

                return false;

            });
        });
    }

    hiddenBarMenuConfig();



    //Mobile Nav Hide Show
    if ($('.mobile-menu').length) {

        $('.mobile-menu .menu-box').mCustomScrollbar();

        var mobileMenuContent = $('.main-header .nav-outer .main-menu').html();
        $('.mobile-menu .menu-box .menu-outer').append(mobileMenuContent);
        $('.sticky-header .main-menu').append(mobileMenuContent);

        //Dropdown Button
        $('.mobile-menu li.dropdown .dropdown-btn').on('click', function() {
            $(this).toggleClass('open');
            $(this).prev('ul').slideToggle(500);
        });
        //Menu Toggle Btn
        $('.mobile-nav-toggler').on('click', function() {
            $('body').addClass('mobile-menu-visible');
        });

        //Menu Toggle Btn
        $('.mobile-menu .menu-backdrop,.mobile-menu .close-btn').on('click', function() {
            $('body').removeClass('mobile-menu-visible');
        });

    }



    $('.education-carousel').slick({
        autoplay: true,
        autoplaySpeed: 4500,
        cssEase: 'ease-out',
        arrows: false,
        slidesToShow: 2,
        infinite: true,
        variableWidth: false,
        pauseOnHover: true,
        slidesToScroll: 1,
        dots: true,
        prevArrow: '<div class="slick-slider-prev-btn "><span class="fa fa-angle-left "></span><span class="sr-only ">Prev</span></div>',
        nextArrow: '<div class="slick-slider-next-btn "><span class="fa fa-angle-right "></span><span class="sr-only ">Next</span></div>',
        responsive: [{
            breakpoint: 1199.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 991.98,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        }, {
            breakpoint: 575.98,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]

    });

    //nav-active
    $('.navigation a').click(function() {
        $('.navigation a').removeClass('active');
        $(this).addClass('active');
    });









    // Elements Animation
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: 0, // distance to the element when triggering the animation (default is 0)
            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }


    $(window).on('scroll', function() {
        headerStyle();
    });


    $(window).on('load', function() {
        handlePreloader();
    });

})(window.jQuery);

//mobile-slider

jQuery.event.special.touchstart = {
    setup: function(_, ns, handle) {
        if (ns.includes("noPreventDefault")) {
            this.addEventListener("touchstart", handle, { passive: false });
        } else {
            this.addEventListener("touchstart", handle, { passive: false });
        }
    }
};
jQuery.event.special.touchmove = {
    setup: function(_, ns, handle) {
        if (ns.includes("noPreventDefault")) {
            this.addEventListener("touchmove ", handle, { passive: false });
        } else {
            this.addEventListener("touchmove ", handle, { passive: false });
        }
    }
};


jQuery(document).ready(function($) {

    //// hide #back-top first
    $(".scrollToTop").hide();

    // fade in #back-top
    $(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() > 100) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        // scroll body to 0px on click
        $('.scrollToTop').click(function() {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

});