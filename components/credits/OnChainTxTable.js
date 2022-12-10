import Link from 'next/link'
import React, { useEffect } from "react";
import creditTable from '../../styles/CreditTable.module.css'
import { numberWithCommas } from '../../data/emissionsData'
import { projectTypeCats } from '../../data/carbonCreditData'

const OnChainTxTable = ( props ) => {

    function truncateStr(s, num=12) {
        let trunc = s.toString().substr(0, num) + "\u2026";
        return trunc
    }

    function truncateQty(s, num=8) {
        let trunc = s.toString().substr(0, num);
        return trunc
    }

    const openExternalLink = url => {
        window.open(url, '_blank', 'noopener,noreferrer')
    }
    
    return (
            // <tr key={props['Txhash']} className={[creditTable.tableRow, creditTable.navChainLink].join(" ")}>
            <tr key={props['Txhash']} className={[creditTable.tableRow, creditTable.navChainLink].join(" ")} onClick={() => openExternalLink(props['TX_URL'])}> 
                <td className={creditTable.tableColEmission}>
                    {/* <a href={`${props['TX_URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={creditTable.emissionsTxtMatte}>
                            {truncateStr(props['Txhash'])}
                        </div>
                    {/* </a> */}
                </td>
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={creditTable.emissionsTxtMatte}>
                            {props['Protocol']}
                        </div>
                    {/* </a> */}
                </td>
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={creditTable.emissionsTxtMatte}>
                            {props['Token']}
                        </div>
                    {/* </a> */}
                </td>
                <td className={creditTable.tableColEmission}>
                    <div className={creditTable.emissionsTxtMatte}>
                        {props['Method']}
                    </div>
                </td>
                <td>
                    <a href={`${props['BLOCK_TO_URL']}`} target="_blank" rel="noopener noreferrer">
                    <div className={[creditTable.emissionsTxtMatte, creditTable.navChainLink].join(" ")}>
                            {props['Block']}
                        </div>
                    </a>
                </td>
                <td>
                    <div className={creditTable.emissionsTxtMatte}>
                        {props['DateTime']}
                    </div>
                </td>
                <td>
                    <a href={`${props['TOKEN_FROM_URL']}`} target="_blank" rel="noopener noreferrer">
                        <div className={[creditTable.emissionsTxtMatte, creditTable.navChainLink].join(" ")}>
                            {truncateStr(props['From'])}
                        </div>
                    </a>
                </td>
                <td>
                    <a href={`${props['TOKEN_TO_URL']}`} target="_blank" rel="noopener noreferrer">
                        <div className={[creditTable.emissionsTxtMatte, creditTable.navChainLink].join(" ")}>
                            {truncateStr(props['To'])}
                        </div>
                    </a>
                </td>
                <td className={creditTable.tableColEmission}>
                    <div className={creditTable.emissionsTxtMatte}>
                        {truncateQty(props['Quantity'], 6)}
                    </div>
                    <div className={creditTable.emissionsUnits}>tCO&#8322;e</div>
                </td>
            </tr>
    );
}

export default OnChainTxTable