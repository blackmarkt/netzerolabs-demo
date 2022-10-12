import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, emissionsData } from '../../data/emissionsData'

// const dateLabels = ["9/15/22", "9/16/22", "9/17/22", "9/18/22", "9/19/22", "9/20/22", "9/21/22", "9/22/22", "9/23/22", 
//                     "9/24/22", "9/25/22", "9/26/22", "9/27/22", "9/28/22", "9/29/22", "9/30/22", "10/1/22", "10/2/22", 
//                     "10/3/22", "10/4/22", "10/5/22", "10/6/22", "10/7/22", "10/8/22", "10/9/22", "10/10/22"]
// const emissionsData = [12.6564, 13.11849, 13.22077, 11.56893, 11.3821, 11.49031, 11.0013, 11.18297, 11.19895, 11.09206, 
//                        11.07217, 11.41218, 12.14294, 11.09706, 11.29558, 12.25886, 11.58038, 11.63876, 13.07142, 11.85269, 
//                        11.69356, 12.02667, 11.80358, 11.80084, 10.68531, 11.2339]

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
                    x2: 0,
                    y2: 1
                },
                stops: [
                    [0, '#61668B'],
                    [1, 'transparent']
                ]
            },
            marker: {
                radius: 2
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
            name: 'tCO2',
            className: 'line-class1',
            data: emissionsData,
            color: 'white',
            // type: 'area',
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

const TransactionsChart = () => {

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'transactions-chart',
                                  style: { height: "280px" } }} 
            />
        </div>
    )
}

export default TransactionsChart
