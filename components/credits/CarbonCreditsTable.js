import Link from 'next/link'
import React, { useEffect } from "react";
import creditTable from '../../styles/CreditTable.module.css'
import { numberWithCommas } from '../../data/emissionsData'
import { projectTypeCats } from '../../data/carbonCreditData'

const CarbonCreditsTable = ( props ) => {

    function truncateStr(s, num=20) {
        let trunc = s.toString().substr(0, num) + "\u2026";
        return trunc
    }

    const openExternalLink = url => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    
    return (
            <tr key={props['ID']} className={[creditTable.tableRow, creditTable.navChainLink].join(" ")} onClick={() => openExternalLink(props['URL'])}>
                <td className={creditTable.tableColEmission}>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                    <div className={creditTable.emissionsTxtMatte}>
                        {props['ID']}
                    </div>
                    {/* </a> */}
                </td>
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={creditTable.emissionsTxtMatte}>
                            {props['Provider']}
                        </div>
                    {/* </a> */}
                </td>
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={creditTable.emissionsTxtMatte}>
                            {projectTypeCats[props['Project Type']]}
                        </div>
                    {/* </a> */}
                </td>
                <td className={creditTable.tableColEmission}>
                    <div className={creditTable.emissionsTxtMatte}>
                        {props['Country']}
                    </div>
                </td>
                <td>
                    <div className={creditTable.emissionsTxtMatte}>
                        {props['Issuance Date']}
                    </div>
                </td>
                <td>
                    <div className={creditTable.emissionsTxtMatte}>
                        {numberWithCommas(props['Quantity'])}
                    </div>
                    <div className={creditTable.emissionsUnits}>tCO&#8322;e</div>
                </td>
                <td className={creditTable.tableColEmission}>
                    <div className={creditTable.emissionsTxtMatte}>
                        {props['Retirement/Cancellation Date']}
                    </div>
                </td>
                {props['Retirement Beneficiary'] != 'NA' ? (
                    <td>
                        <a href={`${props['Toucan Bridger']}`} target="_blank" rel="noopener noreferrer">
                            <div className={[creditTable.emissionsTxtMatte, creditTable.navChainLink].join(" ")}>
                                {truncateStr(props['Retirement Beneficiary'])}
                            </div>
                        </a>
                    </td>
                ) : (
                    <td>
                        <div className={creditTable.emissionsTxtMatte}>
                            {props['Retirement Beneficiary']}
                        </div>
                    </ td>
                )}
            </tr>
    );
}

export default CarbonCreditsTable