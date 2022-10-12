import React, { useState, useEffect, useRef } from "react";
import Map from '../../components/map/Map'
import Axios from "axios"
import styles from '../../styles/dashboard.module.css'
import Image from 'next/image'
import Ethereum from '../../public/blockchains/ethereum.png'
import TransactionsChart from '../../components/charts/TransactionsChart'
import CumulativeTransactionsChart from '../../components/charts/CumulativeTransactionsChart'
import { numberWithCommas, calculateSum, calculateMedian, emissionsData, cumEmissionsData, txData } from '../../data/emissionsData'

const Dashboard = ({ mapData }) => {
    const [footprint, setFootprint] = useState(0)
    const [networkFootprint, setNetworkFootprint] = useState(0)
    const [sumTransactions, setSumTransactions] = useState(0)
    const [medianDailyTx, setMedianDailyTx] = useState(0)
    const [operationEmissions, setOperationsEmissions] = useState(0)
    const [officeEmissions, setOfficeEmissions] = useState(0)
    const [transportEmissions, setTransportEmissions] = useState(0)
    const [suppliesEmissions, setSuppliesEmissions] = useState(0)
    const [miscEmissions, setMiscEmissions] = useState(0)
    // console.log('EMISSIONS DATA ', numberWithCommas(calculateSum(txData)));

    useEffect(() => {
        setFootprint(numberWithCommas(cumEmissionsData.at(-1)))
        setNetworkFootprint(numberWithCommas(cumEmissionsData.at(-1), 2))
        setSumTransactions(numberWithCommas(calculateSum(txData)))
        setMedianDailyTx(numberWithCommas(calculateMedian(txData)))
    });

    return (
        <div className={styles.dashboardContainer}>
            <h2>Ethereum
                <Image
                    src={Ethereum}
                    alt='Ethereum Logo'
                    width={38}
                    height={38}
                    margin-left={'0.5rem'}               
                />
            </h2>
            <p style={{"margin":"0"}}>0xEA123</p>
            <div className={styles.flexGrid}>
                <div className={styles.grid}>
                    <div className={styles.topDashboard}>{ footprint }</div>
                    <div className={styles.subHeader}>tCO&#8322;</div>
                    <p className={styles.subDashboard}>CO&#8322; Footprint</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.topDashboard}>0</div>
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
                            <div className={styles.subEmissionsTxt}>{ networkFootprint }</div>
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
                    <Map mapData={mapData}/>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Network</h4>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.subStatsContainer}>
                    <h4 className={styles.subHeaderTxt}>Stats</h4>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>11.57</div>
                            <div className={styles.subHeader}>tCO&#8322;</div>
                            <p className={styles.footnotes}>Median Daily tCO&#8322;</p>
                        </li>
                    </ul>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ medianDailyTx }</div>
                            {/* <div className={styles.subHeader}>Tx</div> */}
                            <p className={styles.footnotes}>Median Daily Tx</p>
                        </li>
                    </ul>
                    <hr className={styles.subHeaderDivider}></hr>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ networkFootprint }</div>
                            <div className={styles.subHeader}>tCO&#8322;</div>
                            <p className={styles.footnotes}>YTD tCO&#8322;</p>
                        </li>
                    </ul>
                    <ul className={styles.subStatsBar}>
                        <li>
                            <div className={styles.subEmissionsTxt}>{ sumTransactions }</div>
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
            <div className={styles.dashboardSubContainer}>
                <div className={styles.operationsSubContainer}>
                    <div className={styles.flexGrid}>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Offices</p>
                            <div className={styles.subOpEmissionsTxt}>{ officeEmissions }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Transportation</p>
                            <div className={styles.subOpEmissionsTxt}>{ transportEmissions }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Supplies</p>
                            <div className={styles.subOpEmissionsTxt}>{ suppliesEmissions }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                        <div className={styles.innerGrid}>
                            <p className={styles.subHeaderTxt}>Misc</p>
                            <div className={styles.subOpEmissionsTxt}>{ miscEmissions }</div>
                            <div className={styles.subOpHeader}>tCO&#8322;</div>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className={styles.dashboardHeader}>Carbon Offsets</h4>
            <div className={styles.dashboardSubContainer}>

            </div>
        </div>
    );

};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://netzerolabs.s3.us-west-1.amazonaws.com/node_tracker_geojson_100622.geojson"
  );

  return {
    props: {
        mapData: data.data,
    },
  };
};

export default Dashboard;