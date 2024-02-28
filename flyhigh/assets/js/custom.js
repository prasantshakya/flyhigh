(function ($) {
    "use strict";
    $(".mean-menu").meanmenu({ meanScreenWidth: "991" });
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 150) {
            $(".navbar-area").addClass("sticky-nav");
        } else {
            $(".navbar-area").removeClass("sticky-nav");
        }
    });
    $(".home-slider").owlCarousel({ loop: true, margin: 30, items: 1, nav: true, dots: false, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"] });
    $(".home-slider-two").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
    });
    $(".apartment-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
    });
    $(".house-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        nav: true,
        dots: false,
        dotsData: true,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
    });
    $(".house-slider-two").owlCarousel({ loop: true, margin: 0, items: 1, nav: true, dots: false, autoplay: true, autoplayHoverPause: true, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"] });
    $(".house-slider-three").owlCarousel({ loop: true, margin: 0, items: 1, nav: true, dots: false, autoplay: true, autoplayHoverPause: true, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"] });
    $(".oftop-slider-wrap").owlCarousel({ loop: true, margin: 30, nav: false, mouseDrag: false, thumbs: true, thumbsPrerendered: true, items: 1, dots: false, autoHeight: true, autoplay: true, smartSpeed: 1500, autoplayHoverPause: true });
    $(".room-details-slider").owlCarousel({ loop: true, margin: 0, items: 1, nav: true, dots: false, autoplay: true, autoplayHoverPause: true, navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"] });
    $(".innovation-slider").owlCarousel({ loop: true, margin: 0, items: 1, nav: false, dots: true, autoplay: true, autoplayHoverPause: true });
    $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 0,
        items: 3,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayHoverPause: true,
        navText: ["<i class='flaticon-left-chevron'></i>", "<i class='flaticon-right-chevron'></i>"],
        responsive: { 0: { items: 1 }, 768: { items: 2 }, 1000: { items: 3 } },
    });
    $(".gallery-view").magnificPopup({ delegate: "a", type: "image", tLoading: "Loading image #%curr%...", mainClass: "mfp-img-mobile", gallery: { enabled: true, navigateByImgClick: true, preload: [0, 1] } });
    $("select").niceSelect();
    $(".tab ul.tabs").addClass("active").find("> li:eq(0)").addClass("current");
    $(".tab ul.tabs li a").on("click", function (g) {
        var tab = $(this).closest(".tab"),
            index = $(this).closest("li").index();
        tab.find("ul.tabs > li").removeClass("current");
        $(this).closest("li").addClass("current");
        tab.find(".tab_content")
            .find("div.tabs_item")
            .not("div.tabs_item:eq(" + index + ")")
            .slideUp();
        tab.find(".tab_content")
            .find("div.tabs_item:eq(" + index + ")")
            .slideDown();
        g.preventDefault();
    });
    function makeTimer() {
        var endTime = new Date("august  30, 2022 17:00:00 PDT");
        var endTime = Date.parse(endTime) / 1000;
        var now = new Date();
        var now = Date.parse(now) / 1000;
        var timeLeft = endTime - now;
        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - days * 86400) / 3600);
        var minutes = Math.floor((timeLeft - days * 86400 - hours * 3600) / 60);
        var seconds = Math.floor(timeLeft - days * 86400 - hours * 3600 - minutes * 60);
        if (hours < "10") {
            hours = "0" + hours;
        }
        if (minutes < "10") {
            minutes = "0" + minutes;
        }
        if (seconds < "10") {
            seconds = "0" + seconds;
        }
        $("#days").html(days + "<span>Days</span>");
        $("#hours").html(hours + "<span>Hours</span>");
        $("#minutes").html(minutes + "<span>Minutes</span>");
        $("#seconds").html(seconds + "<span>Seconds</span>");
    }
    setInterval(function () {
        makeTimer();
    }, 300);
    $(".input-counter").each(function () {
        var spinner = jQuery(this),
            input = spinner.find('input[type="text"]'),
            btnUp = spinner.find(".plus-btn"),
            btnDown = spinner.find(".minus-btn"),
            min = input.attr("min"),
            max = input.attr("max");
        btnUp.on("click", function () {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on("click", function () {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });
    $(".newsletter-form")
        .validator()
        .on("submit", function (event) {
            if (event.isDefaultPrevented()) {
                formErrorSub();
                submitMSGSub(false, "Please enter your email correctly");
            } else {
                event.preventDefault();
            }
        });
    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }
    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function () {
            $("#validator-newsletter").addClass("hide");
        }, 4000);
    }
    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function () {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000);
    }
    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({ url: "https://envyTheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9", callback: callbackFunction });
    $("body").append('<div id="toTop" class="top-btn"><i class="bx bx-up-arrow"></i></div>');
    $(window).on("scroll", function () {
        if ($(this).scrollTop() != 0) {
            $("#toTop").fadeIn();
        } else {
            $("#toTop").fadeOut();
        }
    });
    $("#toTop").on("click", function () {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
    new WOW().init();
    $(window).on("load", function () {
        $(".preloader").fadeOut(500);
    });
    // $("body").append(
    //     "<a href='https://themeforest.net/checkout/from_item/27807330?license=regular&support=bundle_6month&_ga=2.120181006.721751676.1644836235-918236941.1644836235' target='_blank' class='buy-now-btn'><img src='assets/img/envato.png' alt='envato'/>Buy Now</a>"
    // );
})(jQuery);

// function setTheme(themeName) {
//     localStorage.setItem("theme", themeName);
//     document.documentElement.className = themeName;
// }
// function toggleTheme() {
//     if (localStorage.getItem("theme") === "theme-dark") {
//         setTheme("theme-light");
//     } else {
//         setTheme("theme-dark");
//     }
// }
// (function () {
//     if (localStorage.getItem("theme") === "theme-dark") {
//         setTheme("theme-dark");
//         document.getElementById("slider").checked = false;
//     } else {
//         setTheme("theme-light");
//         document.getElementById("slider").checked = true;
//     }
// })();
