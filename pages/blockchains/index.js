import React, { useState, useEffect, useRef } from "react";
import Emissions from '../../components/blockchains/Emissions'
import BlockchainEmissionsChart from '../../components/charts/BlockchainEmissionsChart'
import CumulativeBlockchainEmissionsChart from '../../components/charts/CumulativeBlockchainEmissionsChart'
import styles from '../../styles/blockchains.module.css'
import { blockchainData } from '../../data/blockchainData'

const Blockchains = () => {

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
                                    <th></th>
                                    <th>
                                        Chain
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
                                {blockchainData.map((obj, index) => {
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
        </div>
    );
}

export default Blockchains;