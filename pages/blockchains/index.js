import React, { useState, useEffect, useRef } from "react";
import styles from '../../styles/blockchains.module.css'
import { numberWithCommas, calculateSum, calculateMedian, emissionsData, cumEmissionsData, 
    ethereumOfficesData, txData } from '../../data/emissionsData'

const Blockchains = ({ mapData }) => {

    return (
        <div className={styles.dashboardContainer}>
            <h2 className={styles.dashboardMainHeader}>Blockchain Emissions</h2>
            <div className={styles.dashboardSubContainer}>

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