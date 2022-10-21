import Highcharts from 'highcharts'
import { numberWithCommas, calculateSum, 
    // dateUnixLabels, txData,  cumEmissionsData,
    // ethUnixTCO2Data, ethUnixCUMTCO2Data, ethTCO02Data, ethTCO02CumData, 
    // celoCumEmissionData, celoTxDailyData, 
    btcUnixTCO2Data, bitcoinUnixData, btcTxData, btcUnixCumTCO2Data, calculateTxTCO2, 
    // combineUnixDataArr, combineUnixFauxDataArr, dateUnixCelo, emissionsData, avalancheUnixTxChart,
    operationsOfficeData, operationsTransportData, operationsSuppliesData, operationsMiscData,
    celoEmissionsDailyData, calculateMedian, ethereumOfficesData, 
    createUNIXOffsetChartData, combineUnixFauxDataArr, dateUnixCelo,
    // avalancheTxData, avalancheEmissionsData, avalancheTCO2Data, avalancheCumTCO2Data,
    // polygonUnixTxData, polygonUnixTCO2Data, polygonUnixTCO2SumData, polygonTxData, polygonTC02Data,
    // binTxData, binTCO2Data, binUnixTxData, binUnixTCO2Data, binUnixCumTCO2Data, createUNIXOffsetChartData,
    // cardTCO2Data, cardTxData, cardUnixCumTCO2Data, cardUnixTxData, cardUnixTCO2Data, 
    solanaOfficeData, polygonOfficeData, celoOfficeData, alavancheOfficeData, nearOfficeData,
    polkadotOfficeData, binanceOfficeData, cardanoOfficeData, celoNumOffsets, getTotalOffsetsMonthly} from './emissionsData'
import mapData from './eth_node_tracker_geojson_100722.geojson' assert {type: 'json'}
import btcNodeData from './bitcoin_node_tracker_geojson_101822.geojson' assert {type: 'json'}
import solNodeData from './solana_node_tracker_geojson_101822.geojson' assert {type: 'json'}
import cardanoTxData from './transactions/cardano_tx.json' assert {type: 'json'}
import polkadotTxData from './transactions/polkadot_tx.json' assert {type: 'json'}
import binanceTxData from './transactions/binance_tx.json' assert {type: 'json'}
import polygonTxData from './transactions/polygon_tx.json' assert {type: 'json'}
import avalancheTxData from './transactions/avalanche_tx.json' assert {type: 'json'}
import celoTxData from './transactions/celo_tx.json' assert {type: 'json'}
import ethereumTxData from './transactions/ethereum_tx.json' assert {type: 'json'}
import { calculateTxTCO2Chart, calculateMergeTxTCO2Chart, getArrFromChartArr, getTCO2ArrFromChartArr,
        getMergeTCO2ArrFromChartArr } from './utils/utilFunctions.js'
import { btcTxTCO2Factor, ethTxTCO2PreFactor, ethTxTCO2PostFactor, celoTxTCO2Factor, solTxTCO2Factor, 
        avaxTxTCO2Factor, polkTxTCO2Factor, cardTxTCO2Factor } from './TxTCO2ConversionFactors.js'

