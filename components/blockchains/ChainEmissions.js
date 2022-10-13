import React, { useState, useEffect, useRef } from "react"
import styles from '../../styles/ChainEmissions.module.css'

const ChainEmissions = ( props ) => {
    return (
            <div key="{props.id}" className={styles.chainRow}>
                 <div className={styles.chainRightContainer}>
                <div className={styles.topDashboard}>{props.emissions}</div>
                <div className={styles.subHeader}>tCO&#8322;</div>
            </div>
            </div>
    );
}

export default ChainEmissions