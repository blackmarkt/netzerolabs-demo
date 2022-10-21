import React from 'react'
import Highcharts from 'highcharts'
// import HighchartsExporting from 'highcharts/modules/exporting'
import HighchartsReact from 'highcharts-react-official'


const CumulativeBlockchainOffsetChart = ({ offsetData }) => {

    var offsetDataSeries = (function() {
        if (typeof Highcharts === 'object') {
            var dataArr = []
            for (let i = 0; i < offsetData.length; i += 1) {
                if (offsetData[i].netzero_cert.netzero_offsets_chart != null) {
                    dataArr.push({
                        name: offsetData[i].chain,
                        className: 'line-class1',
                        data:  offsetData[i].netzero_cert.netzero_offsets_chart,
                        color: offsetData[i].netzero_cert.chart_color,
                        type: 'area',
                        shadow: {
                            color: offsetData[i].netzero_cert.chart_color,
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
                                [0, offsetData[i].netzero_cert.chart_color],
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
            margin: [30,20,40,100]
            // color: "#fff"
        },
        title: {
            text: 'Total Carbon Offsets (tCO2e)',
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
            enabled: true,
            verticalAlign: 'top',
            align:'center',
            padding:25,
            style: {
                fontSize: '0.4rem',
                color: 'darkgray',
            }
        },
        yAxis: {
            // type: 'logarithmic',
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
            pointFormat: '<b>{series.name}: {point.y:,.2f}</b>',
        },
        series: offsetDataSeries
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'cumulative-blockchain-offset-chart',
                                  style: { height: "100%" } }} 
            />
        </div>
    )
}

export default CumulativeBlockchainOffsetChart
