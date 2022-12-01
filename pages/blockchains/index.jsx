import React, { useState, useEffect, useRef } from "react";
import Emissions from '../../components/blockchains/Emissions'
import BlockchainEmissionsChart from '../../components/charts/BlockchainEmissionsChart'
import CumulativeBlockchainEmissionsChart from '../../components/charts/CumulativeBlockchainEmissionsChart'
import CumulativeBlockchainOffsetChart from '../../components/charts/CumulativeBlockchainOffsetChart'
import BlockchainEmissionsPieChart from '../../components/charts/BlockchainEmissionsPieChart'
import CarbonOffsetBreakdownChart from "../../components/charts/CarbonOffsetBreakdownChart";
import styles from '../../styles/Blockchains.module.css'
import { getBlockchainData, getL1TotalEmissions, getL1TotalOffsets } from '../../data/blockchainData'

const Blockchains = () => {
    const [chainData, setChainData] = useState(getBlockchainData)
    const [totalL1Emissions, setTotalL1Emissions] = useState(getL1TotalEmissions)
    const [totalL1Offsets, setTotalL1Offsets] = useState(getL1TotalOffsets)

    // console.log('CHAIN DATA ', chainData)

    return (
        <div className={styles.dashboardContainer}>
            <div className={styles.dashboardLeftHeader}>
                <h2 className={styles.dashboardMainHeader}>Blockchain (L1) Emissions Tracker</h2>
                <p style={{"margin":"0", "padding": "0rem"}}>Last Updated 11/29/22</p>
            </div>
            <div className={styles.dashboardRightHeader}>
                <a href="https://www.notion.so/blackmarkt/Carbon-Accounting-Methodology-b2e03be009a945f680592ec7563107d6" target="_blank" rel="noopener noreferrer">
                    <p style={{"margin":"0", "padding": "0rem"}}>Methodology</p>
                </a>
            </div>
            <div className={styles.dashboardHeaderContainer}>
                <div className={`${styles.grid} ${styles.dashboardHeadSubContainer}`}>
                    <div className={`${styles.topDashboard} ${styles.totalEmissionsTxt}`}>{totalL1Emissions}</div>
                    <div className={styles.emissionsUnits}>tCO&#8322;e</div>
                    <p className={styles.subDashboard}>Total L1 Emissions (YTD)</p>
                </div>
                <div className={`${styles.grid} ${styles.dashboardHeadSubContainer}`}>
                    <div className={`${styles.topDashboard} ${styles.totalOffsetTxt}`}>{totalL1Offsets}</div>
                    <div className={styles.emissionsUnits}>tCO&#8322;e</div>
                    <p className={styles.subDashboard}>Total L1 Offsets (YTD)</p>
                </div>      
            </div>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.chainContainer}>
                    <table className={styles.chainTable}>
                        <thead>
                            <tr className={styles.tableHeader}>
                                <th height="50"></th>
                                <th>
                                    Chain
                                </th>
                                <th>
                                    NetZero Pledge
                                </th>
                                <th>
                                    Emissions Report
                                    <p className={styles.subHeadHeader}>(2022)</p>
                                </th>
                                <th>
                                    Total Emissions
                                    <p className={styles.subHeadHeader}>(YTD)</p>
                                </th>
                                <th>
                                    Carbon Offsets
                                    <p className={styles.subHeadHeader}>(YTD)</p>
                                </th>
                                <th>
                                    Transactions
                                    <p className={styles.subHeadHeader}>(YTD)</p>
                                </th>
                                <th>
                                    Validators
                                    <p className={styles.subHeadHeader}>(Count)</p>
                                </th>
                                <th>
                                    Network Emissions
                                    <p className={styles.subHeadHeader}>(YTD)</p>
                                </th>
                                <th>
                                    Operation Emissions
                                    <p className={styles.subHeadHeader}>(YTD)</p>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {chainData.map((obj, index) => {
                                // your code here
                                return <Emissions key={index} {...obj}/>
                            })}
                        </tbody>
                    </table>
                </div>
                <p className={[styles.footNote, styles.testnetNote].join(" ")}>Does not include Testnets</p>
            </div>
            <p className={styles.footNote}>&#42; Ethereum merge on 9/15/22</p>
            <h4 className={styles.dashboardHeader}>Network Emissions <span className={styles.subDashboardHeader}>(Scope 2)</span></h4>
            <div className={styles.dashboardChartSubContainer}>
                <div className={styles.emissionsChartContainer}>
                    <div className={styles.emissionsChartContainer}>
                        <BlockchainEmissionsChart chartData={chainData}/>
                    </div>
                    <div className={styles.emissionsChartContainer}>
                        <CumulativeBlockchainEmissionsChart chartData={chainData}/>
                    </div>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Carbon Offsets</h4>
            <div className={[styles.dashboardSubContainer, styles.dashboardOffsetsSubContainer].join(" ")}>
                <div className={styles.subLeftContainer}>
                    <CarbonOffsetBreakdownChart offsetData={chainData}/>
                </div>
                <div className={styles.subRightContainer}>
                    <div className={styles.emissionsChartContainer}>
                        <CumulativeBlockchainOffsetChart offsetData={chainData}/>
                    </div>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Operations Emissions <span className={styles.subDashboardHeader}>(Scope 3)</span></h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.notActiveContainer}>
                    <span className={styles.notActiveTxt}>Not Active</span>
                </div>
            </div>
        </div>
    );
}

export default Blockchains;