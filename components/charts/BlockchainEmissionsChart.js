import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, emissionsData, dateUnixLabels, dateUnixCelo, celoEmissionsDailyData, 
    celoCumEmissionData, combineUnixDataArr, combineUnixFauxDataArr} from '../../data/emissionsData'
import { blockchainData, defaultChainEmissionsData, } from '../../data/blockchainData'

const options = {
    chart: {
        type: 'line',
        backgroundColor: 'transparent',
        margin: [20,20,20,100]
        // color: "#fff"
    },
    title: {
        text: 'Daily tCO2',
        floating:true,
        // y:20,
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
        verticalAlign: 'top',
        align:'center',
        padding:30,
        style: {
            fontSize: '0.4rem',
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
                radius: 1
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
        // max:100, 
        lineColor: 'transparent',
        gridLineWidth: 0,
        gridLineColor: 'transparent',
        title: {
            text: 'tCO2'
        },
        labels: {
            step:1,
            style: {
                fontSize: '0.7rem',
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
                fontSize: '0.6rem',
                color: '#616161',
            },
            // rotation: -45
        }
    },
    tooltip: {
        pointFormat: '<b>{point.y:,.2f}</b>',
    },
    series: [
            {
                name: blockchainData[0].chain,
                className: 'line-class1',
                data: blockchainData[0].chart_daily_data,
                color: blockchainData[0].color,
                // type: 'area',
                shadow: {
                    color:  blockchainData[0].color,
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
                name:  blockchainData[1].chain,
                className: 'line-class1',
                data: blockchainData[1].chart_daily_data,
                color:  blockchainData[1].color,
                // type: 'area',
                shadow: {
                    color:  blockchainData[1].color,
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
                name: blockchainData[2].chain,
                className: 'line-class1',
                data: blockchainData[2].chart_daily_data,
                color: blockchainData[2].color,
                // type: 'area',
                shadow: {
                    color: blockchainData[2].color,
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
                name: blockchainData[3].chain,
                className: 'line-class1',
                data: blockchainData[3].chart_daily_data,
                color: blockchainData[3].color,
                // type: 'area',
                shadow: {
                    color: blockchainData[3].color,
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
                name: blockchainData[4].chain,
                className: 'line-class1',
                data: blockchainData[4].chart_daily_data,
                color: blockchainData[4].color,
                // type: 'area',
                shadow: {
                    color: blockchainData[4].color,
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
                name: blockchainData[5].chain,
                className: 'line-class1',
                data: blockchainData[5].chart_daily_data,
                color: blockchainData[5].color,
                // type: 'area',
                shadow: {
                    color: blockchainData[5].color,
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

const BlockchainEmissionsChart = () => {

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'blockchain-emissions-chart',
                                  style: { height: "280px" } }} 
            />
        </div>
    )
}

export default BlockchainEmissionsChart