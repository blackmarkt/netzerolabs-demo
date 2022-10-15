import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, dateUnixLabels, dateUnixCelo, cumEmissionsData, celoCumEmissionData, 
    combineUnixDataArr, combineUnixFauxDataArr } from '../../data/emissionsData'
// import { blockchartData, defaultChainEmissionsData } from '../../data/blockchartData'


// const options = {
//     chart: {
//         type: 'line',
//         backgroundColor: 'transparent',
//         margin: [30,20,30,100]
//         // color: "#fff"
//     },
//     title: {
//         text: 'Total tCO2',
//         floating:true,
//         y:40,
//         style: {
//             fontSize: '0.7rem',
//             color: '#616161',
//         }
//     },
//     credits: {
//         enabled: false
//     },
//     exporting: {
//         enabled: false
//     },
//     legend: {
//         enabled: false,
//         padding:30,
//         style: {
//             fontSize: '0.5rem',
//             color: 'gray',
//         }
//     },
//     // plotOptions: {
//     //     area: {
//     //         fillColor: {
//     //             linearGradient: {
//     //                 x1: 0,
//     //                 y1: 0,
//     //                 x2: 1,
//     //                 y2: 1
//     //             },
//     //             stops: [
//     //                 [0, '#61668B'],
//     //                 [1, 'transparent']
//     //             ]
//     //         },
//     //         marker: {
//     //             radius: 3
//     //         },
//     //         lineWidth: 1,
//     //         states: {
//     //             hover: {
//     //                 lineWidth: 1
//     //             }
//     //         },
//     //         threshold: null
//     //     }
//     // },
//     yAxis: {
//         lineWidth: 0,
//             lineColor: 'black',
//             gridLineWidth: 0,
//             gridLineColor: 'transparent',
//             title: {
//                 text: 'tCO2'
//             },
//             labels: {
//                 style: {
//                     fontSize: '0.6rem',
//                     color: '#616161',
//                 },
//                 formatter: function() {
//                 return this.value;
//                 }
//             }
//     },
//     xAxis: {
//         type: 'datetime',
//         // categories: dateLabels,
//         lineWidth: 0,
//         lineColor: 'black',
//         gridLineWidth: 0,
//         gridLineColor: 'transparent',
//         tickLength: 0,
//         accessibility: {
//             rangeDescription: ''
//         },
//         labels: {
//             // step:4,
//             style: {
//                 fontSize: '0.5rem',
//                 color: '#616161',
//             },
//             // rotation: -45
//         }
//     },
//     tooltip: {
//         pointFormat: '<b>{point.y:,.2f}</b>',
//     },
//     series: [
//             {
//                 name: blockchartData[0].chain,
//                 className: 'line-class1',
//                 data: combineUnixFauxDataArr(dateUnixCelo),
//                 color: blockchartData[0].color,
//                 type: 'area',
//                 shadow: {
//                     color: blockchartData[0].color,
//                         width: 12,
//                         offsetX: 0,
//                         offsetY: 0
//                 },
//                 lineWidth: 1.2,
//                 animation: {
//                     // defer: 1200,
//                     duration: 1000
//                 },
//                 marker: {
//                     enabled: false
//                 },
//                 fillColor: {
//                     linearGradient:  { 
//                         x1: 0,
//                         y1: 0,
//                         x2: 1,
//                         y2: 1},
//                     stops: [
//                         [0, blockchartData[0].color],
//                         [1, 'transparent']
//                     ]
//                 },
//             },
//             {
//                 name: blockchartData[1].chain,
//                 className: 'line-class1',
//                 data: blockchartData[1].chart_cum_data,
//                 color: blockchartData[1].color,
//                 type: 'area',
//                 shadow: {
//                     color: blockchartData[1].color,
//                         width: 12,
//                         offsetX: 0,
//                         offsetY: 0
//                 },
//                 lineWidth: 1.2,
//                 animation: {
//                     // defer: 1200,
//                     duration: 1000
//                 },
//                 marker: {
//                     enabled: false
//                 },
//                 fillColor: {
//                     linearGradient: { 
//                         x1: 0,
//                         y1: 0,
//                         x2: 1,
//                         y2: 1},
//                     stops: [
//                         [0, blockchartData[1].color],
//                         [1, 'transparent']
//                     ]
//                 },
//             },
//             {
//                 name: blockchartData[2].chain,
//                 className: 'line-class1',
//                 data:  blockchartData[2].chart_cum_data,
//                 color: blockchartData[2].color,
//                 type: 'area',
//                 shadow: {
//                     color: blockchartData[2].color,
//                         width: 12,
//                         offsetX: 0,
//                         offsetY: 0
//                 },
//                 lineWidth: 1.2,
//                 animation: {
//                     // defer: 1200,
//                     duration: 1000
//                 },
//                 marker: {
//                     enabled: false
//                 },
//                 fillColor: {
//                     linearGradient:  { 
//                         x1: 0,
//                         y1: 0,
//                         x2: 1,
//                         y2: 1},
//                     stops: [
//                         [0, blockchartData[2].color],
//                         [1, 'transparent']
//                     ]
//                 },
//             },
//             {
//                 name: blockchartData[3].chain,
//                 className: 'line-class1',
//                 data:  blockchartData[3].chart_cum_data,
//                 color: blockchartData[3].color,
//                 type: 'area',
//                 shadow: {
//                     color:blockchartData[3].color,
//                         width: 12,
//                         offsetX: 0,
//                         offsetY: 0
//                 },
//                 lineWidth: 1.2,
//                 animation: {
//                     // defer: 1200,
//                     duration: 1000
//                 },
//                 marker: {
//                     enabled: false
//                 },
//                 fillColor: {
//                     linearGradient:  { 
//                         x1: 0,
//                         y1: 0,
//                         x2: 1,
//                         y2: 1},
//                     stops: [
//                         [0, blockchartData[3].color],
//                         [1, 'transparent']
//                     ]
//                 },
//             },
//             {
//                 name: blockchartData[4].chain,
//                 className: 'line-class1',
//                 data:  blockchartData[4].chart_cum_data,
//                 color: blockchartData[4].color,
//                 type: 'area',
//                 shadow: {
//                     color: blockchartData[4].color,
//                         width: 12,
//                         offsetX: 0,
//                         offsetY: 0
//                 },
//                 lineWidth: 1.2,
//                 animation: {
//                     // defer: 1200,
//                     duration: 1000
//                 },
//                 marker: {
//                     enabled: false
//                 },
//                 fillColor: {
//                     linearGradient:  { 
//                         x1: 0,
//                         y1: 0,
//                         x2: 1,
//                         y2: 1},
//                     stops: [
//                         [0, blockchartData[4].color],
//                         [1, 'transparent']
//                     ]
//                 },
//             },
//             {
//                 name: blockchartData[5].chain,
//                 className: 'line-class1',
//                 data:  blockchartData[5].chart_cum_data,
//                 color: blockchartData[5].color,
//                 type: 'area',
//                 shadow: {
//                     color:blockchartData[5].color,
//                         width: 12,
//                         offsetX: 0,
//                         offsetY: 0
//                 },
//                 lineWidth: 1.2,
//                 animation: {
//                     // defer: 1200,
//                     duration: 1000
//                 },
//                 marker: {
//                     enabled: false
//                 },
//                 fillColor: {
//                     linearGradient:  { 
//                         x1: 0,
//                         y1: 0,
//                         x2: 1,
//                         y2: 1},
//                     stops: [
//                         [0, blockchartData[5].color],
//                         [1, 'transparent']
//                     ]
//                 },
//             },
//             ]
// }

