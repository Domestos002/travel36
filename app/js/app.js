;(function () {
    var showButton = function () {
        if ($(window).scrollTop() > 500) {
            document.getElementById("button-up").style.display = "block";
        }
        else {
            if ($(window).scrollTop() < 500) {
                document.getElementById("button-up").style.display = "none";
            }
        }
    };
    $(document).ready(function () {
        showButton();

        $(window).resize(function () {
            if ($(window).width() <= 768) {
                $(".products-item-wrapper").removeClass("list");
            }
        });


        $(".slider-range").each(function () {
            var slider = $(this);
            slider.slider();
            slider.on("slide", function (slideEvt) {
                slider.closest('.slider-block').find('.slider-label').text(slideEvt.value);
            });
            setTimeout(function () {
                slider.closest('.slider-block').find('.slider-label').text(slider.data('slider').value[0]);
            }, 500);
        });


        $(".footer-column__title").click(function () {
            var el = $(this);
            if (el.hasClass("active")) {
                el.siblings(".footer-column__info").slideUp(400);
                el.removeClass("active");
            }
            else{
                el.siblings(".footer-column__info").slideDown(400);
                el.addClass("active");
            }
        });

        $(".page-content__sidebar-item__title").click(function () {
            var el = $(this);
            if (el.hasClass("active")) {
                el.siblings(".page-content__sidebar-item__content").slideUp(400);
                el.removeClass("active");
            }
            else{
                el.siblings(".page-content__sidebar-item__content").slideDown(400);
                el.addClass("active");
            }
        });


        if ($("select, input:radio").length > 0) {
            $("select, input:radio").styler();
        }

        $("[data-grid-type]").click(function () {
            var el = $(this);
            var container = $("[data-grid-type-container]");
            if (el.data('grid-type') == "listing") {
                container.find(".products-item-wrapper").addClass("list");
                el.addClass("active");
                //container.addClass("list");
            }
            else
            {
                container.find(".products-item-wrapper").removeClass("list");
                el.removeClass("active");
                //container.removeClass("list");
            }
            if (el.hasClass("active")){
                $("[data-grid-type]").removeClass("active");
                el.addClass('active');
            }
            else{
                $("[data-grid-type]").removeClass("active");
                el.addClass('active');
            }
        });


    });

    $(function () {
        $('a.js-scrollScreen[href*="#"]:not([href="#"])').click(function () {
            if ($(this).hasClass('sliding-panel-link')) {
                $('body').removeClass('ovh');
                $('.sliding-panel').removeClass('active');
                $('.site-wrapper-content').removeClass('active');
                $(".site-wrapper").css("width", "auto");
                $(".site-wrapper").toggleClass("ovh");

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

