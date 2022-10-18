import Highcharts from 'highcharts'
import { numberWithCommas, dateUnixLabels, txData, calculateSum, cumEmissionsData,
    ethUnixTCO2Data, ethUnixCUMTCO2Data, ethTCO02Data, ethTCO02CumData, 
    celoCumEmissionData, celoTxDailyData, bitcoinUnixData, btcTxData, calculateTxTCO2, 
    combineUnixDataArr, combineUnixFauxDataArr, dateUnixCelo, emissionsData, avalancheUnixTxChart,
    operationsOfficeData, operationsTransportData, operationsSuppliesData, operationsMiscData,
    celoEmissionsDailyData, calculateMedian, ethereumOfficesData, calculateTxTCO2Chart,
    avalancheTxData, avalancheEmissionsData, avalancheTCO2Data, avalancheCumTCO2Data,
    polygonUnixTxData, polygonUnixTCO2Data, polygonUnixTCO2SumData, polygonTxData, polygonTC02Data,
    binTxData, binTCO2Data, binUnixTxData, binUnixTCO2Data, binUnixCumTCO2Data,
    cardTCO2Data, cardTxData, cardUnixCumTCO2Data, cardUnixTxData, cardUnixTCO2Data,
    solanaOfficeData, polygonOfficeData, celoOfficeData, alavancheOfficeData, nearOfficeData,
    polkadotOfficeData, binanceOfficeData, cardanoOfficeData, celoNumOffsets, getTotalOffsetsMonthly} from './emissionsData'
import mapData from './node_tracker_geojson_100722.geojson' assert {type: 'json'};

const blockchainData = [
    {chain: 'Bitcoin', 
    logo: '/blockchains/bitcoin_50x50.png',
    chart_data: {
        chart_daily_data: bitcoinUnixData,
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
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
    },
    offices: [],
    node_map_data: {
        map_color: '#f7b360',
        map_data: {},
    }
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
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
    },
    offices:ethereumOfficesData,
    node_map_data: {
        map_color: '#6b6e88',
        map_data: mapData,
    }
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
    offsets: numberWithCommas(getTotalOffsetsMonthly(celoNumOffsets)),
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
    netzero_cert: {
        netzero_co: 'Wren',
        offsets: numberWithCommas(getTotalOffsetsMonthly(celoNumOffsets)),
        netzero_report_url: 'https://www.wren.co/profile/celo',
    },
    offices: celoOfficeData,
    node_map_data: {
        map_color: '#FBCB5C',
        map_data: {},
    }
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
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: 'https://solana.com/news/solanas-energy-use-report-march-2022',
    },
    offices: solanaOfficeData,
    node_map_data: {
        map_color: '#4CB2C3',
        map_data: {},
    }
    },
    {chain: 'Avalanche', 
    logo: '/blockchains/avalanche_40x40.png',
    chart_data: {
        chart_daily_data: avalancheEmissionsData,
        chart_cum_data: avalancheCumTCO2Data,
        chart_tx_daily: avalancheUnixTxChart,
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
    emissions: numberWithCommas(calculateSum(avalancheTCO2Data)),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(avalancheTCO2Data)),
        sum: numberWithCommas(calculateSum(avalancheTCO2Data))
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(avalancheTxData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(avalancheTxData)),
        sum: numberWithCommas(calculateSum(avalancheTxData))
    },
    network_emissions:numberWithCommas(calculateSum(avalancheTCO2Data)),
    operation_emissions:null,
    color:'#FB2838',
    id: 3,
    row: 'tableOdd',
    nav: 'avalanche',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
    },
    offices: alavancheOfficeData,
    node_map_data: {
        map_color: '#FB2838',
        map_data: {},
    }
    },
    {chain: 'Polygon', 
    logo: '/blockchains/polygon_40x40.png',
    chart_data: {
        chart_daily_data: polygonUnixTCO2Data,
        chart_cum_data: polygonUnixTCO2SumData,
        chart_tx_daily: polygonUnixTxData,
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
    emissions: numberWithCommas(calculateSum(polygonTC02Data)),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(polygonTC02Data)),
        sum: numberWithCommas(calculateSum(polygonTC02Data))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum:numberWithCommas(calculateSum(polygonTxData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(polygonTxData)),
        sum: numberWithCommas(calculateSum(polygonTxData))
    },
    network_emissions: numberWithCommas(calculateSum(polygonTC02Data)),
    operation_emissions:null,
    color:'#8B43EE',
    id: 4,
    row: 'tableEven',
    nav: 'polygon',
    netzero: true,
    netzero_cert: {
        netzero_co: 'Offsetra/KlimaDAO',
        netzero_report_url: 'https://www.klimadao.finance/blog/polygon-pos-emissions-analysis',
    },
    offices: polygonOfficeData,
    node_map_data: {
        map_color: '#8B42ED',
        map_data: {},
    }
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
    netzero_cert: {
        netzero_co: 'South Pole',
        netzero_report_url: 'https://near.org/blog/near-climate-neutral-product/',
    },
    offices: nearOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
    },
    {chain: 'Binance', 
    logo: '/blockchains/binance_40x40.png',
    chart_data: {
        chart_daily_data: binUnixTCO2Data,
        chart_cum_data: binUnixCumTCO2Data,
        chart_tx_daily: binUnixTxData,
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
    emissions: numberWithCommas(calculateSum(binTCO2Data)),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(binTCO2Data)),
        sum: numberWithCommas(calculateSum(binTCO2Data))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(binTxData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(binTxData)),
        sum: numberWithCommas(calculateSum(binTxData))
    },
    network_emissions: numberWithCommas(calculateSum(binTCO2Data)),
    operation_emissions:null,
    color:'#000000',
    id: 6,
    row: 'tableEven',
    nav: 'binance',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
    },
    offices: binanceOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
    },
    {chain: 'Cardano', 
    logo: '/blockchains/cardano_45x45.png',
    chart_data: {
        chart_daily_data: cardUnixTCO2Data,
        chart_cum_data: cardUnixCumTCO2Data,
        chart_tx_daily: cardUnixTxData,
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
    emissions: numberWithCommas(calculateSum(cardTCO2Data)),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(cardTCO2Data)),
        sum: numberWithCommas(calculateSum(cardTCO2Data))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(cardTxData)),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(cardTxData)),
        sum: numberWithCommas(calculateSum(cardTxData))
    },
    network_emissions: numberWithCommas(calculateSum(cardTCO2Data)),
    operation_emissions:null,
    color:'#000000',
    id: 7,
    row: 'tableOdd',
    nav: 'cardano',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
    },
    offices: cardanoOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
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
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
    },
    offices: polkadotOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
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