import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'


const CarbonOffsetBreakdownChart = ({ chartData }) => {

    // function pieData(chainData) {
    //     if (typeof Highcharts === 'object') {
    //         var data = [],
    //         i;
    //         for (i = 0; i < chainData.length; i += 1) {
    //             if (chainData[i].emissions != null && chainData[i].chain != 'Bitcoin') {
    //                 data.push({name: chainData[i].chain, 
    //                            y: parseInt(chainData[i].emissions_stats.sum.replace(/,/g, '')),
    //                            color: chainData[i].chart_data.chart_color});
    //             }
    //         }
    //         return data;
    //     }
    // }
    var carbonOffsetData = [
        {name: 'Conservation', y:1,
        shadow: {
            color: 'limegreen',
                width: 30,
                offsetX: 0,
                offsetY: 0
        },
        color: {
            linearGradient:  { 
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 1},
            stops: [
                [0.2, 'limegreen'],
                [1, 'transparent']
            ]
        },
        },
        {name: 'Mineralization', y:1, 
        shadow: {
            color: 'aqua',
                width: 30,
                offsetX: 0,
                offsetY: 0
        },
        color: {
            linearGradient:  { 
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 1},
            stops: [
                [0.2, 'aqua'],
                [1, 'transparent']
            ]
        },
        },
        {name: 'DAC', y:1,
        shadow: {
            color: '#F8F8FF',
                width: 30,
                offsetX: 0,
                offsetY: 0
        },
        color: {
            linearGradient:  { 
                x1: 0,
                y1: 1,
                x2: 1,
                y2: 0},
            stops: [
                [0.2, '#F8F8FF'],
                [1, 'transparent']
            ]
        },
        },
        {name: 'Biochar', y:1,
        shadow: {
            color: '#2E2E2E',
                width: 30,
                offsetX: 0,
                offsetY: 0
        },
        color: {
            linearGradient:  { 
                x1: 1,
                y1: 0,
                x2: 1,
                y2: 1},
            stops: [
                [0.4, '#2E2E2E'],
                [1, 'transparent']
            ]
        },
        },
        {name:'Policy', y:1,
        shadow: {
            color: 'gray',
                width: 30,
                offsetX: 0,
                offsetY: 0
        },
        color: {
            linearGradient:  { 
                x1: 1,
                y1: 0,
                x2: 1,
                y2: 1},
            stops: [
                [0.4, 'gray'],
                [1, 'transparent']
            ]
        },
        },
        // {
        //     name: 'Other',
        //     y: 3.77,
        //     dataLabels: {
        //         enabled: false
        //     }
        // }
    ]

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent',
            margin: [40,0,20,0],
            padding: [30,0,30,0]
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            text: '',
            marginTop:-0,
            style: {
                fontSize: '0.75rem',
                color: '#616161'
            },
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
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
                borderWidth:0,
                opacity:0.8,
                // shadow: true,
                // borderColor:'#FFFFFF',
                // startAngle: -90,
                // endAngle: 90,
                // center: ['50%', '75%'],
                size: '110%',
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    format: '<b>{point.name}</b><br>0%',
                    distance: -30,
                    style: {
                        textOutline: false,
                        color: 'gray',
                        fontSize:'0.7rem', 
                    },
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'tCO2e %',
            size: '120%',
            innerSize: '30%',
            data: carbonOffsetData
        }]
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'carbon-offset-pie-chart',
                                  style: { height: "260px" } }} 
            />
        </div>
    )
}

export default CarbonOffsetBreakdownChart