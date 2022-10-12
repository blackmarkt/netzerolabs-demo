import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, cumEmissionsData } from '../../data/emissionsData'

// const dateLabels = ["9/15/22", "9/16/22", "9/17/22", "9/18/22", "9/19/22", "9/20/22", "9/21/22", "9/22/22", "9/23/22", 
//                     "9/24/22", "9/25/22", "9/26/22", "9/27/22", "9/28/22", "9/29/22", "9/30/22", "10/1/22", "10/2/22", 
//                     "10/3/22", "10/4/22", "10/5/22", "10/6/22", "10/7/22", "10/8/22", "10/9/22", "10/10/22"]
// const cumEmissionsData = [12.6564, 25.77489, 38.99566, 50.56459, 61.94669, 73.437, 84.4383, 95.62127, 106.82022, 117.91228, 
//                           128.98445, 140.39663, 152.53957, 163.63663, 174.93221, 187.19107, 198.77145, 210.41021, 223.48163, 
//                           235.33432, 247.02788, 259.05455, 270.85813, 282.65897, 293.34428, 304.57818]

const options = {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
        margin: [50,20,50,100]
        // color: "#fff"
    },
    title: {
        text: '',
        style: {
        color: 'rgb(255,255,255,0.9)',
        }
    },
    credits: {
        enabled: false
    },
    exporting: {
        enabled: false
    },
    legend: {
        enabled: false
    },
    plotOptions: {
        area: {
            fillColor: {
                linearGradient: {
                    x1: 0,
                    y1: 0,
                    x2: 1,
                    y2: 1
                },
                stops: [
                    [0, '#61668B'],
                    [1, 'transparent']
                ]
            },
            marker: {
                radius: 3
            },
            lineWidth: 1,
            states: {
                hover: {
                    lineWidth: 1
                }
            },
            threshold: null
        }
    },
    yAxis: {
        lineWidth: 0,
            lineColor: 'black',
            gridLineWidth: 0,
            gridLineColor: 'transparent',
            title: {
                text: 'tCO2'
            },
            labels: {
                style: {
                    fontSize: '0.6rem',
                    color: 'darkgray',
                },
                formatter: function() {
                return this.value;
                }
            }
    },
    xAxis: {
        // type: 'datetime',
        categories: dateLabels,
        lineWidth: 0,
        lineColor: 'black',
        gridLineWidth: 0,
        gridLineColor: 'transparent',
        tickLength: 0,
        accessibility: {
            rangeDescription: ''
        },
        labels: {
            step:4,
            style: {
                fontSize: '0.5rem',
                color: 'darkgray',
            },
            // rotation: -45
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y:,.2f}</b>',
    },
    series: [{
            name: 'YTD tCO2',
            className: 'line-class1',
            data: cumEmissionsData,
            color: 'white',
            type: 'area',
            shadow: {
                color: '#61668B',
                    width: 12,
                    offsetX: 0,
                    offsetY: 0
            },
            lineWidth: 1.2,
            animation: {
                // defer: 1200,
                duration: 1000
            },
            marker: {
                enabled: false
            }
    }]
}

const CumulativeTransactionsChart = () => {

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'cumulative-transactions-chart',
                                  style: { height: "280px" } }} 
            />
        </div>
    )
}

export default CumulativeTransactionsChart