const blockchainData = [
    {chain: 'Bitcoin', 
    logo: '/blockchains/bitcoin_50x50.png',
    website: 'https://bitcoin.org/en/',
    chart_data: {
        chart_daily_data: btcUnixTCO2Data,
        chart_cum_data: btcUnixCumTCO2Data,
        chart_tx_daily: bitcoinUnixData,
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
        netzero_offsets_chart:null,
        chart_color: '#F7931A',
        web3: false,
    },
    offices: [],
    node_map_data: {
        map_color: '#f7b360',
        map_data: btcNodeData,
    }
    },
    {chain: 'Ethereum', 
    logo: '/blockchains/ethereum_45x45.png',
    website: 'https://ethereum.org/en/foundation/',
    chart_data: {
        chart_daily_data: calculateMergeTxTCO2Chart(ethereumTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor, 'daily'),
        chart_cum_data: calculateMergeTxTCO2Chart(ethereumTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor, 'cumulative'),
        chart_tx_daily: ethereumTxData,
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
    emissions: numberWithCommas(calculateSum(getMergeTCO2ArrFromChartArr(ethereumTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor))),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(getMergeTCO2ArrFromChartArr(ethereumTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor))),
        sum: numberWithCommas(calculateSum(getMergeTCO2ArrFromChartArr(ethereumTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor)))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(ethereumTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(ethereumTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(ethereumTxData)))
    },
    network_emissions: numberWithCommas(calculateSum(getMergeTCO2ArrFromChartArr(ethereumTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor))),
    operation_emissions:null,
    color: '#757B9D',
    id: 0,
    row: 'tableEven',
    nav: 'ethereum',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
        netzero_offsets_chart:null,
        chart_color: '#6b6e88',
        web3: false,
    },
    offices:ethereumOfficesData,
    node_map_data: {
        map_color: '#6b6e88',
        map_data: mapData,
    }
    },
    {chain: 'Celo', 
    logo: '/blockchains/celo_40x40.png',
    website: 'https://celo.org/',
    chart_data: {
        chart_daily_data: calculateTxTCO2Chart(celoTxData, celoTxTCO2Factor, 'daily'),
        chart_cum_data: calculateTxTCO2Chart(celoTxData, celoTxTCO2Factor, 'cumulative'),
        chart_tx_daily: celoTxData,
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
    emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(celoTxData, celoTxTCO2Factor))),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(getTCO2ArrFromChartArr(celoTxData, celoTxTCO2Factor))),
        sum: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(celoTxData, celoTxTCO2Factor)))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:numberWithCommas(getTotalOffsetsMonthly(celoNumOffsets)),
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(celoTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(celoTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(celoTxData)))
    },
    network_emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(celoTxData, celoTxTCO2Factor))),
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
        netzero_offsets_chart: createUNIXOffsetChartData(celoNumOffsets),
        chart_color: '#FBCB5C',
        web3: false,
    },
    offices: celoOfficeData,
    node_map_data: {
        map_color: '#FBCB5C',
        map_data: {},
    }
    },
    {chain: 'Solana', 
    logo: '/blockchains/solana_40x40.png',
    website: 'https://solana.com/',
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
        netzero_co: 'Robert Murphy',
        netzero_report_url: 'https://solana.com/news/solanas-energy-use-report-march-2022',
        netzero_offsets_chart:null,
        chart_color: '#4CB2C3',
        web3: false,
    },
    offices: solanaOfficeData,
    node_map_data: {
        map_color: '#4CB2C3',
        map_data: solNodeData,
    }
    },
    {chain: 'Avalanche', 
    logo: '/blockchains/avalanche_40x40.png',
    website: 'https://www.avax.network/',
    chart_data: {
        chart_daily_data: calculateTxTCO2Chart(avalancheTxData, avaxTxTCO2Factor, 'daily'),
        chart_cum_data: calculateTxTCO2Chart(avalancheTxData, avaxTxTCO2Factor, 'cumulative'),
        chart_tx_daily: avalancheTxData,
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
    emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(avalancheTxData, avaxTxTCO2Factor))),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(getTCO2ArrFromChartArr(avalancheTxData, avaxTxTCO2Factor))),
        sum: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(avalancheTxData, avaxTxTCO2Factor)))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(avalancheTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(avalancheTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(avalancheTxData)))
    },
    network_emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(avalancheTxData, avaxTxTCO2Factor))),
    operation_emissions:null,
    color:'#FB2838',
    id: 3,
    row: 'tableOdd',
    nav: 'avalanche',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
        netzero_offsets_chart:null,
        chart_color:'#FB2838',
        web3: false,
    },
    offices: alavancheOfficeData,
    node_map_data: {
        map_color: '#FB2838',
        map_data: {},
    }
    },
    {chain: 'Polygon', 
    logo: '/blockchains/polygon_40x40.png',
    website: 'https://polygon.technology/',
    chart_data: {
        chart_daily_data: calculateMergeTxTCO2Chart(polygonTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor, 'daily'),
        chart_cum_data: calculateMergeTxTCO2Chart(polygonTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor, 'cumulative'),
        chart_tx_daily: polygonTxData,
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
    emissions: numberWithCommas(calculateSum(getMergeTCO2ArrFromChartArr(polygonTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor))),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(getMergeTCO2ArrFromChartArr(polygonTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor))),
        sum: numberWithCommas(calculateSum(getMergeTCO2ArrFromChartArr(polygonTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor)))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(polygonTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(polygonTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(polygonTxData)))
    },
    network_emissions: numberWithCommas(calculateSum(getMergeTCO2ArrFromChartArr(polygonTxData, ethTxTCO2PreFactor, ethTxTCO2PostFactor))),
    operation_emissions:null,
    color:'#8B43EE',
    id: 4,
    row: 'tableEven',
    nav: 'polygon',
    netzero: true,
    netzero_cert: {
        netzero_co: 'Offsetra/KlimaDAO',
        netzero_report_url: 'https://www.klimadao.finance/blog/polygon-pos-emissions-analysis',
        netzero_offsets_chart:null,
        chart_color:'#8B42ED',
        web3: false,
    },
    offices: polygonOfficeData,
    node_map_data: {
        map_color: '#8B42ED',
        map_data: {},
    }
    },
    {chain: 'NEAR', 
    logo: '/blockchains/near_40x40.png',
    website: 'https://near.org/',
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
        netzero_offsets_chart:null,
        chart_color:'#FFFFFF',
        web3: false,
    },
    offices: nearOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
    },
    {chain: 'Binance', 
    logo: '/blockchains/binance_40x40.png',
    website: 'https://www.binance.com/en',
    chart_data: {
        chart_daily_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_cum_data: combineUnixFauxDataArr(dateUnixCelo),
        chart_tx_daily: binanceTxData,
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
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(binanceTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(binanceTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(binanceTxData)))
    },
    network_emissions: null,
    operation_emissions:null,
    color:'#000000',
    id: 6,
    row: 'tableEven',
    nav: 'binance',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
        netzero_offsets_chart:null,
        chart_color: '#FFD700',
        web3: false,
    },
    offices: binanceOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
    },
    {chain: 'Cardano', 
    logo: '/blockchains/cardano_45x45.png',
    website: 'https://cardano.org/',
    chart_data: {
        chart_daily_data: calculateTxTCO2Chart(cardanoTxData, cardTxTCO2Factor, 'daily'),
        chart_cum_data: calculateTxTCO2Chart(cardanoTxData, cardTxTCO2Factor, 'cumulative'),
        chart_tx_daily: cardanoTxData,
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
    emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(cardanoTxData, cardTxTCO2Factor))),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(getTCO2ArrFromChartArr(cardanoTxData, cardTxTCO2Factor))),
        sum: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(cardanoTxData, cardTxTCO2Factor)))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(cardanoTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(cardanoTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(cardanoTxData)))
    },
    network_emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(cardanoTxData, cardTxTCO2Factor))),
    operation_emissions:null,
    color:'#3263C8',
    id: 7,
    row: 'tableOdd',
    nav: 'cardano',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
        netzero_offsets_chart:null,
        chart_color: '#3263C8',
        web3: false,
    },
    offices: cardanoOfficeData,
    node_map_data: {
        map_color: '#FFFFFF',
        map_data: {},
    }
    },
    {chain: 'Polkadot', 
    logo: '/blockchains/polkadot_40x40.png',
    website: 'https://polkadot.network/',
    chart_data: {
        chart_daily_data: calculateTxTCO2Chart(polkadotTxData, polkTxTCO2Factor, 'daily'),
        chart_cum_data: calculateTxTCO2Chart(polkadotTxData, polkTxTCO2Factor, 'cumulative'),
        chart_tx_daily: polkadotTxData,
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
    emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(polkadotTxData, polkTxTCO2Factor))),
    emissions_stats: {
        median: numberWithCommas(calculateMedian(getTCO2ArrFromChartArr(polkadotTxData, polkTxTCO2Factor))),
        sum: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(polkadotTxData, polkTxTCO2Factor)))
    },
    emissions_operations: {
        office:null,
        transportation:null,
        supplies:null,
        misc:null,
    },
    offsets:null,
    transactions_sum: numberWithCommas(calculateSum(getArrFromChartArr(polkadotTxData))),
    transaction_stats: {
        median: numberWithCommas(calculateMedian(getArrFromChartArr(polkadotTxData))),
        sum: numberWithCommas(calculateSum(getArrFromChartArr(polkadotTxData)))
    },
    network_emissions: numberWithCommas(calculateSum(getTCO2ArrFromChartArr(polkadotTxData, polkTxTCO2Factor))),
    operation_emissions:null,
    color:'#f682ba',
    id: 8,
    row: 'tableEven',
    nav: 'polkadot',
    netzero: false,
    netzero_cert: {
        netzero_co: null,
        netzero_report_url: null,
        netzero_offsets_chart:null,
        chart_color: '#F7931A',
        web3: false,
    },
    offices: polkadotOfficeData,
    node_map_data: {
        map_color: '#f682ba',
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