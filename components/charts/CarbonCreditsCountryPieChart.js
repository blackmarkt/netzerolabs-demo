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
                    {country: 'Viet Nam', color: '#EDED00'}]

const CarbonCreditsCountryPieChart = ({ chartData }) => {

    function getColorByCountry(country) {
        return countryColors.filter(
            function(data){ return data.country == country }
        );
    }

    var pieColors = (function () {
        if (typeof Highcharts === 'object') {
            var colors = [],
            i;
    
            for (i = 0; i < 10; i += 1) {
                colors.push(Highcharts.color('#00FFFF').brighten((i - 3) / 8).get());
            }
            return colors;
        }
    }());

    var colorGradientArr = (function () {
        let dataArr = chartData
        if (typeof Highcharts === 'object') {
            for (let i=0; i<chartData.length; i+=1) {
                let tempColor = getColorByCountry(dataArr[i]['country'])
                // console.log('COLOR TEMP ', tempColor);
                if (tempColor.length !== 0 && tempColor[0].color !== 'undefined') {
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
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            backgroundColor: 'transparent',
            margin: [40,10,40,40]
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
        tooltip: {
            pointFormat: '{point.country}: <b>{point.percentage:.1f}%</b>'
            // pointFormat: '{series.name}: <b>0%</b>'
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
                // colors: pieColors,
                borderWidth:0,
                // opacity:0.7,
                dataLabels: {
                    enabled: true,
                    // format: '<b>{point.name}</b><br>0%',
                    format: '<b>{point.country}</b><br>{point.percentage:.1f} %',
                    distance: -30,
                    style: {
                        textOutline: false,
                        color:'gray',
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
            innerSize: '40%',
            data: colorGradientArr,
            // data: chartData.chart_data.operations_data
        }]
    }

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'carbon-pie-chart',
                                  style: { height: "100%" } }} 
            />
        </div>
    )
}

export default CarbonCreditsCountryPieChart