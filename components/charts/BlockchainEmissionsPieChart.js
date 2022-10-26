import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { withRouter } from 'next/router';


const BlockchainEmissionsPieChart = ({ chartData }) => {
    // console.log('CHART DATA ', chartData);

    // var pieColors = (function () {
    //     if (typeof Highcharts === 'object') {
    //         var colors = [],
    //         i;
    
    //         for (i = 0; i < chartData.length; i += 1) {
    //             colors.push(Highcharts.color(chartData.chart_data.chart_color).brighten((i - 3) / 8).get());
    //         }
    //         return colors;
    //     }
    // }());

    function pieData(chainData) {
        if (typeof Highcharts === 'object') {
            var data = [],
            i;
            for (i = 0; i < chainData.length; i += 1) {
                if (chainData[i].emissions != null && chainData[i].chain != 'Bitcoin') {
                    data.push({name: chainData[i].chain, 
                               y: parseInt(chainData[i].emissions_stats.sum.replace(/,/g, '')),
                               color: chainData[i].chart_data.chart_color});
                }
                console.log('CHART DATA ', chainData[i].chain);
            }
            return data;
        }
    }

    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent',
            margin: [20,20,20,20]
        },
        credits: {
            enabled: false
        },
        exporting: {
            enabled: false
        },
        title: {
            text: 'tCO2e Emissions by L1',
            style: {
                fontSize: '0.75rem',
                color: '#616161'
            },
        },
        subtitle: {
            text: '*Excluding Bitcoin',
            style: {
                fontSize: '0.55rem',
                color: '#616161'
            }
        },
        tooltip: {
            pointFormat: '<b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                borderWidth:0,
                opacity:0.7,
                shadow: true,
                borderColor:'#FFFFFF',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b><br>{point.percentage:.1f} %',
                    distance: -40,
                    style: {
                        textOutline: false,
                        color: 'darkgray' 
                    },
                    filter: {
                        property: 'percentage',
                        operator: '>',
                        value: 4
                    }
                }
            }
        },
        series: [{
            name: 'tCO2e %',
            size: '100%',
            innerSize: '30%',
            data: pieData(chartData)
        }]
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'blockchain-pie-chart',
                                  style: { height: "100%" } }} 
            />
        </div>
    )
}

export default BlockchainEmissionsPieChart