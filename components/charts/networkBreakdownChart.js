import React from 'react'
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
// import { dateLabels, emissionsData } from '../../data/emissionsData'


const networkBreakdownChart = () => {

    return (
        <div>
            <HighchartsReact
                highcharts={Highcharts}
                constructorType={'chart'}
                options={options}
                containerProps={{ className: 'transactions-chart',
                                  style: { height: "280px" } }} 
            />
        </div>
    )
}

export default networkBreakdownChart