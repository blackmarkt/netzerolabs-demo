import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
// import { dateLabels, cumEmissionsData } from '../../data/emissionsData'


const CumulativeTransactionsChart = ({ chartData }) => {

    // console.log('CHART (CUM) DATA ', chartData)

    const options = {
        chart: {
            type: 'line',
            backgroundColor: 'transparent',
            // margin: [50,20,50,100]
            // color: "#fff"
        },
        title: {
            text: 'Total tCO2e',
            floating:true,
            y:0,
            style: {
                fontSize: '0.7rem',
                color: '#616161',
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
                        [0, chartData.chart_data.chart_color],
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
                        color: '#616161',
                    },
                    // formatter: function() {
                    // return this.value;
                    // }
                }
        },
        xAxis: {
            type: 'datetime',
            // categories: dateLabels,
            lineWidth: 0,
            lineColor: 'black',
            gridLineWidth: 0,
            gridLineColor: 'transparent',
            tickLength: 0,
            accessibility: {
                rangeDescription: ''
            },
            labels: {
                step:1,
                style: {
                    fontSize: '0.5rem',
                    color: '#616161',
                },
                // rotation: -45
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:,.2f}</b>',
        },
        series: [{
                name: 'YTD tCO2e',
                className: 'line-class1',
                data: chartData.chart_data.chart_cum_data,
                color: 'white',
                type: 'area',
                shadow: {
                    color: chartData.chart_data.chart_color,
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
        }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        enabled:false
                    },
                    yAxis: {
                        title: {
                            text: null
                        }
                    },
                    subtitle: {
                        text: null
                    },
                    credits: {
                        enabled: false
                    }
                }
            }]
        }
    }

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
