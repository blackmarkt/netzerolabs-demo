import Highcharts from 'highcharts'
import { numberWithCommas, dateUnixLabels, txData, calculateSum, cumEmissionsData, 
    celoCumEmissionData, celoTxDailyData, bitcoinUnixData, btcTxData, calculateTxTCO2, 
    combineUnixDataArr, combineUnixFauxDataArr, dateUnixCelo, emissionsData,
    operationsOfficeData, operationsTransportData, operationsSuppliesData, operationsMiscData,
    celoEmissionsDailyData, calculateMedian, ethereumOfficesData, calculateTxTCO2Chart} from './emissionsData'

const blockchainData = [
    {chain: 'Bitcoin', 
    logo: '/blockchains/bitcoin_50x50.png',
    chart_data: {
        chart_daily_data: calculateTxTCO2Chart(dateUnixCelo, btcTxData, 'daily'),
        chart_cum_data: calculateTxTCO2Chart(dateUnixCelo, btcTxData, 'cum'),
        chart_tx_daily: combineUnixDataArr(dateUnixLabels, btcTxData),
        chart_color: '#f7b360',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ] 
    },
    // chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
    // chart_cum_data: bitcoinUnixData,
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
    transactions_sum: numberWithCommas(calculateSum(btcTxData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(btcTxData, 'daily')),
        sum: numberWithCommas(calculateSum(btcTxData, 'daily'))
    },
    network_emissions: numberWithCommas(calculateTxTCO2(btcTxData, 'cum')),
    operation_emissions:null,
    color: '#F7931A',
    id: 0,
    row: 'tableOdd',
    nav: 'bitcoin',
    netzero: false,
    netzero_report_url: false,
    offices: [],
    },
    {chain: 'Ethereum', 
    logo: '/blockchains/ethereum_45x45.png',
    chart_data: {
        chart_daily_data: combineUnixDataArr(dateUnixLabels, emissionsData),
        chart_cum_data: combineUnixDataArr(dateUnixLabels, cumEmissionsData),
        chart_tx_daily: combineUnixDataArr(dateUnixLabels, txData),
        chart_color: '#6b6e88',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
    // chart_daily_data: combineUnixDataArr(dateUnixLabels, emissionsData),
    // chart_cum_data: combineUnixDataArr(dateUnixLabels, cumEmissionsData),
    // chart_tx_daily: combineUnixDataArr(dateUnixLabels, txData), 
    // chart_color: '#61668B',
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
    transactions_sum: numberWithCommas(calculateSum(txData)),
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
    chart_data: {
        chart_daily_data: combineUnixDataArr(dateUnixCelo, celoEmissionsDailyData),
        chart_cum_data: combineUnixDataArr(dateUnixCelo, celoCumEmissionData),
        chart_tx_daily: combineUnixDataArr(celoEmissionsDailyData, txData),
        chart_color: '#FBCB5C',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum: numberWithCommas(calculateSum(celoTxDailyData)),
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#4CB2C3',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#FB2838',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#8B42ED',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#FFFFFF',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#FFD700',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#3263C8',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: combineUnixFauxDataArr(dateUnixCelo),
        chart_color: '#f682ba',
        operations_data: [
            { name: 'Office', y: 1},
            { name: 'Transportation', y: 1},
            { name: 'Supplies', y: 1},
            { name: 'Misc', y: 1},
        ],
        operations_break: [{name: 'Office', data: operationsOfficeData},
                           {name: 'Transport', data: operationsTransportData},
                           {name: 'Supplies', data: operationsSuppliesData},
                           {name: 'Misc', data: operationsMiscData},
        ]  
    },
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
    transactions_sum:null,
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
    // transactions_sum:null,
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

var pieColors = (function (base) {
    if (typeof Highcharts === 'object') {
        var colors = [],
            // base = ,
            i;

        for (i = 0; i < 10; i += 1) {
            // Start out with a darkened base color (negative brighten), and end
            // up with a much brighter color
            colors.push(Highcharts.color(base).brighten((i - 3) / 14).get());
        }
        return colors;
    }
}());

const defaultChainEmissionsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

export { blockchainData, defaultChainEmissionsData, getBlockchainData }