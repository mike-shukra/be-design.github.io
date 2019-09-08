window.onload = function () {
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

//аякс меню

function buttonLoadClick(name, buttonId, url) {
        id = '#' + name;
        classId = '.' + name;
        // console.log(id + ', ' + buttonId + ', ' + url);
        $.ajax({
            url: url,
            cache: false,
            success: function (html) {
                $(id).html(html);
            }
        });
        buttons = $('div' + classId + ' .button_scroll').map(function(i, el) {
            return $(el);
        }).get();

        buttons.forEach(element => {
            // console.log(element);
            element.removeClass("active");
        });
        $(buttonId).addClass("active");
        // $('#button_kr2').removeClass("active");
}

// конец аякс меню

$(document).ready(function () {
    


    function onScroll() {
        var page_w = $(window).width();
        var scroll_h = $(window).scrollTop();
        if (scroll_h <= 800) {
            $('#side_menu').css("display", "none");
        }
        if (scroll_h > 800) {
            if (page_w > 1200) {

                $('#side_menu').css("display", "block");
                $('#side_menu').click(function () {
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

    $(window).bind("resize", function () {
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




    //прокрутка
    $("a").click(function () {
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;

        $('html, body').animate({ scrollTop: destination }, 500);

        return false;
    });
    //конец прокрутка
});




