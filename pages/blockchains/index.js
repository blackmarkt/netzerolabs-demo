import React, { useState, useEffect, useRef } from "react";
import Emissions from '../../components/blockchains/Emissions'
import ChainEmissions from '../../components/blockchains/ChainEmissions'
import styles from '../../styles/blockchains.module.css'
import { blockchainData } from '../../data/blockchainData'

const Blockchains = ({ mapData }) => {

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.dashboardMainHeader}>Blockchain Emissions</h2>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.emissionsLeftContainer}>
                    <div className={styles.chainLeftContainer}>
                        {blockchainData.map((obj, index) => {
                            // your code here
                            return <Emissions {...obj}/>
                        })}
                    </div>
                </div>
                <div className={styles.emissionsRightContainer}>

                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Emissions Activity</h4>
            <div className={styles.dashboardSubContainer}>

            </div>
            <h4 className={styles.dashboardHeader}>Carbon Offsets</h4>
            <div className={styles.dashboardSubContainer}>

            </div>
        </div>
    );
}

export default Blockchains;