$(function () {
    $('#container').highcharts({
        chart: {
            type: 'areaspline'
        },
        title: {
            text: 'Avg. salary, public elementary and secondary school teachers'
        },
        legend: {
            layout: 'vertical',
            align: 'left',
            verticalAlign: 'top',
            floating: true,
            borderWidth: 1,
            backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF'
        },
        xAxis: {
            categories: [
                '1969-70',
                '1979-80',
                '1989-90',
                '1990-2000',
                '2009-10',
                '2011-12',
                '2012-13'
            ]
        },
        yAxis: {
            title: {
                text: 'Estimated avg. teacher salary'
            }
        },
        tooltip: {
            shared: true,
            valuePrefix: '$',
            valueSuffix: ' dollars'
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            }
        },
        series: [{
            name: 'Alaska',
            data: [64675, 81088, 78626, 63495, 63696, 63464, 65468]
        }, {
            name: 'Alabama',
            data: [52830, 47592, 57152, 57133, 58925, 56340, 56383]
        }]
    });
});
