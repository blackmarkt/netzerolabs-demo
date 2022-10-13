import React, { useState, useEffect, useRef } from "react"
import styles from '../../styles/ChainEmissions.module.css'

const ChainEmissions = ( props ) => {
    return (
            <tr className={props.row}>
                <td>
                    <img className={styles.logoChain}
                        src={props.logo}
                        alt={props.chain}
                        height='25px'
                    />
                </td>
                <td>
                    <h4 className={styles.txtChain}>{props.chain}</h4>
                </td>
                <td className={styles.tableColEmission}>
                    <div className={styles.emissionsTxt}>{props.emissions}</div>
                    <div className={styles.emissionsUnits}>tCO&#8322;</div>
                </td>
                <td className={styles.tableColEmission}>
                    <div className={styles.emissionsTxt}>{props.offsets}</div>
                    <div className={styles.emissionsUnits}>tCO&#8322;</div>
                </td>
                <td className={styles.tableColEmission}>
                    <div className={styles.emissionsTxtMatte}>{props.transactions}</div>
                    {/* <div className={styles.emissionsUnits}>tCO&#8322;</div> */}
                </td>
                <td className={styles.tableColEmission}>
                    <div className={styles.emissionsTxtMatte}>{props.network_emissions}</div>
                    <div className={styles.emissionsUnitsMatte}>tCO&#8322;</div>
                </td>
                <td className={styles.tableColEmission}>
                    <div className={styles.emissionsTxtMatte}>{props.operation_emissions}</div>
                    <div className={styles.emissionsUnitsMatte}>tCO&#8322;</div>
                </td>
            </tr>
    );
}

export default ChainEmissions