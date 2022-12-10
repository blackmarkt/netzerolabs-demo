import React, { useState, useEffect, useRef } from "react";
import CarbonCreditsTable from '../../components/credits/CarbonCreditsTable'
import TopCountriesTable from '../../components/credits/TopCountriesTable'
import TopProtocolsTable from '../../components/credits/TopProtocolsTable'
import TopCarbonTypeTable from '../../components/credits/TopCarbonTypeTable'
import OnChainTxnsTable from '../../components/credits/OnChainTxnsTable'
import OnChainTxTable from '../../components/credits/OnChainTxTable'
import CarbonCreditProtocolStackedChart from '../../components/charts/CarbonCreditProtocolStackedChart'
import CarbonProtocolPieChart from '../../components/charts/CarbonProtocolPieChart'
import CarbonCreditsTotalChart from '../../components/charts/CarbonCreditsTotalChart'
import CarbonCreditCountryStackedChart from '../../components/charts/CarbonCreditCountryStackedChart'
import CarbonCreditsCountryPieChart from "../../components/charts/CarbonCreditsCountryPieChart"
import CarbonCreditsTypePieChart from "../../components/charts/CarbonCreditsTypePieChart"
import CarbonCreditTypeStackedChart from "../../components/charts/CarbonCreditTypeStackedChart"
import CarbonCreditMap from '../../components/map/CarbonCreditMap'
import creditStyles from '../../styles/Credits.module.css'
import { getCarbonCreditData, getTotalCarbonCreditsQty, getCountryBreakdown, getCountryStacked,
         sumCarbonCreditsMonthly, getProtocolBreakdown, getProtocolStacked, getCarbonTypeBreakdown,
         getTypeStacked, getFlowCarbonMapData, getCarbonMapData, getCarbonTxs, getTotalRetiredCCQty } from '../../data/carbonCreditData'

