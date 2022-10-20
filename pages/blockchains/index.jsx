import React, { useState, useEffect, useRef } from "react";
import Emissions from '../../components/blockchains/Emissions'
import BlockchainEmissionsChart from '../../components/charts/BlockchainEmissionsChart'
import CumulativeBlockchainEmissionsChart from '../../components/charts/CumulativeBlockchainEmissionsChart'
import CumulativeBlockchainOffsetChart from '../../components/charts/CumulativeBlockchainOffsetChart'
import styles from '../../styles/blockchains.module.css'
import { getBlockchainData } from '../../data/blockchainData'

const Blockchains = () => {
    const [chainData, setChainData] = useState(getBlockchainData)

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.dashboardMainHeader}>Blockchain (L1) Emissions</h2>
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
                                    NetZero
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
                                return <Emissions {...obj}/>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
            <p className={styles.footNote}>&#42; Ethereum since the merge on 9/15/22</p>
            <h4 className={styles.dashboardHeader}>Network Emissions</h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.emissionsChartContainer}>
                    <BlockchainEmissionsChart chartData={chainData}/>
                </div>
                <div className={styles.emissionsChartContainer}>
                    <CumulativeBlockchainEmissionsChart chartData={chainData}/>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Operations Emissions</h4>
            <div className={styles.dashboardSubContainer}>
            </div>
            <h4 className={styles.dashboardHeader}>Carbon Offsets</h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.emissionsChartContainer}>
                    <CumulativeBlockchainOffsetChart offsetData={chainData}/>
                </div>
            </div>
        </div>
    );
}

export default Blockchains;