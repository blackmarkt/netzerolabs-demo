import React, { useEffect } from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'

var countryColors = [{country: 'China', color: '#B41F11'},
                    {country: 'India', color: 'orange'},
                    {country: 'Brazil', color: '#0C8C45'},
                    {country: 'Turkey', color: '#760711'},
                    {country: 'Myanmar', color: '#2E862B'},
                    {country: 'Indonesia', color: '#3F3EFA'},
                    {country: 'Canada', color: '#C2C2C2'},
                    {country: 'Netherlands', color: '#F28E00'},
                    {country: 'Colombia', color: '#EDC515'},
                    {country: 'Belize', color: '#003A81'},
                    {country: 'Bulgaria', color: '#861017'},
                    {country: 'Congo', color: '#2485E7'},
                    {country: 'Chile', color: '#EFDA00'},
                    {country: 'Thailand', color: '#0349A0'},
                    {country: 'Kenya', color: '#094034'},
                    {country: 'South Korea', color: '#FFFFFF'},
                    {country: 'Uruguay', color: 'yellow'},
                    {country: 'Bolivia', color: '#BD332A'},
                    {country: 'Cambodia', color: '#01127D'},
                    {country: 'Guatemala', color: '#3389AF'},
                    {country: 'Madagascar', color: '#B2A8A6'},
                    {country: 'Viet Nam', color: '#EDED00'},
                    ]

const CarbonCreditCountryStackedChart = ({ chartData }) => {

    function getColorByCountry(country) {
        return countryColors.filter(
            function(data){ return data.country == country }
        );
    }

    var colorGradientArr = (function () {
        let dataArr = chartData
        if (typeof Highcharts === 'object') {
            for (let i=0; i<chartData.length; i+=1) {
                let tempColor = getColorByCountry(dataArr[i]['name'])
                // console.log('COLOR TEMP ', tempColor);
                if (tempColor[0].color !== 'undefined') {
                    // console.log('COLOR TEMP 2', tempColor);
                    dataArr[i]['color'] = {
                        linearGradient:  { 
                            x1: 0,
                            y1: 0,
                            x2: 1,
                            y2: 1},
                        stops: [
                            // [0, Highcharts.color(tempColor[0].color).brighten((i - 3) / 12).get()],
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
            console.log('COLOR ', dataArr)
            return dataArr
        }
    }());

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
            padding:25,
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

export default CarbonCreditCountryStackedChart