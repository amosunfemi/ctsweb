$(function () {
    var e = "1.0.0";
    $(".version").text(e)
});
$(function () {
    $('[data-toggle="sidebar"]').click(function (e) {
        $sidebar = $("#sidebar");
        $(this).toggleClass("active");
        $sidebar.toggleClass("open");
        e.preventDefault()
    })
});
$(function () {
    if ($("html").hasClass("lt-ie9")) {
        $("#sidebar").css("min-height", $("#main").height())
    }
});
$(function () {
    $('.toolbar [data-toggle="collapse"]').on("click", function (e) {
        $icon = $(this).children(".icon");
        if ($(this).hasClass("collapsed")) {
            $icon.removeClass("icone-chevron-down").addClass("icone-chevron-up")
        } else {
            $icon.removeClass("icone-chevron-up").addClass("icone-chevron-down")
        }
        e.preventDefault()
    })
});
$(function () {
    $('[data-widget="refresh"]').on("click", function (e) {
        var t = $('<div class="widget-modal"><span class="spinner spinner1"></span></div>');
        var n = $(this).parents(".widget");
        n.append(t);
        setTimeout(function () {
            t.remove()
        }, 2e3);
        e.preventDefault()
    })
});
var $color = [];
$color["red"] = "#dc143c";
$color["teal"] = "#00A0B1";
$color["blue"] = "#2E8DEF";
$color["purple"] = "#A700AE";
$color["magenta"] = "#FF0097";
$color["lime"] = "#8CBF26";
$color["brown"] = "#A05000";
$color["pink"] = "#E671B8";
$color["orange"] = "#F09609";
$color["green"] = "#3A9548";
$color["yellow"] = "#E1B700";
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $(".totop").fadeIn()
        } else {
            $(".totop").fadeOut()
        }
    });
    $(".totop").click(function (e) {
        $("html, body").animate({scrollTop: 0}, 600);
        e.preventDefault()
    })
});
$(function () {
    $(".themer .header").on("click", function (e) {
        $body = $(this).parents(".themer").find(".body");
        $body.toggle();
        e.preventDefault
    })
});
$(function () {
    $(".themer .color li").on("click", function (e) {
        $style = "css/color/" + $(this).data("style") + ".css";
        $(".themer .color li").each(function () {
            $(this).removeClass("active")
        });
        $(this).addClass("active");
        $("#base-color").attr("href", $style)
    })
});
$(function () {
    $('[data-toggle="fixedheader"]').on("ifChecked", function (e) {
        $("#wrapper").addClass("fixed-header")
    });
    $('[data-toggle="fixedheader"]').on("ifUnchecked", function (e) {
        $("#wrapper").removeClass("fixed-header")
    })
})


//Begins Ember.js stuff

window.CTSApp = Ember.Application.create();