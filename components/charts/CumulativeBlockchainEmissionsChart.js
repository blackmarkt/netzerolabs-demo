import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, cumEmissionsData } from '../../data/emissionsData'
import { blockchainData, defaultChainEmissionsData } from '../../data/blockchainData'


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
    series: [
            {
                name: blockchainData[0].chain,
                className: 'line-class1',
                data: cumEmissionsData,
                color: blockchainData[0].color,
                type: 'area',
                shadow: {
                    color: blockchainData[0].color,
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
                name: blockchainData[1].chain,
                className: 'line-class1',
                data: defaultChainEmissionsData,
                color: blockchainData[1].color,
                type: 'area',
                shadow: {
                    color: blockchainData[1].color,
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
                data: defaultChainEmissionsData,
                color: blockchainData[2].color,
                type: 'area',
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
                data: defaultChainEmissionsData,
                color: blockchainData[3].color,
                type: 'area',
                shadow: {
                    color:blockchainData[3].color,
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
                data: defaultChainEmissionsData,
                color: blockchainData[4].color,
                type: 'area',
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
                data: defaultChainEmissionsData,
                color: blockchainData[5].color,
                type: 'area',
                shadow: {
                    color:blockchainData[5].color,
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
            ]
}

const CumulativeBlockchainEmissionsChart = () => {

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
