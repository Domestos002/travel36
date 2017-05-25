;(function () {
    $("#story-slider").owlCarousel({
        items: 3,
        nav: false,
        margin: 5,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            750: {
                items: 3
            }
        }
    });
    function sliderInit() {
        if ($(window).width() <= 767) {

            $("#consultant-slider").owlCarousel({
                items: 1,
                nav: true,
                loop:true,
                responsive: {
                    0: {
                        items: 1
                    }
                }
            });
        }
    }


    $(document).ready(function () {
        sliderInit();
        $(".uk-parent > a").on('click', function(e) {
            e.preventDefault();
        });

        $("#offcanvas-close").on('click', function(e) {
            $('#offcanvas')[0].click();
        });

        $(window).resize(function () {
            sliderInit();
        });

    });

    $(function () {
        $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('sliding-panel-link')) {
            }
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[id=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
})();

