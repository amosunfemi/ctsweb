$(function () {
    if (jQuery().plot) {
        var e = [
            {label: "Population", color: $color["blue"], shadowSize: 1, data: [
                ["Jan", 450],
                ["Feb", 550],
                ["Mar", 320],
                ["Apr", 700],
                ["May", 200],
                ["Jun", 330],
                ["Jul", 900],
                ["Aug", 140],
                ["Sep", 300],
                ["Nov", 500],
                ["Dec", 300]
            ]}
        ];
        if ($("#chart1").length !== 0) {
            $.plot($("#chart1"), e, {series: {bars: {show: true, barWidth: .5, align: "center", fill: .9}}, grid: {borderWidth: 0, hoverable: true}, tooltip: true, tooltipOpts: {content: "%x : %y"}, xaxis: {mode: "categories", tickLength: 0}})
        }
    }
});
$(function () {
    if (jQuery().plot) {
        var e = [], t = [];
        for (var n = 0; n < 14; n += .5) {
            e.push([n, Math.sin(n)]);
            t.push([n, Math.cos(n)])
        }
        if ($("#chart2").length !== 0) {
            var r = $.plot($("#chart2"), [
                {data: e, color: $color["pink"], label: "sin(x)"},
                {data: t, color: $color["magenta"], label: "cos(x)"}
            ], {series: {lines: {show: true}, points: {show: true}}, grid: {hoverable: true, clickable: true, borderWidth: 0}, yaxis: {min: -1.2, max: 1.2}, tooltip: true, tooltipOpts: {content: "%x : %y"}})
        }
    }
});
$(function () {
    if (jQuery().plot) {
        var e = [
            {label: "Visits", color: $color["yellow"], data: [
                ["Jan", Math.floor(Math.random() * 50 + 1)],
                ["Feb", Math.floor(Math.random() * 50 + 1)],
                ["Mac", Math.floor(Math.random() * 50 + 1)],
                ["Apr", Math.floor(Math.random() * 50 + 1)],
                ["Mei", Math.floor(Math.random() * 50 + 1)]
            ]},
            {label: "Hit", color: $color["green"], data: [
                ["Jan", Math.floor(Math.random() * 50 + 1)],
                ["Feb", Math.floor(Math.random() * 50 + 1)],
                ["Mac", Math.floor(Math.random() * 50 + 1)],
                ["Apr", Math.floor(Math.random() * 50 + 1)],
                ["Mei", Math.floor(Math.random() * 50 + 1)]
            ]}
        ];
        if ($("#chart3").length !== 0) {
            $.plot($("#chart3"), e, {series: {lines: {show: true, fill: .7}, points: {show: true}}, grid: {borderWidth: 0, hoverable: true}, tooltip: true, tooltipOpts: {content: "%x : %y"}, xaxis: {mode: "categories", tickLength: 0}})
        }
    }
});
$(function () {
    if (jQuery().plot) {
        var e = [
            {label: "Series 1", data: Math.floor(Math.random() * 100) + 1, color: $color["red"]},
            {label: "Series 2", data: Math.floor(Math.random() * 100) + 1, color: $color["blue"]},
            {label: "Series 3", data: Math.floor(Math.random() * 100) + 1, color: $color["lime"]},
            {label: "Series 4", data: Math.floor(Math.random() * 100) + 1, color: $color["magenta"]},
            {label: "Series 5", data: Math.floor(Math.random() * 100) + 1, color: $color["green"]}
        ];
        if ($("#chart5").length !== 0) {
            $.plot($("#chart5"), e, {series: {pie: {show: true}}})
        }
    }
});
$(function () {
    if (jQuery().plot) {
        var e = [
            {label: "Series 1", data: Math.floor(Math.random() * 100) + 1, color: $color["teal"]},
            {label: "Series 2", data: Math.floor(Math.random() * 100) + 1, color: $color["red"]},
            {label: "Series 3", data: Math.floor(Math.random() * 100) + 1, color: $color["pink"]},
            {label: "Series 4", data: Math.floor(Math.random() * 100) + 1, color: $color["yellow"]},
            {label: "Series 5", data: Math.floor(Math.random() * 100) + 1, color: $color["brown"]}
        ];
        if ($("#chart6").length !== 0) {
            $.plot($("#chart6"), e, {series: {pie: {innerRadius: .5, show: true}}, grid: {hoverable: true, clickable: true}})
        }
    }
});
$(function () {
    if (jQuery().plot) {
        var e = [], t = 100;

        function n() {
            if (e.length > 0)e = e.slice(1);
            while (e.length < t) {
                var n = e.length > 0 ? e[e.length - 1] : 50;
                var r = n + Math.random() * 10 - 5;
                if (r < 0)r = 0;
                if (r > 100)r = 100;
                e.push(r)
            }
            var i = [];
            for (var s = 0; s < e.length; ++s)i.push([s, e[s]]);
            return i
        }

        var r = 600;
        var i = {series: {lines: {show: true, fill: .5}, shadowSize: 0}, yaxis: {min: 0, max: 100}, xaxis: {show: false}, grid: {borderWidth: 0, hoverable: true}};
        if ($("#chart4").length !== 0) {
            var s = $.plot($("#chart4"), [n()], i);

            function o() {
                s.setData([n()]);
                s.draw();
                setTimeout(o, r)
            }

            o()
        }
    }
})