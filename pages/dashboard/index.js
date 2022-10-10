import Map from '../../components/map/Map';
import Axios from "axios";
import styles from '../../styles/dashboard.module.css';
import Image from 'next/image';
import Ethereum from '../../public/blockchains/ethereum.png';

const Dashboard = ({ mapData }) => {

    return (
        <div>
            <h1>Ethereum
                <Image
                    src={Ethereum}
                    alt='Ethereum Logo'
                    width={50}
                    height={50}                
                />
                </h1>
            <p>0xEA123</p>
            <div className={styles.flexGrid}>
                <div className={styles.grid}>
                </div>
                <div className={styles.grid}>
                </div>
                <div className={styles.grid}>
                </div>
            </div>
            <div className={styles.dashboardContainer}>
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
    // revalidate: 10,
  };
};

export default Dashboard;