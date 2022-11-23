import React, { useState, useEffect, useRef } from "react";
import CarbonCreditsTable from '../../components/credits/CarbonCreditsTable'
import TopCountriesTable from '../../components/credits/TopCountriesTable'
import TopProtocolsTable from '../../components/credits/TopProtocolsTable'
import CarbonCreditProtocolStackedChart from '../../components/charts/CarbonCreditProtocolStackedChart'
import CarbonProtocolPieChart from '../../components/charts/CarbonProtocolPieChart'
import CarbonCreditsTotalChart from '../../components/charts/CarbonCreditsTotalChart'
import CarbonCreditCountryStackedChart from '../../components/charts/CarbonCreditCountryStackedChart'
import CarbonCreditsCountryPieChart from "../../components/charts/CarbonCreditsCountryPieChart";
import creditStyles from '../../styles/Credits.module.css'
import { getCarbonCreditData, getTotalCarbonCreditsQty, getCountryBreakdown, getCountryStacked,
         sumCarbonCreditsMonthly, getProtocolBreakdown, getProtocolStacked } from '../../data/carbonCreditData'

const CarbonCredits = () => {
    const [carbonData, setCarbonData] = useState(getCarbonCreditData)
    const [totalCarbonQty, setTotalCarbonQty] = useState(getTotalCarbonCreditsQty)
    const [carbonCountry, setCarbonCountry] = useState(getCountryBreakdown())
    const [carbonStackedCountry, setCarbonStackedCountry] = useState(getCountryStacked())
    const [sumCarbonCreditsArr, setSumCarbonCreditsArr] = useState(sumCarbonCreditsMonthly())
    const [protocolBreakdown, setProtocolBreakdown] = useState(getProtocolBreakdown())
    const [protocolStack, setProtocolStack] = useState(getProtocolStacked())

    console.log('SUM CARBON ', protocolStack)

    return (
        <div className={creditStyles.dashboardContainer}>
            <div className={creditStyles.dashboardLeftHeader}>
                <h2 className={creditStyles.dashboardMainHeader}>Carbon Credits Tracker <scan className={creditStyles.dashboardSubHeader}>(On-Chain)</scan></h2>
                <p style={{"margin":"0", "padding": "0rem"}}>Last Updated 11/19/22</p>
            </div>
            <div className={creditStyles.dashboardRightHeader}>
                <a href="https://www.notion.so/blackmarkt/Carbon-Accounting-Methodology-b2e03be009a945f680592ec7563107d6" target="_blank" rel="noopener noreferrer">
                    <p style={{"margin":"0", "padding": "0rem"}}>Methology</p>
                </a>
            </div>
            <div className={creditStyles.dashboardHeaderContainer}>
                <div className={`${creditStyles.grid} ${creditStyles.dashboardHeadSubContainer}`}>
                    <div className={`${creditStyles.topDashboard} ${creditStyles.totalEmissionsTxt}`}>{totalCarbonQty}</div>
                    <div className={creditStyles.emissionsUnits}>tCO&#8322;e</div>
                    <p className={creditStyles.subDashboard}>Total Carbon Credits (Bridged)</p>
                </div>
                <div className={`${creditStyles.grid} ${creditStyles.dashboardHeadSubContainer}`}>
                    <div className={`${creditStyles.topDashboard} ${creditStyles.totalEmissionsTxt}`}>{totalCarbonQty}</div>
                    <div className={creditStyles.emissionsUnits}>tCO&#8322;e</div>
                    <p className={creditStyles.subDashboard}>Total Carbon Credits (Retired)</p>
                </div>      
            </div>
            <h4 className={creditStyles.dashboardHeader}>Overview</h4>
            <div className={creditStyles.dashboardChartSubContainer}>
                <div className={creditStyles.emissionsChartContainer}>
                    <div className={creditStyles.emissionsChartContainer}>
                        <CarbonCreditsTotalChart chartData={sumCarbonCreditsArr}/>
                    </div>
                    {/* <div className={creditStyles.emissionsChartContainer}>
                        <CumulativeBlockchainEmissionsChart chartData={chainData}/>
                    </div> */}
                </div>
            </div>
            <h4 className={creditStyles.dashboardHeader}>Credits Breakdown</h4>
            <div className={[creditStyles.dashboardSubContainer, creditStyles.dashboardOffsetsSubContainer].join(" ")}>
                <div className={creditStyles.subLeftContainer}>
                    <div className={creditStyles.topCountriesContainer}>
                        <h4 className={creditStyles.dashboardHeader}>Top Issuing Countries </h4>
                        <table className={creditStyles.chainTable}>
                            <thead>
                                <tr className={creditStyles.tableHeader}>
                                    {/* <th>
                                        ID
                                    </th> */}
                                    <th>
                                        Country
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {carbonCountry.map((obj, index) => {
                                    if (index < 3) 
                                        return ( 
                                            <TopCountriesTable key={index} {...obj}/>
                                        )
                                    return null
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={creditStyles.countriesPieContainer}>
                        <CarbonCreditsCountryPieChart chartData={carbonCountry}/>
                    </div>
                </div>
                <div className={creditStyles.subRightContainer}>
                    <div className={creditStyles.emissionsChartContainer}>
                        <CarbonCreditCountryStackedChart chartData={carbonStackedCountry}/>
                    </div>
                </div>
            </div>
            <h4 className={creditStyles.dashboardHeader}>Protocol Breakdown</h4>
            <div className={creditStyles.dashboardChartSubContainer}>
                <div className={creditStyles.subLeftContainer}>
                    <div className={creditStyles.topCountriesContainer}>
                        <h4 className={creditStyles.dashboardHeader}>Top Issuing Protocols </h4>
                        <table className={creditStyles.chainTable}>
                            <thead>
                                <tr className={creditStyles.tableHeader}>
                                    <th>
                                        Provider
                                    </th>
                                    <th>
                                        Quantity
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {protocolBreakdown.map((obj, index) => {
                                    if (index < 3) 
                                        return ( 
                                            <TopProtocolsTable key={index} {...obj}/>
                                        )
                                    return null
                                })}
                            </tbody>
                        </table>
                    </div>
                    <div className={creditStyles.emissionsChartContainer}>
                        <CarbonProtocolPieChart chartData={protocolBreakdown}/>
                    </div>
                </div>
                <div className={creditStyles.subRightContainer}>
                    <div className={creditStyles.emissionsChartContainer}>
                        <CarbonCreditProtocolStackedChart chartData={protocolStack}/>
                    </div>
                </div>
            </div>
            <h4 className={creditStyles.dashboardHeader}>Transactions</h4>
            <div className={[creditStyles.dashboardSubContainer, creditStyles.dashboardCreditsTable].join(" ")}>
                <div className={creditStyles.chainContainer}>
                    <table className={creditStyles.chainTable}>
                        <thead>
                            <tr className={creditStyles.tableHeader}>
                                <th>
                                    ID
                                </th>
                                <th>
                                    Provider
                                </th>
                                <th>
                                    Type
                                </th>
                                <th>
                                    Country
                                </th>
                                <th>
                                    Date Issued
                                </th>
                                <th>
                                    Quantity
                                </th>
                                <th>
                                    Retired 
                                </th>
                                <th>
                                    Retirement Address
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carbonData.map((obj, index) => {
                                if (index < 19) 
                                    return ( 
                                        <CarbonCreditsTable key={index} {...obj}/>
                                    )
                                return null
                            })}
                        </tbody>
                    </table>
                </div>
                {/* <p className={[creditStyles.footNote, creditStyles.testnetNote].join(" ")}>Does not include Testnets</p> */}
            </div>
            {/* <p className={creditStyles.footNote}>&#42; Ethereum merge on 9/15/22</p> */}
        </div>
    );
}

export default CarbonCredits;