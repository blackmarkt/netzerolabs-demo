import Link from 'next/link'
import creditTable from '../../styles/CreditTable.module.css'
import { numberWithCommas } from '../../data/emissionsData'
import { projectTypeCats } from '../../data/carbonCreditData'

const CarbonCreditsTable = ( props ) => {
    
    return (
            <tr key={props['ID']} className={creditTable.tableRow}>
                <td className={creditTable.tableColEmission}>
                    <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer">
                        <div className={[creditTable.emissionsTxtMatte, creditTable.navChainLink].join(" ")}>
                            {props['ID']}
                        </div>
                    </a>
                </td>
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={creditTable.emissionsTxtMatte}>
                            Toucan
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
                <td>
                    <a href={`${props['Toucan Bridger']}`} target="_blank" rel="noopener noreferrer">
                        <div className={[creditTable.emissionsTxtMatte, creditTable.navChainLink].join(" ")}>
                            {props['Retirement Beneficiary']}
                        </div>
                    </a>
                </td>
            </tr>
    );
}

export default CarbonCreditsTable