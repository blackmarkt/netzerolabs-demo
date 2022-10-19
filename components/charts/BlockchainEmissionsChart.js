import React from 'react'
import Highcharts, { chart } from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'
import { dateLabels, emissionsData, dateUnixLabels, dateUnixCelo, celoEmissionsDailyData, 
    celoCumEmissionData, combineUnixDataArr, combineUnixFauxDataArr} from '../../data/emissionsData'
import { blockchainData, defaultChainEmissionsData, } from '../../data/blockchainData'


const BlockchainEmissionsChart = ({ chartData }) => {

    var chartDataSeries = (function() {
        if (typeof Highcharts === 'object') {
            var dataArr = []
            for (let i = 0; i < chartData.length; i += 1) {
                // if (chartData[i].chain != 'Bitcoin') {
                    dataArr.push({
                        name: chartData[i].chain,
                        className: 'line-class1',
                        data: chartData[i].chart_data.chart_daily_data,
                        color: chartData[i].chart_data.chart_color,
                        // type: 'area',
                        shadow: {
                            color:  chartData[i].chart_data.chart_color,
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
                // }
            }
            return dataArr;
        }
    }())

    const options = {
        chart: {
            type: 'line',
            backgroundColor: 'transparent',
            margin: [20,20,40,100]
            // color: "#fff"
        },
        title: {
            text: 'Daily tCO2 (per Tx)',
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
            verticalAlign: 'bottom',
            align:'center',
            padding:-15,
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
            type: 'logarithmic',
            lineWidth: 0,
            min: 1,
            // max:100, 
            lineColor: 'transparent',
            gridLineWidth: 0,
            gridLineColor: 'transparent',
            title: {
                text: 'tCO2'
            },
            labels: {
                // step:1,
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
            pointFormat: '<b>{series.name}: {point.y:,.2f}</b>',
        },
        series: chartDataSeries
    }

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