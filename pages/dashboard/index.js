import Map from '../../components/map/Map';
import Axios from "axios";
import styles from '../../styles/dashboard.module.css';
import Image from 'next/image';
import Ethereum from '../../public/blockchains/ethereum.png';

const Dashboard = ({ mapData }) => {

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
            <p>0xEA123</p>
            <div className={styles.flexGrid}>
                <div className={styles.grid}>
                    <div className={styles.topDashboard}>2,000</div>
                    <div className={styles.subHeader}>tCO&#8322;</div>
                    <p className={styles.subDashboard}>CO&#8322; Footprint</p>
                </div>
                <div className={styles.grid}>
                    <div id='usdConvert' className={styles.topDashboard}>$10,000</div>
                    <div id="ethConvert" className={styles.ethContribute}></div>
                    <p className={styles.subDashboard}>CO&#8322; Offset ($)</p>
                </div>
                <div className={styles.grid}>
                    <div className={styles.topDashboard}>0</div>
                    <div className={styles.subHeader}>tCO&#8322;</div>
                    <p className={styles.subDashboard}>CO&#8322; Offset (tCO&#8322;)</p>
                </div>
            </div>
            <div className={styles.dashboardSubContainer}>
                <div className={styles.subContainer}>

                </div>
                <div className={styles.subMapContainer}>
                    <Map mapData={mapData}/>
                </div>
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