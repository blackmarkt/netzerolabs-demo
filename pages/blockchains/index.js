import React, { useState, useEffect, useRef } from "react";
import Emissions from '../../components/blockchains/Emissions'
import BlockchainEmissionsChart from '../../components/charts/BlockchainEmissionsChart'
import CumulativeBlockchainEmissionsChart from '../../components/charts/CumulativeBlockchainEmissionsChart'
import styles from '../../styles/blockchains.module.css'
import { getBlockchainData } from '../../data/blockchainData'

const Blockchains = () => {
    const [chainData, setChainData] = useState(getBlockchainData)

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.dashboardMainHeader}>Blockchain Emissions</h2>
            {/* <h4 className={styles.dashboardHeader}>Total Emissions</h4> */}
            <div className={styles.dashboardSubContainer}>
                {/* <div className={styles.emissionsLeftContainer}> */}
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
                                    </th>
                                    <th>
                                        Carbon Offsets
                                    </th>
                                    <th>
                                        Transactions
                                    </th>
                                    <th>
                                        Network Emissions
                                    </th>
                                    <th>
                                        Operation Emissions
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
                {/* </div> */}
                {/* <div className={styles.emissionsRightContainer}>
                    <div className={styles.emissionsChartContainer}>
                        <BlockchainEmissionsChart />
                    </div>
                    <div className={styles.emissionsChartContainer}>
                        <CumulativeBlockchainEmissionsChart />
                    </div>
                </div> */}
            </div>
            <p className={styles.footNote}>&#42; Ethereum since the merge on 9/15/22</p>
            <h4 className={styles.dashboardHeader}>Network Emissions</h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.emissionsChartContainer}>
                    <BlockchainEmissionsChart />
                </div>
                <div className={styles.emissionsChartContainer}>
                    <CumulativeBlockchainEmissionsChart />
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Operations Emissions</h4>
            <div className={styles.dashboardSubContainer}>
                
            </div>
            <h4 className={styles.dashboardHeader}>Carbon Offsets</h4>
            <div className={styles.dashboardSubContainer}>
                
            </div>
        </div>
    );
}

export default Blockchains;