import Axios from "axios";

const CoinList = ({ coinData }) => {
  console.log(coinData);
};

export const getStaticProps = async () => {
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    revalidate: 10,
  };
};

export default CoinList;