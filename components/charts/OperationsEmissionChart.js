import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, operationsOfficeData, operationsTransportData, 
        operationsSuppliesData, operationsMiscData } from '../../data/emissionsData'

const options = {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
        margin: [30,20,50,100]
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
        enabled: true,
        verticalAlign: 'top',
        style: {
            fontSize: '0.5rem',
            color: 'gray',
        }
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
                    [0, 'white'],
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
        min: 0,
        max:100, 
        lineColor: 'transparent',
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
    series: [
            {
                name: 'Office',
                className: 'line-class1',
                data: operationsOfficeData,
                color: '#3F4153',
                // type: 'area',
                shadow: {
                    color: '#3F4153',
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
            },
            {
                name: 'Transport',
                className: 'line-class1',
                data: operationsTransportData,
                color: '#2D3042',
                // type: 'area',
                shadow: {
                    color: '#2D3042',
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
            },
            {
                name: 'Supplies',
                className: 'line-class1',
                data: operationsSuppliesData,
                color: '#3C3E50',
                // type: 'area',
                shadow: {
                    color: '#3C3E50',
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
            },
            {
                name: 'Misc',
                className: 'line-class1',
                data: operationsMiscData,
                color: '#333333',
                // type: 'area',
                shadow: {
                    color: '#333333',
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
            }
    ]
}

const TransactionsChart = () => {

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'operations-daily-chart',
                                  style: { height: "100%" } }} 
            />
        </div>
    )
}

export default TransactionsChart
