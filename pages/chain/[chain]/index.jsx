import { useRouter } from 'next/router'
import React, { useState, useEffect, useLayoutEffect, useContext } from "react";
import Map from '../../../components/map/Map'
import Offices from '../../../components/dashboard/Offices'
// import Axios from "axios"
import styles from '../../../styles/dashboard.module.css'
import Image from 'next/image'
// import Ethereum from '../../public/blockchains/ethereum.png'
import TransactionsChart from '../../../components/charts/TransactionsChart'
import CumulativeTransactionsChart from '../../../components/charts/CumulativeTransactionsChart'
import OperationsBreakdownChart from '../../../components/charts/OperationsBreakdownChart'
import OperationsEmissionChart from '../../../components/charts/OperationsEmissionChart'
import { numberWithCommas, calculateSum, calculateMedian } from '../../../data/emissionsData'
import { blockchainData } from '../../../data/blockchainData'

const chain = ({ chainData }) => {

    console.log('TEST ', chainData);

    // useEffect(() => {
    //     setEmissionsData(chainData.emissions)
    // }, [chainData])
    // const [chainName, setChainName] = useState(null)
    // const [emissionsData, setEmissionsData] = useState(null)
    // const [emissionsCumData, setEmissionsCumData] = useState(null)
    // const [txData, setTxData] = useState(null)
    // const [footprint, setFootprint] = useState(0)
    // const [networkFootprint, setNetworkFootprint] = useState(0)
    // const [sumTransactions, setSumTransactions] = useState(0)
    // const [medianDailyTx, setMedianDailyTx] = useState(0)
    // const [operationEmissions, setOperationsEmissions] = useState(0)
    // const [officeEmissions, setOfficeEmissions] = useState(0)
    // const [transportEmissions, setTransportEmissions] = useState(0)
    // const [suppliesEmissions, setSuppliesEmissions] = useState(0)
    // const [miscEmissions, setMiscEmissions] = useState(0)

    // useEffect(() => {
        // setChainName({chain})
        // setChainData(blockchainData)
        // setFootprint(numberWithCommas(cumEmissionsData.at(-1)))
        // setNetworkFootprint(numberWithCommas(cumEmissionsData.at(-1), 2))
        // setSumTransactions(numberWithCommas(calculateSum(txData)))
        // setMedianDailyTx(numberWithCommas(calculateMedian(txData)))
    // });

    // console.log('CHAIN DATA ', chainData)

    // console.log('EMISSIONS DATA ', numberWithCommas(calculateSum(txData)));

    // useEffect(() => {
    //     setFootprint(numberWithCommas(cumEmissionsData.at(-1)))
    //     setNetworkFootprint(numberWithCommas(cumEmissionsData.at(-1), 2))
    //     setSumTransactions(numberWithCommas(calculateSum(txData)))
    //     setMedianDailyTx(numberWithCommas(calculateMedian(txData)))
    // });

    return (
        <div className={styles.dashboardContainer}>
            <h2>{chainData.chain}
                <img className={styles.logoChain}
                    src={chainData.logo}
                    alt={chainData.chain}
                    height='40px'
                />
                {/* <Image
                    src={Ethereum}
                    alt='Ethereum Logo'
                    width={38}
                    height={38}
                    margin-left={'0.5rem'}               
                /> */}
            </h2>
            <p style={{"margin":"0"}}>0xEA123</p>
            <div className={styles.flexGrid}>
                <div className={styles.grid}>
                    <div className={styles.topDashboard}>{ chainData.emissions }</div>
                    <div className={styles.subHeader}>tCO&#8322;</div>
                    <p className={styles.subDashboard}>CO&#8322; Footprint</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.topDashboard}>{ chainData.offsets }</div>
                    <div className={styles.subHeader}>tCO&#8322;</div>
                    <p className={styles.subDashboard}>CO&#8322; Offset (tCO&#8322;)</p>
                </div>
                <div className={styles.grid}>
                    <div id='usdConvert' className={styles.topDashboard}>$0</div>
                    <div id="ethConvert" className={styles.ethContribute}></div>
                    <p className={styles.subDashboard}>CO&#8322; Offset ($)</p>
                </div>
            </div>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.subContainer}>
                    <p className={styles.subHeaderTxt}>Network</p>
                    <ul className={styles.subEmissionsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ chainData.network_emissions }</div>
                            <div className={styles.subHeader}>tCO&#8322;</div>
                            {/* <p className={styles.footnotes}>Group Validators</p> */}
                        </li>
                    </ul>
                    <hr className={styles.subHeaderDivider}></hr>
                    <p className={styles.subHeaderTxt}>Operations</p>
                    <ul className={styles.subEmissionsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>0</div>
                            <div className={styles.subHeader}>tCO&#8322;</div>
                            {/* <p className={styles.footnotes}>Group Validators</p> */}
                        </li>
                    </ul>
                </div>
                <div className={styles.subMapContainer}>
                    {/* <Map mapData={mapData}/> */}
                    <Map />
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Network</h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.subStatsContainer}>
                    <h4 className={styles.subHeaderTxt}>Stats</h4>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ chainData.emissions_stats.median}</div>
                            <div className={styles.subHeader}>tCO&#8322;</div>
                            <p className={styles.footnotes}>Median Daily tCO&#8322;</p>
                        </li>
                    </ul>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ chainData.transaction_stats.median }</div>
                            {/* <div className={styles.subHeader}>Tx</div> */}
                            <p className={styles.footnotes}>Median Daily Tx</p>
                        </li>
                    </ul>
                    <hr className={styles.subHeaderDivider}></hr>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ chainData.emissions }</div>
                            <div className={styles.subHeader}>tCO&#8322;</div>
                            <p className={styles.footnotes}>YTD tCO&#8322;</p>
                        </li>
                    </ul>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ chainData.transactions }</div>
                            {/* <div className={styles.subHeader}>tCO&#8322;</div> */}
                            <p className={styles.footnotes}>YTD Tx</p>
                        </li>
                    </ul>
                </div>
                <div className={styles.subChartContainer}>
                    <div className={styles.stackChartContainer}>
                        <TransactionsChart />
                    </div>
                    <div className={styles.stackChartContainer}>
                        <CumulativeTransactionsChart />
                    </div>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Operations</h4>
            <div className={styles.dashboardOpsSubContainer}>
                <div className={styles.operationsSubContainer}>
                    <div className={styles.flexGrid}>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Offices</p>
                            <div className={styles.subOpEmissionsTxt}>{ chainData.emissions_operations.office }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Transportation</p>
                            <div className={styles.subOpEmissionsTxt}>{ chainData.emissions_operations.transportation }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Supplies</p>
                            <div className={styles.subOpEmissionsTxt}>{ chainData.emissions_operations.supplies }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Misc</p>
                            <div className={styles.subOpEmissionsTxt}>{ chainData.emissions_operations.misc }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                    </div>
                </div>
                <div className={styles.operationsChartsContainer}>
                    <div className={styles.operationsPieChartContainer}>
                        <OperationsBreakdownChart />
                    </div>
                    <div className={styles.operationsLineChartContainer}>
                        <OperationsEmissionChart />
                    </div>
                </div>
                <div className={styles.operationsSubContainer}>
                    <div className={styles.flexOfficeGrid}>
                        {chainData.offices.map((obj, index) => {
                            // your code here
                            return <Offices {...obj}/>
                        })}
                    </div>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Carbon Offsets</h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.dashboardNotActive}></div>
                <div className={styles.notActiveContainer}>
                    <span className={styles.notActiveTxt}>Not Active</span>
                </div>
                {/* <div className={styles.test}>Test</div> */}
            </div>
        </div>
    );
}

export async function getServerSideProps(context) {
    // Fetch data from external API
    // const router = useRouter()
    const { chain } = context.query
    // let blockData = getBlockchainData()
    // let chainData = findChainData({chain, blockData})

    // async function findChainData(chainName) {
        // try {
            let chainData = null;
            // let shouldSkip = false
            blockchainData.forEach(function(value, index) {
                // console.log('CHAIN ', chainName, index)
                if (value.nav == chain ) {
                    chainData = value
                    // shouldSkip = true
                    // setChainData(value)
                    // return
                } 
            })
            // return arr
        // } catch (error) {
        //     console.log('CHAIN ERROR ', error)
        // }
    // }

    // Pass data to the page via props
    // return { props: { chainData: JSON.parse(JSON.stringify(chainData)) } }
    return { props: { chainData: chainData }}
}

export default chain;