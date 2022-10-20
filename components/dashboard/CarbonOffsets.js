import Link from 'next/link'
// import React, { useState, useEffect, useRef } from "react"
import styles from '../../styles/CarbonOffsets.module.css'
import CumulativeOffsetChart from '../../components/charts/CumulativeOffsetChart'
// import { numberWithCommas } from '../../data/emissionsData'


const CarbonOffsets = ({ offsetData }) => {

    return (
        <div className={styles.offsetsOuterContainer}>
            <div className={styles.offsetsSubLeftContainer}>
                <ul className={styles.offsetsBar}>
                    <l1>
                        <h3 className={styles.offsetsStatsTxt}>{offsetData.netzero_co}</h3>
                        {offsetData.web3 == false && <div className={styles.offsetCryptoCo}>(Web2)</div>}
                        <div className={styles.offsetsSubTxt}>Auditor</div>
                    </l1>
                </ul>
                <ul className={styles.offsetsBar}>
                    <l1>
                        {offsetData.offsets != null ? (<div className={styles.offsetsStatsTxt}>{offsetData.offsets}<div className={styles.emissionsUnits}>tCO&#8322;</div></div>) 
                        : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        {/* {offsetData.offsets != null && <div className={styles.emissionsUnits}>tCO&#8322;</div>} */}
                        <div className={styles.offsetsSubTxt}>Total tCO&#8322;</div>
                    </l1>
                </ul>
                <ul className={styles.offsetsBar}>
                    <l1>
                        <a className={styles.certLink} target="_blank" href={offsetData.netzero_report_url}>
                            <img className={styles.net0Cert}
                                src='/icons/report_ico.png'
                                alt='NetZero Report'
                                height='60px'
                                opacity='0.6'
                            />
                        </a>
                        <div className={styles.offsetsSubTxt}>Report</div>
                    </l1>
                </ul>
            </div>
            <div className={styles.offsetsSubRightContainer}>
                <CumulativeOffsetChart offsetData={offsetData} />
            </div>
        </div>
    )
}

export default CarbonOffsets