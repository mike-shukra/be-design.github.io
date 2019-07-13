$(document).ready(function() {
    window.onload = function() {
        var page_w = $(window).width();
        var page_h = $(window).height();
        if (page_w < 671) {
            $('.menu_button').addClass("menu_button_sw");
            $('.but_bot_l').addClass("but_bot_l_sw");

        }
        if (page_w > 671) {
            $('.menu_button').removeClass("menu_button_sw");
            $('.but_bot_l').removeClass("but_bot_l_sw");
        }
        if (page_w < 1000) {
            if (page_h > page_w) {
                $('.full_page').css("width", "80%");
            }
        }
    }


    function onScroll() {
        var page_w = $(window).width();
        var scroll_h = $(window).scrollTop();
        if (scroll_h <= 800) {
            $('#side_menu').css("display", "none");
        }
        if (scroll_h > 800) {
            if (page_w > 1200) {

                $('#side_menu').css("display", "block");
                $('#side_menu').click(function() {
                    if ($.browser.safari) {
                        $('body').animate({ scrollTop: 0 }, 500); //500 - скорость
                        $('body').queue("fx", []);
                    } else {
                        $('html').animate({ scrollTop: 0 }, 500);
                        $('html').queue("fx", []);
                    }
                    return false;
                });
            }
        }
    };

    $(window).bind("scroll", onScroll);

    $(window).bind("resize", function() {
        var page_w = $(window).width();
        var page_h = $(window).height();
        if (page_w < 1200) {
            $('#side_menu').css("display", "none");
            $(window).unbind('scroll', onScroll);
        }
        if (page_w > 1200) {
            $(window).bind("scroll", onScroll);
            var scroll_h = $(window).scrollTop();
            if (scroll_h > 400) {
                $('#side_menu').css("display", "block");
            }
        }
        if (page_w < 671) {
            $('.menu_button').addClass("menu_button_sw");
            $('.but_bot_l').addClass("but_bot_l_sw");
        }
        if (page_w > 671) {
            $('.menu_button').removeClass("menu_button_sw");
            $('.but_bot_l').removeClass("but_bot_l_sw");
        }
        if (page_w < 1000) {
            if (page_h > page_w) {
                $('.full_page').css("width", "80%");
            }
        }
        if (page_w > 750) {
            if (page_h < 800) {
                $('.full_page').css("width", "40%");
            }
        }
        if (page_w > 1000) {
            $('.full_page').css("width", "40%");
        }

    });

});


//прокрутка
$(document).ready(function() {
    $("a").click(function() {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 500);

        return false;
    });
});




//конец прокрутка

//аякс меню