const CarbonCredits = () => {
    const [carbonData, setCarbonData] = useState(getCarbonCreditData)
    const [totalCarbonQty, setTotalCarbonQty] = useState(getTotalCarbonCreditsQty)
    const [totalCarbonRetiredQty, setTotalCarbonRetiredQty] = useState(getTotalRetiredCCQty)
    const [carbonCountry, setCarbonCountry] = useState(getCountryBreakdown())
    const [carbonStackedCountry, setCarbonStackedCountry] = useState(getCountryStacked())
    const [sumCarbonCreditsArr, setSumCarbonCreditsArr] = useState(sumCarbonCreditsMonthly())
    const [protocolBreakdown, setProtocolBreakdown] = useState(getProtocolBreakdown())
    const [protocolStack, setProtocolStack] = useState(getProtocolStacked())
    const [carbonTypeBreakdown, setCarbonTypeBreakdown] = useState(getCarbonTypeBreakdown())
    const [carbonTypeStacked, setCarbonTypeStacked] = useState(getTypeStacked())
    const [carbonMapData, setCarbonMapData] = useState(getCarbonMapData())
    const [carbonOnChainTx, setCarbonOnChainTx] = useState(getCarbonTxs())

    // console.log('CARBON ONCHAIN DATA ', carbonOnChainTx)

    return (
        <div className={creditStyles.dashboardContainer}>
            <OnChainTxnsTable chartData={sumCarbonCreditsArr}/> 
            <div className={creditStyles.dashboardLeftHeader}>
                <h2 className={creditStyles.dashboardMainHeader}>Carbon Credits Tracker <scan className={creditStyles.dashboardSubHeader}>(On-Chain)</scan></h2>
                <p style={{"margin":"0", "padding": "0rem"}}>Last Updated 12/2/22</p>
            </div>
            <div className={creditStyles.dashboardRightHeader}>
                <a href="https://www.notion.so/blackmarkt/Carbon-Accounting-Methodology-b2e03be009a945f680592ec7563107d6" target="_blank" rel="noopener noreferrer">
                    <p style={{"margin":"0", "padding": "0rem"}}>Methodology</p>
                </a>
            </div>
            <div className={creditStyles.dashboardHeaderContainer}>
                <div className={`${creditStyles.grid} ${creditStyles.dashboardHeadSubContainer}`}>
                    <div className={`${creditStyles.topDashboard} ${creditStyles.totalEmissionsTxt}`}>{totalCarbonQty}</div>
                    <div className={creditStyles.emissionsUnits}>tCO&#8322;e</div>
                    <p className={creditStyles.subDashboard}>Total Carbon Credits (Bridged)</p>
                </div>
                <div className={`${creditStyles.grid} ${creditStyles.dashboardHeadSubContainer}`}>
                    <div className={`${creditStyles.topDashboard} ${creditStyles.totalEmissionsTxt}`}>{totalCarbonRetiredQty}</div>
                    <div className={creditStyles.emissionsUnits}>tCO&#8322;e</div>
                    <p className={creditStyles.subDashboard}>Total Carbon Credits (Retired)</p>
                </div>
                <div className={`${creditStyles.grid} ${creditStyles.dashboardHeadSubContainer}`}>
                    <div className={`${creditStyles.topDashboard} ${creditStyles.totalEmissionsTxtNA} ${creditStyles.pulsate}`}>NA</div>
                    {/* <div className={creditStyles.emissionsUnits}>tCO&#8322;e</div> */}
                    <p className={creditStyles.subDashboard}>Avg Price Carbon Credits (per tCO&#8322;e)</p>
                </div> 
                {/* <div className={`${creditStyles.grid} ${creditStyles.dashboardHeadSubContainer}`}>
                    <div className={`${creditStyles.topDashboard} ${creditStyles.totalEmissionsTxtNA}`}>NA</div>
                    <p className={creditStyles.subDashboard}>Total Carbon Credits (per tCO&#8322;e)</p>
                </div>       */}
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
            <div className={[creditStyles.dashboardSubContainer, creditStyles.dashboardOffsetsSubContainer, creditStyles.dashboardExtraContainer].join(" ")}>
                <div className={creditStyles.subContainer}>
                    <div className={[creditStyles.subLeftContainer, creditStyles.subContainerTop].join(" ")}>
                        <div className={creditStyles.topCountriesContainer}>
                            <h4 className={creditStyles.dashboardHeader}>Top Issuing Countries</h4>
                            <table className={[creditStyles.chainTable, creditStyles.countriesTable].join(" ")}>
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
                                        if (index < 9) 
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
                        <h4 className={creditStyles.dashboardSubHeader}>Projects</h4>
                        <div className={creditStyles.subMapContainer}>
                            <CarbonCreditMap mapData={carbonMapData}/>
                        </div>
                        <div className={creditStyles.emissionsChartContainer}>
                            <CarbonCreditCountryStackedChart chartData={carbonStackedCountry}/>
                        </div>
                    </div>
                </div>
                <hr className={creditStyles.dashboardDivider}></hr>
                <div className={creditStyles.subContainer}>
                    <div className={creditStyles.subLeftContainer}>
                    <div className={creditStyles.topCountriesContainer}>
                            <h4 className={creditStyles.dashboardHeader}>Top Project Categories</h4>
                            <table className={creditStyles.chainTable}>
                                <thead>
                                    <tr className={creditStyles.tableHeader}>
                                        {/* <th>
                                            ID
                                        </th> */}
                                        <th>
                                            Project Type
                                        </th>
                                        <th>
                                            Quantity
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {carbonTypeBreakdown.map((obj, index) => {
                                        if (index < 3) 
                                            return ( 
                                                <TopCarbonTypeTable key={index} {...obj}/>
                                            )
                                        return null
                                    })}
                                </tbody>
                            </table>
                        </div>
                        <div className={creditStyles.countriesPieContainer}>
                            <CarbonCreditsTypePieChart chartData={carbonTypeBreakdown}/>
                        </div>
                    </div>
                    <div className={creditStyles.subRightContainer}>
                        <div className={creditStyles.emissionsChartContainer}>
                            <CarbonCreditTypeStackedChart chartData={carbonTypeStacked}/>
                        </div>
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
            <h4 className={creditStyles.dashboardHeader}>MOSS & C3 Transactions <scan className={[creditStyles.dashboardSubHeader, creditStyles.tinyHeader].join(" ")}>(On-Chain No Link To Carbon Registries)</scan></h4>
            <div className={[creditStyles.dashboardSubContainer, creditStyles.dashboardCreditsTable].join(" ")}>
                <div className={creditStyles.chainContainer}>
                    <table id="onchain-table" className={[creditStyles.chainTable, creditStyles.chainTxTable].join(" ")}>
                        <thead>
                            <tr className={creditStyles.tableHeader}>
                                <th>
                                    TxHash
                                </th>
                                <th>
                                    Protocol
                                </th>
                                <th>
                                    Token
                                </th>
                                <th>
                                    Method
                                </th>
                                <th>
                                    Block
                                </th>
                                <th>
                                    Date/Time
                                </th>
                                <th>
                                    From
                                </th>
                                <th>
                                    To
                                </th>
                                <th>
                                    Quantity 
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {carbonOnChainTx.map((obj, index) => {
                                if (index < carbonOnChainTx.length) 
                                    return ( 
                                        <OnChainTxTable key={index} {...obj}/>
                                    )
                                return null
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <h4 className={creditStyles.dashboardHeader}>Toucan Transactions <scan className={[creditStyles.dashboardSubHeader, creditStyles.tinyHeader].join(" ")}>(On-Chain Linked To Carbon Registries)</scan></h4>
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
                                if (index < carbonData.length) 
                                    return ( 
                                        <CarbonCreditsTable key={index} {...obj}/>
                                    )
                                return null
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default CarbonCredits;