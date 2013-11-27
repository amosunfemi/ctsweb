(function () {
    var e;
    var t = function () {
    };
    var n = ["assert", "clear", "count", "debug", "dir", "dirxml", "error", "exception", "group", "groupCollapsed", "groupEnd", "info", "log", "markTimeline", "profile", "profileEnd", "table", "time", "timeEnd", "timeStamp", "trace", "warn"];
    var r = n.length;
    var i = window.console = window.console || {};
    while (r--) {
        e = n[r];
        if (!i[e]) {
            i[e] = t
        }
    }
})();
$(function () {
    if (jQuery().tooltip) {
        $("input, textarea").placeholder()
    }
});
$(function () {
    if (jQuery().tooltip) {
        $('[rel="tooltip"]').tooltip()
    }
});
$(function () {
    if (jQuery().perfectScrollbar) {
        $("#demo1").perfectScrollbar();
        $("#demo2").perfectScrollbar();
        $("#demo3").perfectScrollbar();
        $("#demo4").perfectScrollbar();
        $("#demo5").perfectScrollbar()
    }
});
$(function () {
    if (jQuery().popover) {
        $('[rel="popover"]').popover({trigger: "hover"})
    }
});
$(function () {
    if (jQuery().snippet) {
        $("pre.php").snippet("php", {style: "bright"})
    }
});
$(function () {
    if (jQuery().iCheck) {
        $('input[type="checkbox"], input[type="radio"]').not(".nostyle").iCheck({checkboxClass: "icheckbox_minimal-grey", radioClass: "iradio_minimal-grey", increaseArea: "20%"})
    }
});
$(function () {
    if (jQuery().filestyle) {
        $(":file").filestyle({icon: true})
    }
});
$(function () {
    if (jQuery().tagit) {
        $("#tags").tagit()
    }
});
$(function () {
    if (jQuery().mask) {
        $('[input-mask="date"]').mask("99/99/9999");
        $('[input-mask="phone"]').mask("(999) 999-9999");
        $('[input-mask="tin"]').mask("99-9999999");
        $('[input-mask="ssn"]').mask("999-99-9999")
    }
});
$(function () {
    if (jQuery().formwizard) {
        $("#formwizard1").formwizard({disableUIStyles: true, focusFirstInput: true});
        $("#formwizard2").formwizard({disableUIStyles: true, validationEnabled: true})
    }
});
$(function () {
    if (jQuery().select2) {
        $("#select2_1").select2({placeholder: "Select a State"});
        $("#select2_2").select2({placeholder: "Select a State", allowClear: true});
        $("#select2_3").select2({minimumInputLength: 2});
        $("#select2_4").select2({tags: ["red", "green", "blue", "yellow", "purple", "brown"]})
    }
});
$(function () {
    if (jQuery().minicolors) {
        $("#minicolor_1").minicolors({theme: "default"});
        $("#minicolor_2").minicolors({theme: "bootstrap"});
        $("#minicolor_3").minicolors({textfield: false});
        $("#minicolor_4").minicolors({control: "wheel"})
    }
});
$(function () {
    if (jQuery().timepicker) {
        $("#timepicker_1").timepicker();
        $("#timepicker_2").timepicker({minuteStep: 1, template: "modal", showSeconds: true, showMeridian: false})
    }
});
$(function () {
    if (jQuery().cleditor) {
        $(".cleditor").cleditor({width: "100%", height: "100%"})
    }
});
$(function () {
    if (jQuery().autosize) {
        $("textarea.autosize").autosize()
    }
});
$(function () {
    if (jQuery().validate) {
        jQuery.validator.setDefaults({errorElement: "span", errorClass: "help-block", highlight: function (e, t, n) {
            $(e).parents(".control-group").addClass("error")
        }, unhighlight: function (e, t, n) {
            $(e).parents(".control-group").removeClass("error")
        }});
        $("#form_validate_inline").validate()
    }
});
$(function () {
    if (jQuery().validationEngine) {
        $("#form_validate_tooltip").validationEngine()
    }
});
$(function () {
    if (jQuery().daterangepicker) {
        $(".daterange.right").daterangepicker({opens: "left"});
        $(".daterange").daterangepicker();
        $("#reportrange").daterangepicker({ranges: {Today: [moment(), moment()], Yesterday: [moment().subtract("days", 1), moment().subtract("days", 1)], "Last 7 Days": [moment(), moment().add({days: -6})], "Last 30 Days": [moment().add({days: -29}), moment()]}}, function (e, t) {
            $("#reportrange #rangedate").html(e.format("MMMM d, YYYY") + " - " + t.format("MMMM d, YYYY"))
        })
    }
});
$(function () {
    if (jQuery().tabs) {
        $("#tabs1").tabs();
        $("#tabs2").tabs()
    }
});
$(function () {
    if (jQuery().accordion) {
        $("#accordion_1, #accordion_2").accordion({heightStyle: "content"})
    }
});
$(function () {
    if (jQuery().datepicker) {
        $("#datepicker1").datepicker();
        $("#datepicker2").datepicker({showButtonPanel: true});
        $("#datepicker3").datepicker({numberOfMonths: 3, showButtonPanel: true})
    }
});
$(function () {
    if (jQuery().timepicker) {
        $("#timepicker1").timepicker();
        $("#timepicker2").timepicker({showSecond: true})
    }
});
$(function () {
    if (jQuery().slider) {
        $("#slider1").slider({range: "min", value: 37, min: 1, max: 700, start: function (e, t) {
            $(this).find(".ui-slider-handle.ui-state-hover").append('<span class="ui-slider-tooltip">' + t.value + "</span>")
        }, slide: function (e, t) {
            $(this).find(".ui-slider-tooltip").text(t.value)
        }, stop: function (e, t) {
            $(this).find(".ui-slider-tooltip").remove()
        }});
        $("#slider2").slider({range: true, min: 0, max: 500, values: [75, 300], start: function (e, t) {
            $(this).find(".ui-slider-handle.ui-state-hover").append('<span class="ui-slider-tooltip">' + t.value + "</span>")
        }, slide: function (e, t) {
            $(this).find(".ui-slider-tooltip").text(t.value)
        }, stop: function (e, t) {
            $(this).find(".ui-slider-tooltip").remove()
        }});
        $("#slider3").slider({range: "max", min: 1, max: 10, value: 2, start: function (e, t) {
            $(this).find(".ui-slider-handle.ui-state-hover").append('<span class="ui-slider-tooltip">' + t.value + "</span>")
        }, slide: function (e, t) {
            $(this).find(".ui-slider-tooltip").text(t.value)
        }, stop: function (e, t) {
            $(this).find(".ui-slider-tooltip").remove()
        }});
        $("#eq > span").each(function () {
            var e = parseInt($(this).text(), 10);
            $(this).empty().slider({value: e, range: "min", animate: true, orientation: "vertical"})
        })
    }
});
$(function () {
    if (jQuery().autocomplete) {
        var e = ["ActionScript", "AppleScript", "Asp", "BASIC", "C", "C++", "Clojure", "COBOL", "ColdFusion", "Erlang", "Fortran", "Groovy", "Haskell", "Java", "JavaScript", "Lisp", "Perl", "PHP", "Python", "Ruby", "Scala", "Scheme"];
        $("#autocomplete").autocomplete({source: e})
    }
});
$(function () {
    if (jQuery().dialog) {
        $("#dialog1").dialog({autoOpen: false});
        $("#dialog2").dialog({autoOpen: false, modal: true});
        $("#dialog3").dialog({autoOpen: false, show: "blind", hide: "explode"});
        $("#btn-dialog").click(function () {
            $("#dialog1").dialog("open")
        });
        $("#btn-dialogmodal").click(function () {
            $("#dialog2").dialog("open");
        });
        $("#btn-dialoganim").click(function () {
            $("#dialog3").dialog("open")
        })
    }
});
$(function () {
    $(".column").sortable({connectWith: ".column", placeholder: "widget-placeholder", handle: ".handle"})
});
$(function () {
    if (jQuery().fullCalendar) {
        var e = new Date;
        var t = e.getDate();
        var n = e.getMonth();
        var r = e.getFullYear();
        $("#calendar").fullCalendar({header: {left: "prev,next today", center: "title", right: "month,agendaWeek,agendaDay"}, buttonText: {prev: "«", next: "»", prevYear: " << ", nextYear: " >> ", today: "today", month: "month", week: "week", day: "day"}, editable: true, events: [
            {title: "All Day Event", start: new Date(r, n, 1)},
            {title: "Long Event", start: new Date(r, n, t - 5), end: new Date(r, n, t - 2)},
            {id: 999, title: "Repeating Event", start: new Date(r, n, t - 3, 16, 0), allDay: false},
            {id: 999, title: "Repeating Event", start: new Date(r, n, t + 4, 16, 0), allDay: false},
            {title: "Meeting", start: new Date(r, n, t, 10, 30), allDay: false},
            {title: "Lunch", start: new Date(r, n, t, 12, 0), end: new Date(r, n, t, 14, 0), allDay: false},
            {title: "Birthday Party", start: new Date(r, n, t + 1, 19, 0), end: new Date(r, n, t + 1, 22, 30), allDay: false},
            {title: "Click for Google", start: new Date(r, n, 28), end: new Date(r, n, 29), url: "http://google.com/"}
        ]});
        $("#external-events div.external-event").each(function () {
            var e = {title: $.trim($(this).text())};
            $(this).data("eventObject", e);
            $(this).draggable({zIndex: 999, revert: true, revertDuration: 0})
        });
        $("#calendar_events").fullCalendar({header: {left: "prev,next today", center: "title", right: "month,agendaWeek,agendaDay"}, buttonText: {prev: "«", next: "»", prevYear: " << ", nextYear: " >> ", today: "today", month: "month", week: "week", day: "day"}, editable: true, droppable: true, drop: function (e, t) {
            var n = $(this).data("eventObject");
            var r = $.extend({}, n);
            r.start = e;
            r.allDay = t;
            $("#calendar_events").fullCalendar("renderEvent", r, true);
            if ($("#drop-remove").is(":checked")) {
                $(this).remove()
            }
        }})
    }
});
$(function () {
    if (jQuery().shuffle) {
        $(".portfolio-filter li").on("click", function (e) {
            var t = $(this), n = $(".gallery");
            n.shuffle(t.data("group"));
            e.preventDefault()
        });
        $(window).load(function () {
            $(".gallery").shuffle()
        })
    }
});
$(function () {
    if (jQuery().prettyPhoto) {
        $("a[rel^='prettyPhoto']").prettyPhoto({allow_resize: true, social_tools: false})
    }
});
$(function () {
    if (jQuery().dataTable) {
        $("#datatable1").dataTable({bProcessing: true, sAjaxSource: "table-dynamic.txt", aoColumns: [null, null, null, null, null], fnRowCallback: function (e, t, n, r) {
            $("td:eq(1)", e).addClass("hidden-phone");
            $("td:eq(3)", e).addClass("hidden-phone");
            $("td:eq(4)", e).addClass("hidden-phone")
        }});
        var e = $("#datatable2").dataTable({bProcessing: true, sAjaxSource: "table-dynamic-rich.txt", aoColumns: [
            {bSortable: false},
            null,
            null,
            null,
            null,
            {bSortable: false}
        ], fnRowCallback: function (e, t, n, r) {
            $("td:eq(2)", e).addClass("hidden-phone");
            $("td:eq(3)", e).addClass("hidden-phone");
            $("td:eq(4)", e).addClass("hidden-phone");
            $('td input[type="checkbox"]', e).iCheck({checkboxClass: "icheckbox_minimal-grey", radioClass: "iradio_minimal-grey", increaseArea: "20%"})
        }});
        $('thead input[type="checkbox"]').on("ifChecked", function (e) {
            $('tbody input[type="checkbox"]').each(function (e) {
                $(this).iCheck("check")
            })
        });
        $('thead input[type="checkbox"]').on("ifUnchecked", function (e) {
            $('tbody input[type="checkbox"]').each(function (e) {
                $(this).iCheck("uncheck")
            })
        })
    }
})