//кр
$(document).ready(function() {

    $('#button_kr1').click(function() {
        $.ajax({
            url: "parts/scroll-kr-1.html",
            cache: false,
            success: function(html) {
                $("#slide-kr").html(html);
            }
        });
        $('#button_kr1').addClass("active");
        $('#button_kr2').removeClass("active");
        $('#button_kr3').removeClass("active");
        $('#button_kr4').removeClass("active");
        $('#button_kr5').removeClass("active");

    });

    $('#button_kr2').click(function() {
        $.ajax({
            url: "parts/scroll-kr-2.html",
            cache: false,
            success: function(html) {
                $("#slide-kr").html(html);
            }
        });
        $('#button_kr2').addClass("active");
        $('#button_kr1').removeClass("active");
        $('#button_kr3').removeClass("active");
        $('#button_kr4').removeClass("active");
        $('#button_kr5').removeClass("active");
    });

    $('#button_kr3').click(function() {
        $.ajax({
            url: "parts/scroll-kr-3.html",
            cache: false,
            success: function(html) {
                $("#slide-kr").html(html);
            }
        });
        $('#button_kr3').addClass("active");
        $('#button_kr1').removeClass("active");
        $('#button_kr2').removeClass("active");
        $('#button_kr4').removeClass("active");
        $('#button_kr5').removeClass("active");
    });
    $('#button_kr4').click(function() {
        $.ajax({
            url: "parts/scroll-kr-4.html",
            cache: false,
            success: function(html) {
                $("#slide-kr").html(html);
            }
        });
        $('#button_kr4').addClass("active");
        $('#button_kr1').removeClass("active");
        $('#button_kr2').removeClass("active");
        $('#button_kr3').removeClass("active");
        $('#button_kr5').removeClass("active");
    });
    $('#button_kr5').click(function() {
        $.ajax({
            url: "parts/scroll-kr-5.html",
            cache: false,
            success: function(html) {
                $("#slide-kr").html(html);
            }
        });
        $('#button_kr5').addClass("active");
        $('#button_kr1').removeClass("active");
        $('#button_kr2').removeClass("active");
        $('#button_kr3').removeClass("active");
        $('#button_kr4').removeClass("active");
    });


    //ва мп

    $('#button_mp1').click(function() {
        $.ajax({
            url: "parts/scrollmp1.html",
            cache: false,
            success: function(html) {
                $("#slide2-1").html(html);
            }
        });
        $('#button_mp1').addClass("active");
        $('#button_va2').removeClass("active");

    });

    $('#button_va2').click(function() {
        $.ajax({
            url: "parts/scrollva2.html",
            cache: false,
            success: function(html) {
                $("#slide2-1").html(html);
            }
        });
        $('#button_va2').addClass("active");
        $('#button_mp1').removeClass("active");
    });

    //га

    $('#button_ga1').click(function() {
        $.ajax({
            url: "parts/scroll-ga-1.html",
            cache: false,
            success: function(html) {
                $("#slide-ga").html(html);
            }
        });
        $('#button_ga1').addClass("active");
        $('#button_ga2').removeClass("active");
        $('#button_ga3').removeClass("active");

    });

    $('#button_ga2').click(function() {
        $.ajax({
            url: "parts/scroll-ga-2.html",
            cache: false,
            success: function(html) {
                $("#slide-ga").html(html);
            }
        });
        $('#button_ga2').addClass("active");
        $('#button_ga1').removeClass("active");
        $('#button_ga3').removeClass("active");
    });

    $('#button_ga3').click(function() {
        $.ajax({
            url: "parts/scroll-ga-3.html",
            cache: false,
            success: function(html) {
                $("#slide-ga").html(html);
            }
        });
        $('#button_ga3').addClass("active");
        $('#button_ga1').removeClass("active");
        $('#button_ga2').removeClass("active");
    });

    //км

    $('#button_km1').click(function() {
        $.ajax({
            url: "parts/scroll-km-1.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km1').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");

    });

    $('#button_km2').click(function() {
        $.ajax({
            url: "parts/scroll-km-2.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km2').addClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km3').click(function() {
        $.ajax({
            url: "parts/scroll-km-3.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km3').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km4').click(function() {
        $.ajax({
            url: "parts/scroll-km-4.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km4').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km5').click(function() {
        $.ajax({
            url: "parts/scroll-km-5.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km5').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km6').click(function() {
        $.ajax({
            url: "parts/scroll-km-6.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km6').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km7').click(function() {
        $.ajax({
            url: "parts/scroll-km-7.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km7').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km8').click(function() {
        $.ajax({
            url: "parts/scroll-km-8.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km8').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km1').removeClass("active");
        $('#button_km9').removeClass("active");
    });

    $('#button_km9').click(function() {
        $.ajax({
            url: "parts/scroll-km-9.html",
            cache: false,
            success: function(html) {
                $("#slide-km").html(html);
            }
        });
        $('#button_km9').addClass("active");
        $('#button_km2').removeClass("active");
        $('#button_km3').removeClass("active");
        $('#button_km4').removeClass("active");
        $('#button_km5').removeClass("active");
        $('#button_km6').removeClass("active");
        $('#button_km7').removeClass("active");
        $('#button_km8').removeClass("active");
        $('#button_km1').removeClass("active");
    });

    //л

    $('#button_l1').click(function() {
        $.ajax({
            url: "parts/scroll-l-1.html",
            cache: false,
            success: function(html) {
                $("#slide-l").html(html);
            }
        });
        $('#button_l1').addClass("active");
        $('#button_l2').removeClass("active");


    });

    $('#button_l2').click(function() {
        $.ajax({
            url: "parts/scroll-l-2.html",
            cache: false,
            success: function(html) {
                $("#slide-l").html(html);
            }
        });
        $('#button_l2').addClass("active");
        $('#button_l1').removeClass("active");
    });


    //сп

    $('#button_sp1').click(function() {
        $.ajax({
            url: "parts/scroll-sp-1.html",
            cache: false,
            success: function(html) {
                $("#slide-sp").html(html);
            }
        });
        $('#button_sp1').addClass("active");
        $('#button_sp2').removeClass("active");
        $('#button_sp3').removeClass("active");
        $('#button_sp4').removeClass("active");
        $('#button_sp5').removeClass("active");
        $('#button_sp6').removeClass("active");

    });

    $('#button_sp2').click(function() {
        $.ajax({
            url: "parts/scroll-sp-2.html",
            cache: false,
            success: function(html) {
                $("#slide-sp").html(html);
            }
        });
        $('#button_sp2').addClass("active");
        $('#button_sp1').removeClass("active");
        $('#button_sp3').removeClass("active");
        $('#button_sp4').removeClass("active");
        $('#button_sp5').removeClass("active");
        $('#button_sp6').removeClass("active");
    });

    $('#button_sp3').click(function() {
        $.ajax({
            url: "parts/scroll-sp-3.html",
            cache: false,
            success: function(html) {
                $("#slide-sp").html(html);
            }
        });
        $('#button_sp3').addClass("active");
        $('#button_sp2').removeClass("active");
        $('#button_sp1').removeClass("active");
        $('#button_sp4').removeClass("active");
        $('#button_sp5').removeClass("active");
        $('#button_sp6').removeClass("active");
    });

    $('#button_sp4').click(function() {
        $.ajax({
            url: "parts/scroll-sp-4.html",
            cache: false,
            success: function(html) {
                $("#slide-sp").html(html);
            }
        });
        $('#button_sp4').addClass("active");
        $('#button_sp2').removeClass("active");
        $('#button_sp3').removeClass("active");
        $('#button_sp1').removeClass("active");
        $('#button_sp5').removeClass("active");
        $('#button_sp6').removeClass("active");
    });

    $('#button_sp5').click(function() {
        $.ajax({
            url: "parts/scroll-sp-5.html",
            cache: false,
            success: function(html) {
                $("#slide-sp").html(html);
            }
        });
        $('#button_sp5').addClass("active");
        $('#button_sp2').removeClass("active");
        $('#button_sp3').removeClass("active");
        $('#button_sp4').removeClass("active");
        $('#button_sp1').removeClass("active");
        $('#button_sp6').removeClass("active");
    });

    $('#button_sp6').click(function() {
        $.ajax({
            url: "parts/scroll-sp-6.html",
            cache: false,
            success: function(html) {
                $("#slide-sp").html(html);
            }
        });
        $('#button_sp6').addClass("active");
        $('#button_sp2').removeClass("active");
        $('#button_sp3').removeClass("active");
        $('#button_sp4').removeClass("active");
        $('#button_sp5').removeClass("active");
        $('#button_sp1').removeClass("active");
    });
});
// конец аякс меню