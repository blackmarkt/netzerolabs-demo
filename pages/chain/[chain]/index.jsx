// import { useRouter } from 'next/router'
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Map from '../../../components/map/Map'
import Offices from '../../../components/dashboard/Offices'
import CarbonOffsets from '../../../components/dashboard/CarbonOffsets'
// import Axios from "axios"
import dashboardStyles from '../../../styles/dashboard.module.css'
import Image from 'next/image'
// import Ethereum from '../../public/blockchains/ethereum.png'
import TransactionsChart from '../../../components/charts/TransactionsChart'
import CumulativeTransactionsChart from '../../../components/charts/CumulativeTransactionsChart'
import OperationsBreakdownChart from '../../../components/charts/OperationsBreakdownChart'
import OperationsEmissionChart from '../../../components/charts/OperationsEmissionChart'
import CumulativeBlockchainOffsetChart from '../../../components/charts/CumulativeBlockchainOffsetChart'
// import { numberWithCommas, calculateSum, calculateMedian } from '../../../data/emissionsData'
import { blockchainData } from '../../../data/blockchainData'

const chain = ({ chainData }) => {

    return (
        <div className={dashboardStyles.dashboardContainer}>
            <h2>{chainData.chain}
                <img className={dashboardStyles.logoChain}
                    src={chainData.logo}
                    alt={chainData.chain}
                    height='35px'
                />
                {chainData.netzero == true && chainData.netzero_cert.web3 == false && <img className={dashboardStyles.netzeroCert} src='../certification/netzero_cert.png'
                    alt={chainData.chain}
                    height='25px' />}
            </h2>
            <a href={`${chainData.website}`} target="_blank" rel="noopener noreferrer">
                <p style={{"margin":"0 0 0.3rem"}}>{chainData.website}</p>
            </a>
            <div className={dashboardStyles.flexGrid}>
                <div className={`${dashboardStyles.grid} ${dashboardStyles[chainData.nav]}`}>
                    {chainData.emissions != null ? (<div className={[dashboardStyles.topDashboard, dashboardStyles.totalEmissionsTxt].join(" ")}>{chainData.emissions}</div>) 
                    : (<div className={[dashboardStyles.topDashboard, dashboardStyles.txtNA, dashboardStyles.totalEmissionsTxt, dashboardStyles.pulsate].join(" ")}>NA</div>)}
                    {chainData.emissions != null && <div className={dashboardStyles.subHeader}>tCO&#8322;e</div>}
                    <p className={dashboardStyles.subDashboard}>CO&#8322; Footprint</p>
                </div>
                <div className={`${dashboardStyles.grid} ${dashboardStyles[chainData.nav]}`}>
                    {chainData.offsets != null ? (<div className={[dashboardStyles.topDashboard, dashboardStyles.totalOffsetTxt].join(" ")}>{chainData.offsets}</div>) 
                    : (<div className={[dashboardStyles.topDashboard, dashboardStyles.txtNA, dashboardStyles.totalEmissionsTx, dashboardStyles.pulsate].join(" ")}>NA</div>)}
                    {chainData.offsets != null && <div className={dashboardStyles.subHeader}>tCO&#8322;e</div>}
                    <p className={dashboardStyles.subDashboard}>CO&#8322; Offset (tCO&#8322;e)</p>
                </div>
                <div className={`${dashboardStyles.grid} ${dashboardStyles[chainData.nav]}`}>
                    <div id='usdConvert' className={[dashboardStyles.topDashboard, dashboardStyles.txtNA, dashboardStyles.totalEmissionsTx, dashboardStyles.pulsate].join(" ")}v>NA</div>
                    <div id="ethConvert" className={dashboardStyles.ethContribute}></div>
                    <p className={dashboardStyles.subDashboard}>CO&#8322; Offset ($)</p>
                </div>
            </div>
            <div className={`${dashboardStyles.dashboardSubContainer} ${dashboardStyles[chainData.nav]}`}>
                <div className={dashboardStyles.subContainer}>
                <p className={dashboardStyles.subHeaderTxt}>Validator Count</p>
                    <ul className={dashboardStyles.subEmissionsBar}>
                        <li>
                            {chainData.node_data.total_nodes != null ? (<div className={dashboardStyles.subEmissionsHeader}>{chainData.node_data.total_nodes}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                        </li>
                    </ul>
                    <p className={dashboardStyles.subHeaderTxt}>Network</p>
                    <ul className={dashboardStyles.subEmissionsBar}>
                        <li>
                            {/* <div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>{ chainData.network_emissions }</div> */}
                            {chainData.network_emissions != null ? (<div className={dashboardStyles.subEmissionsHeader}>{chainData.network_emissions}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {/* <div className={dashboardStyles.subHeader}>tCO&#8322;e</div> */}
                            {chainData.network_emissions != null && <div className={dashboardStyles.subHeader}>tCO&#8322;e</div>}
                            {/* <p className={dashboardStyles.footnotes}>Group Validators</p> */}
                        </li>
                    </ul>
                    <hr className={dashboardStyles.subHeaderDivider}></hr>
                    <p className={dashboardStyles.subHeaderTxt}>Operations</p>
                    <ul className={dashboardStyles.subEmissionsBar}>
                        <li>
                            {/* <div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>0</div> */}
                            {chainData.operation_emissions != null ? (<div className={dashboardStyles.subEmissionsHeader}>{chainData.operation_emissions}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {/* <div className={dashboardStyles.subHeader}>tCO&#8322;e</div> */}
                            {chainData.operation_emissions != null && <div className={dashboardStyles.subHeader}>tCO&#8322;e</div>}
                            {/* <p className={dashboardStyles.footnotes}>Group Validators</p> */}
                        </li>
                    </ul>
                </div>
                <div className={dashboardStyles.subMapContainer}>
                    {/* <Map mapData={mapData}/> */}
                    <Map mapData={chainData.node_map_data}/>
                </div>
            </div>
            <h4 className={dashboardStyles.dashboardHeader}>Network <span className={dashboardStyles.subDashboardHeader}>(Scope 2)</span></h4>
            <div className={`${dashboardStyles.dashboardSubContainer} ${dashboardStyles[chainData.nav]}`}>
                <div className={dashboardStyles.subStatsContainer}>
                    <h4 className={dashboardStyles.subHeaderTxt}>Stats</h4>
                    <ul className={dashboardStyles.subStatsBar}>
                        <li>
                            {/* <div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>{ chainData.emissions_stats.median}</div> */}
                            {chainData.emissions_stats.median != null ? (<div className={dashboardStyles.subEmissionsTxt}>{chainData.emissions_stats.median}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {/* <div className={dashboardStyles.subHeader}>tCO&#8322;e</div> */}
                            {chainData.emissions_stats.median != null && <div className={dashboardStyles.subHeader}>tCO&#8322;e</div>}
                            <p className={dashboardStyles.footnotes}>Median Daily</p>
                        </li>
                    </ul>
                    <ul className={dashboardStyles.subStatsBar}>
                        <li>
                            {chainData.transaction_stats.median != null ? (<div className={dashboardStyles.subEmissionsTxt}>{chainData.transaction_stats.median}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            <p className={dashboardStyles.footnotes}>Median Daily Tx</p>
                        </li>
                    </ul>
                    <hr className={dashboardStyles.subHeaderDivider}></hr>
                    <ul className={dashboardStyles.subStatsBar}>
                        <li>
                            {chainData.emissions != null ? (<div className={dashboardStyles.subEmissionsTxt}>{chainData.emissions}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {chainData.emissions != null && <div className={dashboardStyles.subHeader}>tCO&#8322;e</div>}
                            <p className={dashboardStyles.footnotes}>YTD</p>
                        </li>
                    </ul>
                    <ul className={dashboardStyles.subStatsBar}>
                        <li>
                            {chainData.transactions_sum != null ? (<div className={dashboardStyles.subEmissionsTxt}>{chainData.transactions_sum}</div>) 
                            : (<div className={[dashboardStyles.subEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            <p className={dashboardStyles.footnotes}>YTD Tx</p>
                        </li>
                    </ul>
                </div>
                <div className={dashboardStyles.subChartContainer}>
                    <div className={dashboardStyles.stackChartContainer}>
                        <TransactionsChart chartData={chainData}/>
                    </div>
                    <div className={dashboardStyles.stackChartContainer}>
                        <CumulativeTransactionsChart chartData={chainData}/>
                    </div>
                </div>
            </div>
            <h4 className={dashboardStyles.dashboardHeader}>Operations <span className={dashboardStyles.subDashboardHeader}>(Scope 3)</span></h4>
            <div className={`${dashboardStyles.dashboardOpsSubContainer} ${dashboardStyles[chainData.nav]}`}>
                <div className={dashboardStyles.operationsSubContainer}>
                    <div className={dashboardStyles.flexGridOps}>
                        <div className={dashboardStyles.innerGrid}>
                            <p className={dashboardStyles.subHeaderOpsTxt}>Offices</p>
                            {chainData.emissions_operations.office != null ? (<div className={dashboardStyles.subOpEmissionsTxt}>{chainData.emissions_operations.office}</div>) 
                            : (<div className={[dashboardStyles.subOpEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {chainData.emissions_operations.office != null && <div className={dashboardStyles.subOpHeader}>tCO&#8322;e</div>}
                        </div>
                        <div className={dashboardStyles.innerGrid}>
                            <p className={dashboardStyles.subHeaderOpsTxt}>Transport</p>
                            {chainData.emissions_operations.transportation != null ? (<div className={dashboardStyles.subOpEmissionsTxt}>{chainData.emissions_operations.transportation}</div>) 
                            : (<div className={[dashboardStyles.subOpEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {chainData.emissions_operations.transportation != null && <div className={dashboardStyles.subOpHeader}>tCO&#8322;e</div>}
                        </div>
                        <div className={dashboardStyles.innerGrid}>
                            <p className={dashboardStyles.subHeaderOpsTxt}>Supplies</p>
                            {chainData.emissions_operations.supplies != null ? (<div className={dashboardStyles.subOpEmissionsTxt}>{chainData.emissions_operations.supplies}</div>) 
                            : (<div className={[dashboardStyles.subOpEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {chainData.emissions_operations.supplies != null && <div className={dashboardStyles.subOpHeader}>tCO&#8322;e</div>}
                        </div>
                        <div className={dashboardStyles.innerGrid}>
                            <p className={dashboardStyles.subHeaderOpsTxt}>Misc</p>
                            {chainData.emissions_operations.misc != null ? (<div className={dashboardStyles.subOpEmissionsTxt}>{chainData.emissions_operations.misc}</div>) 
                            : (<div className={[dashboardStyles.subOpEmissionsTxt, dashboardStyles.txtNA].join(" ")}>NA</div>)}
                            {chainData.emissions_operations.misc != null && <div className={dashboardStyles.subOpHeader}>tCO&#8322;e</div>}
                        </div>
                    </div>
                </div>
                <div className={dashboardStyles.operationsChartsContainer}>
                    <div className={dashboardStyles.operationsPieChartContainer}>
                        <OperationsBreakdownChart chartData={chainData}/>
                    </div>
                    <div className={dashboardStyles.operationsLineChartContainer}>
                        <OperationsEmissionChart chartData={chainData}/>
                    </div>
                </div>
                <div className={dashboardStyles.operationsSubContainer}>
                    {chainData.offices.length > 0 && 
                        <div className={dashboardStyles.flexOfficeGrid}>
                            {chainData.offices.map((obj, index) => {
                                // your code here
                                return <Offices key={index} {...obj}/>
                            })}
                        </div>
                    }
                </div>
            </div>
            <h4 className={dashboardStyles.dashboardHeader}>Carbon Offsets</h4>
            <div className={`${dashboardStyles.dashboardOffsetContainer} ${dashboardStyles[chainData.nav]}`}>
                <CarbonOffsets offsetData={chainData.netzero_cert} />
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    const { chain } = context.query

    let chainData = null;
    blockchainData.forEach(function(value, index) {
        if (value.nav == chain ) {
            chainData = value
        } 
    })
    
    return { props: { chainData: chainData }}
}

export default chain;