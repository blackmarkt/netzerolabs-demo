import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import { dateLabels, emissionsData } from '../../data/emissionsData'

// Data retrieved from https://netmarketshare.com/
// Make monochrome colors
var pieColors = (function () {
    if (typeof Highcharts === 'object') {
        var colors = [],
            base = '#61668B',
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.color(base).brighten((i - 3) / 14).get());
        }
        return colors;
    }
}());

const options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: 'transparent',
        margin: [40,40,40,40]
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    title: {
        text: ''
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            colors: pieColors,
            borderWidth:0,
            opacity:0.8,
            dataLabels: {
                enabled: true,
                format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                distance: -50,
                filter: {
                    property: 'percentage',
                    operator: '>',
                    value: 4
                }
            }
        }
    },
    series: [{
        name: 'tCO2 %',
        size: '100%',
        innerSize: '40%',
        data: [
            { name: 'Chrome', y: 74.03 },
            { name: 'Edge', y: 12.66 },
            { name: 'Firefox', y: 4.96 },
            { name: 'Safari', y: 2.49 },
            { name: 'Internet Explorer', y: 2.31 },
            { name: 'Other', y: 3.398 }
        ]
    }]
}


const OperationsBreakdownChart = () => {

    // useEffect(() => {
    //     console.log(pieColors)
    // });

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'operations-pie-chart',
                                  style: { height: "100%" } }} 
            />
        </div>
    )
}

export default OperationsBreakdownChart