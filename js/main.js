jQuery(function($) {
    "use strict";

    var TuComInox = window.TuComInox || {};

    /*=======================================
    =             MAIN FUNCTION             =
    =======================================*/
    TuComInox.MainSlider = function() {
        $('.main-slider').slick({
            slidesToShow: 2,
            dots: true,
            arrows: false,
            adaptiveHeight: true
        });
    }

    TuComInox.BackToTop = function() {        
        if ($("html,body").scrollTop() >= $(window).height()) {
            $("#back-to-top").removeClass("hidden")
        }
        $(window).scroll(function() {
            if ( $("html,body").scrollTop() >= $(window).height() ) {
                $("#back-to-top").removeClass("hidden")
            }
            else {
                $("#back-to-top").addClass("hidden")
            }
        });
        $("#back-to-top").click(function() {
            $("html,body").animate({
                    scrollTop: "0"
                },
                300
            );
        })
    }
    
    
    /*======================================
    =            INIT FUNCTIONS            =
    ======================================*/

    $(document).ready(function() {
        TuComInox.MainSlider();
        TuComInox.BackToTop();
    });

    /*=====  End of INIT FUNCTIONS  ======*/

    $(window).on('load', function() {});

});