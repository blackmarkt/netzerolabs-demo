import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, emissionsData } from '../../data/emissionsData'

const options = {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
        margin: [50,20,50,100]
        // color: "#fff"
    },
    title: {
        text: 'Daily tCO2',
        floating:true,
        y:40,
        style: {
            fontSize: '0.7rem',
            color: 'gray',
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
            name: 'Daily tCO2',
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
