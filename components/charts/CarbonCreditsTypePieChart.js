import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CarbonCreditsTypePieChart = ({ chartData }) => {

    var colorGradientArr = (function () {
        let dataArr = chartData
        if (typeof Highcharts === 'object') {
            for (let i=0; i<chartData.length; i+=1) {
                dataArr[i]['color'] = {
                    linearGradient:  { 
                        x1: 0,
                        y1: 0,
                        x2: 1,
                        y2: 1},
                    stops: [
                        [0, Highcharts.color('aquamarine').brighten((i - 3) / 12).get()],
                        // [0, dataArr[i].color],
                        [1, 'transparent']
                    ]
                }
            }
            console.log('COLOR ', dataArr)
            return dataArr
        }
    }());

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent',
            margin: [30,20,20,20]
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
            pointFormat: '{point.type}: <b>{point.percentage:.1f}%</b>'
            // pointFormat: '{series.name}: <b>0%</b>'
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
                // colors: pieColors,
                borderWidth:0,
                // opacity:0.7,
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b><br>0%',
                    format: '<b>{point.type}</b><br>{point.percentage:.1f} %',
                    distance: -40,
                    style: {
                        textOutline: false,
                        color:'gray',
                        fontSize:'0.6rem',
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
            size: '100%',
            innerSize: '40%',
            data: colorGradientArr,
            // data: chartData.chart_data.operations_data
        }]
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'carbon-pie-chart',
                                  style: { height: "300px" } }} 
            />
        </div>
    )
}

export default CarbonCreditsTypePieChart