import Link from 'next/link'
// import React, { useState, useEffect, useRef } from "react"
import styles from '../../styles/CarbonOffsets.module.css'
import CumulativeOffsetChart from '../../components/charts/CumulativeOffsetChart'
import CarbonOffsetBreakdownChart from '../../components/charts/CarbonOffsetBreakdownChart'
import CarbonNFTs from '../blockchains/CarbonNFTs'
// import { numberWithCommas } from '../../data/emissionsData'


const CarbonOffsets = ({ offsetData }) => {

    return (
        <div className={styles.offsetsOuterContainer}>
            <div className={styles.offsetsSubLeftContainer}>
                <ul className={styles.offsetsBar}>
                    <l1>
                        {offsetData.netzero_co != null ? (<h3 className={styles.offsetsStatsTxt}>{offsetData.netzero_co}</h3>)
                        : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        {offsetData.netzero_co != null && offsetData.web3 == false && <div className={styles.offsetCryptoCo}>(Web2)</div>}
                        <div className={styles.offsetsSubTxt}>Auditor</div>
                    </l1>
                </ul>
                <ul className={styles.offsetsBar}>
                    <l1>
                        {offsetData.offsets != null ? (<div className={styles.offsetsStatsTxt}>{offsetData.offsets}<div className={styles.emissionsUnits}>tCO&#8322;e</div></div>) 
                        : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        <div className={styles.offsetsSubTxt}>Total tCO&#8322;e</div>
                    </l1>
                </ul>
                <ul className={styles.offsetsBar}>
                    <l1>
                        {offsetData.netzero_report_url != null ?
                        (<a className={styles.certLink} target="_blank" href={offsetData.netzero_report_url}>
                            <img className={styles.net0Cert}
                                src='/icons/report_ico.png'
                                alt='NetZero Report'
                                height='60px'
                                opacity='0.6'
                            />
                        </a>) : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        <div className={styles.offsetsSubTxt}>Emissions Report</div>
                    </l1>
                </ul>
                <ul className={styles.offsetsBar}>
                    <l1>
                    {offsetData.netzero_pledge != null ?
                        (<a className={styles.certLink} target="_blank" href={offsetData.netzero_report_url}>
                            <img className={styles.net0Cert}
                                src='/icons/report_ico.png'
                                alt='NetZero Report'
                                height='60px'
                                opacity='0.6'
                            />
                        </a>) : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        <div className={styles.offsetsSubTxt}>NetZero Pledge</div>
                    </l1>
                </ul>
            </div>
            <div className={styles.offsetsSubRightContainer}>
                <CumulativeOffsetChart offsetData={offsetData} />
                {offsetData.netzero_offsets_chart == null && <div className={styles.notActiveContainer}><span className={styles.notActiveTxt}>Not Active</span></div>}
            </div>
            <hr className={styles.subHeaderDivider}></hr>
            <div className={styles.offsetsSubLeftContainer}>
                <h4 className={styles.subHeader}>Carbon Assets Portfolio</h4>
                <ul className={styles.offsetsBar}>
                    <l1>
                        {offsetData.offsets_dollar != null ? (<div className={styles.offsetsStatsTxt}>{offsetData.offsets_dollar}<div className={styles.emissionsUnits}>tCO&#8322;e</div></div>) 
                        : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        <div className={styles.offsetsSubTxt}>Total Offsets (USD)</div>
                    </l1>
                </ul>
                <ul className={styles.offsetsBar}>
                    <l1>
                        {offsetData.offsets_dollar != null ? (<div className={styles.offsetsStatsTxt}>{offsetData.offsets_dollar}<div className={styles.emissionsUnits}>tCO&#8322;e</div></div>) 
                        : (<div className={[styles.subOpEmissionsTxt, styles.txtNA].join(" ")}>NA</div>)}
                        <div className={styles.offsetsSubTxt}>Total Retired tCO&#8322;e</div>
                    </l1>
                </ul>
                <div className={styles.subChartContainer}>
                    <CarbonOffsetBreakdownChart offsetData={offsetData} />
                </div>
            </div>
            <div className={styles.offsetsSubRightContainer}>
                <p className={styles.subChartHeader}>Projects</p>
                <span className={[styles.notActiveTxt, styles.txtCenter].join(" ")}>Not Active</span>
                <CarbonNFTs />
            </div>
        </div>
    )
}

export default CarbonOffsets