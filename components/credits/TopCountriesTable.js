import Link from 'next/link'
import topCountriesStyles from '../../styles/TopCountriesTable.module.css'
import { numberWithCommas } from '../../data/emissionsData'


const TopCountriesTable = ( props ) => {

    return (
            <tr key={props['ID']} className={topCountriesStyles.tableRow}>
                {/* <td className={topCountriesStyles.tableColEmission}>
                    <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer">
                        <div className={[topCountriesStyles.emissionsTxtMatte, topCountriesStyles.navChainLink].join(" ")}>
                            {props.key}
                        </div>
                    </a>
                </td> */}
                <td>
                    {/* <a href={`${props['URL']}`} target="_blank" rel="noopener noreferrer"> */}
                        <div className={topCountriesStyles.emissionsTxtMatte}>
                            {props['country']}
                        </div>
                    {/* </a> */}
                </td>
                <td className={topCountriesStyles.tableColEmission}>
                    <div className={topCountriesStyles.emissionsTxtMatte}>
                        {numberWithCommas(props['y'])}
                        <div className={topCountriesStyles.emissionsUnits}>tCO&#8322;e</div>
                    </div>
                </td>
            </tr>
    );
}

export default TopCountriesTable