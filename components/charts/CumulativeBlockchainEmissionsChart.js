import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, dateUnixLabels, dateUnixCelo, cumEmissionsData, celoCumEmissionData, 
    combineUnixDataArr, combineUnixFauxDataArr } from '../../data/emissionsData'
// import { blockchartData, defaultChainEmissionsData } from '../../data/blockchartData'


const CumulativeBlockchainEmissionsChart = ({ chartData }) => {

    var chartDataSeries = (function() {
        if (typeof Highcharts === 'object') {
            var dataArr = []
            for (let i = 0; i < chartData.length; i += 1) {
                // if (chartData[i].chain != 'Bitcoin') {
                    dataArr.push({
                        name: chartData[i].chain,
                        className: 'line-class1',
                        data:  chartData[i].chart_data.chart_cum_data,
                        color: chartData[i].chart_data.chart_color,
                        // type: 'area',
                        shadow: {
                            color:chartData[i].chart_data.chart_color,
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
                        },
                        fillColor: {
                            linearGradient:  { 
                                x1: 0,
                                y1: 0,
                                x2: 0.8,
                                y2: 1},
                            stops: [
                                [0, chartData[i].chart_data.chart_color],
                                [1, 'transparent']
                            ]
                        },
                    })
                // }
            }
            return dataArr;
        }
    }())

    const options = {
        chart: {
            // type: 'area',
            backgroundColor: 'transparent',
            // margin: [20,20,50,60]
            // color: "#fff"
        },
        title: {
            text: 'Cumulative tCO2e (per Tx)',
            floating:true,
            y:10,
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
            enabled: true,
            verticalAlign: 'bottom',
            align:'center',
            padding:-10,
            style: {
                fontSize: '0.3rem',
                color: '#616161',
            }
        },
        plotOptions: {
            area: {
                stacking: 'normal',
            },
            // series: {
            //     stickyTracking: false,
            //     trackByArea: true
            // }
        },
        // plotOptions: {
        //     area: {
        //         fillColor: {
        //             linearGradient: {
        //                 x1: 0,
        //                 y1: 0,
        //                 x2: 1,
        //                 y2: 1
        //             },
        //             stops: [
        //                 [0, '#61668B'],
        //                 [1, 'transparent']
        //             ]
        //         },
        //         marker: {
        //             radius: 3
        //         },
        //         lineWidth: 1,
        //         states: {
        //             hover: {
        //                 lineWidth: 1
        //             }
        //         },
        //         threshold: null
        //     }
        // },
        yAxis: {
            type: 'logarithmic',
            min:1,
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
                    // return Highcharts.numberFormat(this.value);
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
                // step:4,
                style: {
                    fontSize: '0.5rem',
                    color: '#616161',
                },
                // rotation: -45
            }
        },
        tooltip: {
            pointFormat: '<b>{series.name}: {point.y:,.0f}</b>',
        },
        series:chartDataSeries,
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
                        // labels: {
                        //     align: 'left',
                        //     x: 0,
                        //     y: -5
                        // },
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
                containerProps={{ className: 'cumulative-blockchain-emissions-chart',
                                  style: { height: "360px" } }} 
            />
        </div>
    )
}

export default CumulativeBlockchainEmissionsChart
