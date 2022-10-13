import React, { useState, useEffect, useRef } from "react"
import styles from '../../styles/ChainEmissions.module.css'

const ChainEmissions = ( props ) => {
    return (
            <div className={styles.chainRow}>
                <div className={styles.chainLeftRow}>
                    <img className={styles.logoChain}
                        src={props.logo}
                        alt={props.chain}
                        height='25px'
                    />
                    <h4 className={styles.txtChain}>{props.chain}</h4>
                </div>
                <div className={styles.chainRightRow}>
                    <div className={styles.emissionsTxt}>{props.emissions}</div>
                    <div className={styles.emissionsUnits}>tCO&#8322;</div>
                </div>
            </div>
    );
}

export default ChainEmissions