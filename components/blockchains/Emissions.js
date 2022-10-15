import Link from 'next/link'
import React, { useState, useEffect, useRef } from "react"
import styles from '../../styles/ChainEmissions.module.css'
import { numberWithCommas } from '../../data/emissionsData'


const ChainEmissions = ( props ) => {

    return (
            // { props.rowClass == "tableOdd"
            //     ? <tr className={styles.tableOdd}>
            //     : (<tr>)
            // }
            // {props.id % 2 == 0 ? (
            //     <tr className={styles.tableOdd}>
            //   ) : (
            //     <tr>
            // )}
            <Link href={`/chain/${props.nav}`}>
            <tr className={styles.navChainLink}>
                <td>
                    <img className={styles.logoChain}
                        src={props.logo}
                        alt={props.chain}
                        height='25px'
                    />
                </td>
                <td>
                {props.chain == 'Ethereum' ? (<h4 className={styles.txtChain}>{props.chain}&#42;</h4>)
                : (<h4 className={styles.txtChain}>{props.chain}</h4>)
                }
                </td>
                    {/* <div className={styles.emissionsTxt}>{props.emissions}</div> */}
                    {/* <div className={styles.emissionsUnits}>tCO&#8322;</div> */}
                {props.netzero == true ? (
                    <td className={styles.tableColCert}>  
                    <img className={styles.net0Cert}
                        src='/certification/netzero_cert.png'
                        alt='NetZero Certified'
                        height='25px'
                    /></td>
                ) : (
                    <td className={styles.tableColCertNA}>  
                    <div className={styles.emissionsTxtMatte}>NA</div>
                    </td>
                )}
                <td className={styles.tableColEmission}>
                    {props.emissions != null ? (<div className={styles.emissionsTxt}>{props.emissions}</div>) 
                    : (<div className={[styles.emissionsTxt, styles.emissionsTxtMatte].join(" ")}>NA</div>)}
                    {props.emissions != null && <div className={styles.emissionsUnits}>tCO&#8322;</div>}
                </td>
                <td className={styles.tableColEmission}>
                    {props.offsets != null ? (<div className={styles.emissionsTxt}>{props.offsets}</div>) 
                    : (<div className={[styles.emissionsTxt, styles.emissionsTxtMatte].join(" ")}>NA</div>)}
                    {props.offsets != null && <div className={styles.emissionsUnits}>tCO&#8322;</div>}
                </td>
                <td className={styles.tableColEmission}>
                    {props.transactions_sum != null ? (<div className={[styles.emissionsTxtMatte, styles.emissionsTxtTx].join(" ")}>{props.transactions_sum}</div>) 
                    : (<div className={[styles.emissionsTxtMatte, styles.emissionsTxtTx].join(" ")}>NA</div>)}
                </td>
                <td className={styles.tableColEmission}>
                    {/* <div className={styles.emissionsTxtMatte}>{props.network_emissions}</div> */}
                    {props.network_emissions != null ? (<div className={styles.emissionsTxtMatte}>{props.network_emissions}</div>) 
                    : (<div className={styles.emissionsTxtMatte}>NA</div>)}
                    {props.network_emissions != null && <div className={styles.emissionsUnitsMatte}>tCO&#8322;</div>}
                </td>
                <td className={styles.tableColEmission}>
                    <div className={styles.emissionsTxtMatte}>{props.operation_emissions}</div>
                    {/* <div className={styles.emissionsUnitsMatte}>tCO&#8322;</div> */}
                    {props.operation_emissions != null ? (<div className={styles.emissionsTxtMatte}>{props.operation_emissions}</div>) 
                    : (<div className={styles.emissionsTxtMatte}>NA</div>)}
                    {props.operation_emissions != null && <div className={styles.emissionsUnitsMatte}>tCO&#8322;</div>}
                </td>
            </tr>
            </Link>
    );
}

export default ChainEmissions