import Link from 'next/link'
import topTypeStyles from '../../styles/TopCountriesTable.module.css'
import { numberWithCommas } from '../../data/emissionsData'
// import { projectTypeCats } from '../../data/carbonCreditData'

const TopCarbonTypeTable = ( props ) => {

    return (
            <tr key={props['ID']} className={topTypeStyles.tableRow}>
                {/* <td className={topTypeStyles.tableColEmission}>
                    <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer">
                        <div className={[topTypeStyles.emissionsTxtMatte, topTypeStyles.navChainLink].join(" ")}>
                            {props.key}
                        </div>
                    </a>
                </td> */}
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={topTypeStyles.emissionsTxtMatte}>
                            {props['type']}
                        </div>
                    {/* </a> */}
                </td>
                <td className={topTypeStyles.tableColEmission}>
                    <div className={topTypeStyles.emissionsTxtMatte}>
                        {numberWithCommas(props['y'])}
                        <div className={topTypeStyles.emissionsUnits}>tCO&#8322;e</div>
                    </div>
                </td>
            </tr>
    );
}

export default TopCarbonTypeTable