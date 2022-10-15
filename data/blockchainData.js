import { numberWithCommas, dateUnixLabels, txData, calculateSum, cumEmissionsData, 
    celoCumEmissionData, celoTxDailyData, bitcoinUnixData, btcTxData, calculateTxTCO2, 
    combineUnixDataArr, combineUnixFauxDataArr, dateUnixCelo, emissionsData,
    celoEmissionsDailyData, calculateMedian, ethereumOfficesData} from './emissionsData'

const blockchainData = [
    {chain: 'Bitcoin', 
    logo: '/blockchains/bitcoin_50x50.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: bitcoinUnixData,
    emissions: numberWithCommas(calculateTxTCO2(btcTxData, 'cum')),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(calculateTxTCO2(btcTxData, 'daily'))),
        sum: numberWithCommas(calculateSum(calculateTxTCO2(btcTxData, 'daily')))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions: numberWithCommas(calculateSum(btcTxData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(btcTxData, 'daily')),
        sum: numberWithCommas(calculateSum(btcTxData, 'daily'))
    },
    network_emissions: numberWithCommas(calculateTxTCO2(btcTxData, 'cum')),
    operation_emissions:null,
    color: '#E78B1A',
    id: 0,
    row: 'tableOdd',
    nav: 'bitcoin',
    netzero: false,
    netzero_report_url: false,
    offices: [],
    },
    {chain: 'Ethereum', 
    logo: '/blockchains/ethereum_45x45.png',
    chart_daily_data: combineUnixDataArr(dateUnixLabels, emissionsData),
    chart_cum_data: combineUnixDataArr(dateUnixLabels, cumEmissionsData),
    emissions: numberWithCommas(cumEmissionsData.slice(-1)[0]),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(calculateTxTCO2(emissionsData, 'daily'))),
        sum: numberWithCommas(calculateSum(calculateTxTCO2(emissionsData, 'daily')))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions: numberWithCommas(calculateSum(txData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(txData, 'daily')),
        sum: numberWithCommas(calculateSum(txData, 'daily'))
    },
    network_emissions: numberWithCommas(cumEmissionsData.slice(-1)[0]),
    operation_emissions:null,
    color: '#757B9D',
    id: 0,
    row: 'tableEven',
    nav: 'ethereum',
    netzero: false,
    netzero_report_url: null,
    offices:ethereumOfficesData,
    },
    {chain: 'Celo', 
    logo: '/blockchains/celo_40x40.png',
    chart_daily_data: combineUnixDataArr(dateUnixCelo, celoEmissionsDailyData),
    chart_cum_data: combineUnixDataArr(dateUnixCelo, celoCumEmissionData),
    emissions: numberWithCommas(celoCumEmissionData.slice(-1)[0]),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(calculateTxTCO2(celoEmissionsDailyData, 'daily'))),
        sum: numberWithCommas(calculateSum(calculateTxTCO2(celoEmissionsDailyData, 'daily')))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions: calculateSum(celoTxDailyData),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(celoTxDailyData, 'daily')),
        sum: numberWithCommas(calculateSum(celoTxDailyData, 'daily'))
    },
    network_emissions: numberWithCommas(celoCumEmissionData.slice(-1)[0]),
    operation_emissions:null,
    color: '#FACA5B',
    id: 1,
    row: 'tableOdd',
    nav: 'celo',
    netzero: true,
    netzero_report_url: 'https://www.wren.co/profile/celo',
    offices: [],
    },
    {chain: 'Solana', 
    logo: '/blockchains/solana_40x40.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#478CC1',
    id: 2,
    row: 'tableEven',
    nav: 'solana',
    netzero: true,
    netzero_report_url: 'https://solana.com/news/solanas-energy-use-report-march-2022',
    offices: [],
    },
    {chain: 'Avalanche', 
    logo: '/blockchains/avalanche_40x40.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#FB2838',
    id: 3,
    row: 'tableOdd',
    nav: 'avalanche',
    netzero: false,
    netzero_report_url: null,
    offices: [],
    },
    {chain: 'Polygon', 
    logo: '/blockchains/polygon_40x40.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#8B43EE',
    id: 4,
    row: 'tableEven',
    nav: 'polygon',
    netzero: false,
    netzero_report_url: null,
    offices: [],
    },
    {chain: 'NEAR', 
    logo: '/blockchains/near_40x40.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#000000',
    id: 5,
    row: 'tableOdd',
    nav: 'near',
    netzero: true,
    netzero_report_url: 'https://near.org/blog/near-climate-neutral-product/',
    offices: [],
    },
    {chain: 'Binance', 
    logo: '/blockchains/binance_40x40.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#000000',
    id: 6,
    row: 'tableEven',
    nav: 'binance',
    netzero: false,
    netzero_report_url:null,
    offices: [],
    },
    {chain: 'Cardano', 
    logo: '/blockchains/cardano_45x45.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#000000',
    id: 7,
    row: 'tableOdd',
    nav: 'cardano',
    netzero: false,
    netzero_report_url:null,
    offices: [],
    },
    {chain: 'Polkadot', 
    logo: '/blockchains/polkadot_40x40.png',
    chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
    emissions: null,
    emissions_stats: {
        median: null,
        sum: null
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions:null,
    transaction_stats: {
        median: null,
        sum: null
    },
    network_emissions:null,
    operation_emissions:null,
    color:'#000000',
    id: 8,
    row: 'tableEven',
    nav: 'polkadot',
    netzero: false,
    netzero_report_url:null,
    offices: [],
    },
    // {chain: 'Algorand', 
    // logo: '/blockchains/algorand_40x40.png',
    // emissions: null,
    // offsets:null,
    // transactions:null,
    // network_emissions:null,
    // operation_emissions:null,
    // color:'#000000',
    // id: 9,
    // row: 'tableOdd',
    // nav: '/algorand',
    // netzero: false,
    // },
]

function getBlockchainData() {
    return blockchainData
}

const defaultChainEmissionsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export { blockchainData, defaultChainEmissionsData, getBlockchainData }