import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { getProtocolColors } from '../../data/carbonCreditData'


const CarbonCreditProtocolStackedChart = ({ chartData }) => {

    var colorGradientArr = (function () {
        let dataArr = chartData
        if (typeof Highcharts === 'object') {
            for (let i=0; i<dataArr.length; i+=1) {
                let tempColor = getProtocolColors(dataArr[i]['name'])
                // console.log('PROTOCOL STACKED COLOR ', dataArr[i], tempColor)
                if (typeof tempColor[0].color !== 'undefined') {
                    dataArr[i]['color'] = {
                        linearGradient:  { 
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1},
                        stops: [
                            [0, tempColor[0].color],
                            [1, 'transparent']
                        ]
                    }
                } else {
                    dataArr[i]['color'] = {
                        linearGradient:  { 
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1},
                        stops: [
                            [0, Highcharts.color('white').brighten((i - 3) / 12).get()],
                            [1, 'transparent']
                        ]
                    }
                }
            }
            // dataArr[0]['color'] = {
            //                         linearGradient:  { 
            //                             x1: 0,
            //                             y1: 0,
            //                             x2: 1,
            //                             y2: 1},
            //                         stops: [
            //                             [0, '#FFFFFF'],
            //                             [1, 'transparent']
            //                         ]
            //                     }
            // console.log('STACKED CHART COLOR ', dataArr)
            return dataArr
        }
    }());

    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            margin: [10,20,20,60]
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            text: ''
        },
        xAxis: {
            lineWidth: 0,
            type: "datetime",
            lineColor: 'transparent',
            gridLineWidth: 0,
            gridLineColor: 'transparent',
            tickLength: 0,
            labels: {
                // step:4,
                style: {
                    fontSize: '0.6rem',
                    color: '#616161',
                },
                // rotation: -45
            }
        },
        yAxis: {
            lineColor: 'transparent',
            gridLineWidth: 0,
            gridLineColor: 'transparent',
            title: {
                text: 'tCO2e'
            },
            labels: {
                // step:1,
                style: {
                    fontSize: '0.6rem',
                    color: '#616161',
                },
                // formatter: function() {
                // return this.value;
                // }
            }
        },
        legend: {
            enabled: true,
            verticalAlign: 'top',
            align:'center',
            float:true,
            padding:0,
            itemStyle: {
                fontSize: '0.6rem',
                color: '#616161',
            }
        },
        tooltip: {
            // pointFormat: '{point.country}: <b>{point.percentage:.1f}%</b>'
            // pointFormat: '{series.name}: <b>0%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            column: {
                "stacking": "normal",
                borderWidth:0,
                // borderRadius:2,
                pointWidth: 20,
                dataLabels: {
                    enabled: false,
                    // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    // style: {
                    //     textShadow: '0 0 3px black, 0 0 3px black'
                    // }
                }
            }
        },
        series: colorGradientArr
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'carbon-stacked-chart',
                                  style: { height: "100%" } }} 
            />
        </div>
    )
}

export default CarbonCreditProtocolStackedChart