import React, { useLayoutEffect, useState } from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, operationsOfficeData, operationsTransportData, 
        operationsSuppliesData, operationsMiscData } from '../../data/emissionsData'


const TransactionsChart = ({ chartData }) => {
    
    function getPieColors(base='#61668B') {
        if (typeof Highcharts === 'object') {
            var colors = [],
                // base = ,
                i;
    
            for (i = 0; i < 10; i += 1) {
                // Start out with a darkened base color (negative brighten), and end
                // up with a much brighter color
                colors.push(Highcharts.color(chartData.chart_data.chart_color).brighten((i - 3) / 8).get());
            }
            return colors;
        }
    };

    var chartDataSeries = (function() {
        if (typeof Highcharts === 'object') {
            var pieColors = getPieColors()
            var dataArr = []
            let i
            for (i = 0; i < chartData.chart_data.operations_break.length; i += 1) {
                dataArr.push({
                    name: chartData.chart_data.operations_break[i].name,
                    className: 'line-class1',
                    data:  chartData.chart_data.operations_break[i].data,
                    color:  pieColors[i],
                    type: 'area',
                    shadow: {
                        color:  pieColors[i],
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
                })
            }
            return dataArr;
        }
    }())

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
            enabled: true,
            verticalAlign: 'top',
            padding:30,
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
                        [0, chartData.chart_data.chart_color],
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
                    color: '#616161',
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
                    color: '#616161',
                },
                // rotation: -45
            }
        },
        tooltip: {
            pointFormat: '<b>{point.y:,.2f}</b>',
        },
        // series: [
        //         {
        //             name: chartData.chart_data.operations_break[0].name,
        //             className: 'line-class1',
        //             data:  chartData.chart_data.operations_break[0].data,
        //             color: chartData.chart_data.chart_color,
        //             type: 'area',
        //             shadow: {
        //                 color: chartData.chart_data.chart_color,
        //                     width: 12,
        //                     offsetX: 0,
        //                     offsetY: 0
        //             },
        //             lineWidth: 1.2,
        //             animation: {
        //                 // defer: 1200,
        //                 duration: 1000
        //             },
        //             marker: {
        //                 enabled: false
        //             }
        //         },
        //         {
        //             name: chartData.chart_data.operations_break[1].name,
        //             className: 'line-class1',
        //             data:  chartData.chart_data.operations_break[1].data,
        //             color:  Highcharts.color(chartData.chart_data.chart_color).brighten((1 - 3) / 14).get(),
        //             type: 'area',
        //             shadow: {
        //                 color: Highcharts.color(chartData.chart_data.chart_color).brighten((1 - 3) / 14).get(),
        //                     width: 12,
        //                     offsetX: 0,
        //                     offsetY: 0
        //             },
        //             lineWidth: 1.2,
        //             animation: {
        //                 // defer: 1200,
        //                 duration: 1000
        //             },
        //             marker: {
        //                 enabled: false
        //             }
        //         },
        //         {
        //             name: chartData.chart_data.operations_break[2].name,
        //             className: 'line-class1',
        //             data:  chartData.chart_data.operations_break[2].data,
        //             color:  Highcharts.color(chartData.chart_data.chart_color).brighten((2 - 3) / 14).get(),
        //             type: 'area',
        //             shadow: {
        //                 color:  Highcharts.color(chartData.chart_data.chart_color).brighten((2 - 3) / 14).get(),
        //                     width: 12,
        //                     offsetX: 0,
        //                     offsetY: 0
        //             },
        //             lineWidth: 1.2,
        //             animation: {
        //                 // defer: 1200,
        //                 duration: 1000
        //             },
        //             marker: {
        //                 enabled: false
        //             }
        //         },
        //         {
        //             name: chartData.chart_data.operations_break[3].name,
        //             className: 'line-class1',
        //             data:  chartData.chart_data.operations_break[3].data,
        //             color:  Highcharts.color(chartData.chart_data.chart_color).brighten((3 - 3) / 14).get(),
        //             type: 'area',
        //             shadow: {
        //                 color:  Highcharts.color(chartData.chart_data.chart_color).brighten((3 - 3) / 14).get(),
        //                     width: 12,
        //                     offsetX: 0,
        //                     offsetY: 0
        //             },
        //             lineWidth: 1.2,
        //             animation: {
        //                 // defer: 1200,
        //                 duration: 1000
        //             },
        //             marker: {
        //                 enabled: false
        //             }
        //         }
        // ]
        series: chartDataSeries
    }

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