const CumulativeBlockchainEmissionsChart = ({ chartData }) => {

    var chartDataSeries = (function() {
        if (typeof Highcharts === 'object') {
            var dataArr = []
            for (let i = 0; i < chartData.length; i += 1) {
                if (chartData[i].chain != 'Bitcoin') {
                    dataArr.push({
                        name: chartData[i].chain,
                        className: 'line-class1',
                        data:  chartData[i].chart_data.chart_cum_data,
                        color: chartData[i].chart_data.chart_color,
                        type: 'area',
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
                                x2: 1,
                                y2: 1},
                            stops: [
                                [0, chartData[i].chart_data.chart_color],
                                [1, 'transparent']
                            ]
                        },
                    })
                }
            }
            return dataArr;
        }
    }())

    const options = {
        chart: {
            type: 'line',
            backgroundColor: 'transparent',
            margin: [30,20,30,100]
            // color: "#fff"
        },
        title: {
            text: 'Total tCO2',
            floating:true,
            y:40,
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
            enabled: false,
            padding:30,
            style: {
                fontSize: '0.5rem',
                color: 'gray',
            }
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
                    formatter: function() {
                    return this.value;
                    }
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
            pointFormat: '<b>{point.y:,.2f}</b>',
        },
        series:chartDataSeries
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'cumulative-blockchain-chart',
                                  style: { height: "280px" } }} 
            />
        </div>
    )
}

export default CumulativeBlockchainEmissionsChart
