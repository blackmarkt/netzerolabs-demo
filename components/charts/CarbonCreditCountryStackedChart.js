import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

const CarbonCreditCountryStackedChart = ({ chartData }) => {

    const options = {
        chart: {
            type: 'column',
            backgroundColor: 'transparent',
            margin: [40,10,20,80]
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
            lineWidth: 1,
            type: "datetime",
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
            padding:25,
            style: {
                fontSize: '0.2rem',
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
                dataLabels: {
                    enabled: false,
                    // color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    // style: {
                    //     textShadow: '0 0 3px black, 0 0 3px black'
                    // }
                }
            }
        },
        series: chartData
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

export default CarbonCreditCountryStackedChart