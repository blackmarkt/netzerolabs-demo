// Requiring the lodash library
const _ = require("lodash")
import moment from 'moment'
import toucanData from './carbon_credits/toucan_vcus.json' assert {type: 'json'}
import mossData from './carbon_credits/moss_verra.json' assert {type: 'json'}
import flowCarbonData from './carbon_credits/flowcarbon_credits.json' assert {type: 'json'}
import flowcarbon_geojson from './carbon_credits/flowcarbon_geojson.geojson' assert {type: 'json'}
import toucan_geojson from './carbon_credits/toucan_geojson.geojson' assert {type: 'json'}
import carbon_onchain_tx from './carbon_credits/transactions/carbon_onchain_tx.json' assert {type: 'json'}
import { numberWithCommas, calculateTotalCarbonQty, convertDTUNIX } from './utils/utilFunctions.js'

const projectTypeCats = {'Energy industries (renewable/non-renewable sources)': 'Renewable Energy',
                        'Fugitive emissions from fuels (solid, oil and gas); Mining/mineral production': 'Oil Fugitive Emissions/Mining',
                        'Agriculture Forestry and Other Land Use': 'Forestry',
                        'Waste handling and disposal': 'Waste Management', 
                        'Manufacturing industries': 'Manufacturing',
                        'Energy demand; Waste handling and disposal': 'Energy Demand',
                        'Energy industries (renewable/non-renewable sources); Livestock, enteric fermentation, and manure management; Waste handling and disposal': 'Renewable Energy (Livestock)',
                        'Energy industries (renewable/non-renewable sources); Waste handling and disposal': 'Renewable Energy (Waste)',
                        'Energy demand': 'Energy Demand', 
                        'Transport': 'Transport',
                        'Energy industries (renewable/non-renewable sources); Mining/mineral production': 'Renewable Energy (Mining)',
                        'Livestock, enteric fermentation, and manure management': 'Livestock',
                        'Energy demand; Energy industries (renewable/non-renewable sources)': 'Renewable Energy (Demand)',
                        'Fugitive emissions from fuels (solid, oil and gas)': 'Oil Fugitive Emissions',
                        'Construction; Energy industries (renewable/non-renewable sources)': 'Renewable Energies (Construction)',
                        'Energy industries (renewable/non-renewable sources); Manufacturing industries': 'Renewable Energies (Manufacturing)',
                        'Chemical industry': 'Chemical',
                        'Fugitive emissions from production and consumption of halocarbons and sulphur hexafluoride': 'Fugitive Emissions (Chemicals)',
                        'Energy distribution': 'Energy Distribution', 
                        'Metal production': 'Energy Distribution (Metals)',
                        'Mining/mineral production': 'Mining',
                        'Agriculture Forestry and Other Land Use; Energy industries (renewable/non-renewable sources); Waste handling and disposal': 'Renewable Energy (Forestry/Waste)',
                        'Chemical industry; Energy industries (renewable/non-renewable sources)': 'Renewable Energies (Chemical)',
                        'Energy industries (renewable/non-renewable sources); Livestock, enteric fermentation, and manure management': 'Renewable Energy (Livestock)',
                        'Energy industries (renewable/non-renewable sources); Fugitive emissions from fuels (solid, oil and gas)': 'Renewable Energy (Fugitive Emissions)'}

const projectTypeColors = {'Renewable Energy': '#FFEA00',
                            'Forestry': 'green',
                            'Renewable Energy (Waste)': '#FAFA33',
                            'Energy Demand':'#FCF55F',
                            'Renewable Energies (Manufacturing)': '#FFFAA0',
                            'Chemical':'aqua',
                            'Oil Fugitive Emissions':'#00000',
                            'Waste Management': 'brown',
                            'Manufacturing':'gray'}

const countryColors = [{country: 'China', color: '#B41F11'},
                    {country: 'India', color: 'orange'},
                    {country: 'Brazil', color: '#0C8C45'},
                    {country: 'Turkey', color: '#760711'},
                    {country: 'Myanmar', color: '#2E862B'},
                    {country: 'Indonesia', color: '#3F3EFA'},
                    {country: 'Canada', color: '#C2C2C2'},
                    {country: 'Netherlands', color: '#F28E00'},
                    {country: 'Colombia', color: '#EDC515'},
                    {country: 'Belize', color: '#003A81'},
                    {country: 'Bulgaria', color: '#861017'},
                    {country: 'Congo', color: '#2485E7'},
                    {country: 'Chile', color: '#EFDA00'},
                    {country: 'Thailand', color: '#0349A0'},
                    {country: 'Kenya', color: '#094034'},
                    {country: 'South Korea', color: '#FFFFFF'},
                    {country: 'Uruguay', color: 'yellow'},
                    {country: 'Bolivia', color: '#BD332A'},
                    {country: 'Cambodia', color: '#01127D'},
                    {country: 'Guatemala', color: '#3389AF'},
                    {country: 'Madagascar', color: '#B2A8A6'},
                    {country: 'Viet Nam', color: '#EDED00'}]

const carbonContractAddressArr = [
                                    {Chain: 'Polygon', Protocols: [
                                        {Toucan: [
                                            {BCT: '0x2F800Db0fdb5223b3C3f354886d907A671414A7F'}
                                        ]},
                                        {MOSS: [
                                            {MCO2: '0xAa7DbD1598251f856C12f63557A4C4397c253Cea'}
                                        ]},
                                        {C3: [
                                            {NBO: '0x6BCa3B77C1909Ce1a4Ba1A20d1103bDe8d222E48',
                                            UBO: '0x2B3eCb0991AF0498ECE9135bcD04013d7993110c'}
                                        ]}
                                    ]}
                                ] 

const ProtocolColors = [
                        {provider: 'Toucan', color: '#FFFFFF'},
                        {provider: 'MOSS', color: '#DEF72D'},
                     ]

const ToucanRetiredQty = 252198

function getCarbonCreditData() {
    let dataArr = toucanData.concat(mossData)
    let sortedInput = dataArr.slice().sort((a, b) => new Date(b['Issuance Date']) - new Date(a['Issuance Date']));
    return sortedInput
}

function getFlowCarbonCreditData() {
    return flowCarbonData
}

function getFlowCarbonMapData() {
    return flowcarbon_geojson
}

function getCarbonTxs() {
    return carbon_onchain_tx
}

function getCarbonMapData() {
    const carbonMapGeoArr = flowcarbon_geojson.features.concat(toucan_geojson.features);
    const carbonMapGeoJSON = {type: 'FeatureCollection', features: carbonMapGeoArr}
    return carbonMapGeoJSON
}

function getTotalCarbonCreditsQty() {
    let toucanTotal = calculateTotalCarbonQty(toucanData.concat(mossData))
    let otherTotal = calculateTotalCarbonQty(carbon_onchain_tx)
    return numberWithCommas(toucanTotal + otherTotal)
}

function getTotalRetiredCCQty() {
    return numberWithCommas(ToucanRetiredQty + calculateTotalCarbonQty(carbon_onchain_tx))
}

function getProtocolColors(provider) {
    return ProtocolColors.filter(
        function(data){ return data.provider == provider }
    );
}

function getCountryBreakdown() {
    let totalData = toucanData.concat(mossData)
    let dataArr = []
    totalData.forEach(function(item) {
        if(item["Country"] != null && typeof dataArr.find(({ country }) => country === item.Country) == 'undefined') {
            // create new object with structure
            let obj = {}
            obj = {"country":item.Country, "y":item.Quantity}
            dataArr.push(obj);
        } else {
            // else find existing Country and add new data
            let obj = dataArr.find(({ country }) => country === item.Country);
            if(typeof obj != 'undefined') {
                let tempSum = item.Quantity + obj.y
                obj.y = tempSum
            }
        }
    })
    let sortedInput = dataArr.slice().sort((a, b) => b.y - a.y);
    return sortedInput
}

function getCountryStacked(minYear=2020) {
    let dataArr = []
    toucanData.forEach(function(item) {
        if (parseInt(item["Issuance Date"].split("-")[0]) >= minYear) {
            if(item.Country != null && typeof dataArr.find(({ name }) => name === item.Country) == 'undefined') {
                let obj = {}
                obj = {"name":item.Country, "data":[{date: convertDTUNIX(item['Issuance Date']), y: item.Quantity}]}
                dataArr.push(obj)
            } else {
                let obj = dataArr.find(({ name }) => name === item.Country);
                if(typeof obj != 'undefined') {
                    obj.data.push({date: convertDTUNIX(item['Issuance Date']), y: item.Quantity})
                }
            }
        }
    })
    dataArr.forEach(function(item) {
        let tempData = sumDailyMonthly(item.data)
        item.data = tempData.map(el=>Object.values(el))
    })
    // console.log('Stacked DATA ', dataArr)
    return dataArr
}

function sumDailyMonthly(arr) {
    // console.log('TYPE ', arr);
    let tempArr = []
    arr.forEach(function(item) {
        // console.log('PRE-ARRAY ', item);
        if(item.date != null && typeof tempArr.find(({ date }) => date === item.date) == 'undefined') {
            // console.log('ARRAY ', item);
            tempArr.push(item)
        } else {
            let obj = tempArr.find(({ date }) => date === item.date)
            if (typeof obj != 'undefined') {
                obj.y += item.y
            }
        }
    })
    return tempArr
}

function sumCarbonCreditsMonthly() {
    let totalData = toucanData.concat(mossData)
    let dataArr = []
    let tempArr
    totalData.forEach(function(item) {
        if (item['Issuance Date'] != null && typeof dataArr.find(({ date }) => date ===  convertDTUNIX(item['Issuance Date'])) == 'undefined') {
            dataArr.push({'date': convertDTUNIX(item['Issuance Date']), 'y': item.Quantity})
        } else {
            let obj = dataArr.find(({ date }) => date ===  convertDTUNIX(item['Issuance Date']))
            if (typeof obj != 'undefined') {
                // let tempSum = obj.y + item.Quantity
                // dataArr.push({'date': convertDTUNIX(item['Issuance Date']), 'y': tempSum })
                obj.y += item.Quantity
            }
        }
        // console.log('UNIX DATe ', dataArr)
        let sortedInput = dataArr.slice().sort((a, b) => a.date - b.date);
        let tempSum = 0
        let sortedArr = [sortedInput.at(0)]
        sortedInput.forEach(function(item, idx) {
            if (idx !== 0) {
                tempSum += item.y
                sortedArr.push({date: item.date, y: tempSum})
                // console.log('OUT ', sortedArr)
                // sortedInput[idx].y = tempSum
                // tempSum += sortedInput[idx-1].y + sortedInput[idx].y
                // item.y += tempSum
            }
        })
        // console.log('PRE-SORTED CC DATA ', sortedArr)
        tempArr = sortedArr.map(el=>Object.values(el))
    })
    // console.log('STACKED CC DATA ', tempArr)
    return tempArr
}

function getProtocolStacked(minYear=2020) {
    let dataArr = []
    let dataArr2 = []
    toucanData.forEach(function(item) {
        if (parseInt(item["Issuance Date"].split("-")[0]) >= minYear) {
            dataArr.push({date: convertDTUNIX(item['Issuance Date']), y: item.Quantity})
        }
    })
    let tempData = sumDailyMonthly(dataArr)
    let sortedInput = tempData.slice().sort((a, b) => a.date - b.date);
    let tempArr = tempData.map(el=>Object.values(el))

    mossData.forEach(function(item) {
        if (parseInt(item["Issuance Date"].split("-")[0]) >= minYear) {
            dataArr2.push({date: convertDTUNIX(item['Issuance Date']), y: item.Quantity})
        }
    })
    let tempData2 = sumDailyMonthly(dataArr2)
    let sortedInput2 = tempData2.slice().sort((a, b) => a.date - b.date);
    let tempArr2 = tempData2.map(el=>Object.values(el))
   
    return [{name:'Toucan', data: tempArr},{name:'MOSS', data: tempArr2}]
}

function getProtocolBreakdown() {
    let tempProtocol = [{provider: 'Toucan', 'y':calculateTotalCarbonQty(toucanData), color: '#FFFFFF'},
                        {provider: 'MOSS', 'y':calculateTotalCarbonQty(mossData), color: '#DEF72D' }]
    return tempProtocol
}

function convertDailyMonthly(results) {
    let groupedResults = _.groupBy(results, (result) => moment.unix(result).startOf('month'));
    return groupedResults
}

function sumProtocolCreditsMonthly(arr) {
    let totalData = toucanData.concat(mossData)
    let dataArr = []
    let tempArr
    totalData.forEach(function(item) {
        if (item['Issuance Date'] != null && typeof dataArr.find(({ date }) => date ===  convertDTUNIX(item['Issuance Date'])) == 'undefined') {
            dataArr.push({'date': convertDTUNIX(item['Issuance Date']), 'y': item.Quantity})
        } else {
            let obj = dataArr.find(({ date }) => date ===  convertDTUNIX(item['Issuance Date']))
            if (typeof obj != 'undefined') {
                obj.y += item.Quantity
            }
        }
        let sortedInput = dataArr.slice().sort((a, b) => a.date - b.date);
        let tempSum = 0
        let sortedArr = [sortedInput.at(0)]
        sortedInput.forEach(function(item, idx) {
            if (idx !== 0) {
                tempSum += item.y
                sortedArr.push({date: item.date, y: tempSum})
            }
        })
        tempArr = sortedArr.map(el=>Object.values(el))
    })
    return tempArr
}

function getCarbonTypeBreakdown() {
    let totalData = toucanData.concat(mossData)
    let dataArr = []
    totalData.forEach(function(item) {
        if(item["Project Type"] != null && typeof dataArr.find(({ type }) => type === projectTypeCats[item['Project Type']]) == 'undefined') {
            // create new object with structure
            let obj = {}
            obj = {"type": projectTypeCats[item['Project Type']], "y":item.Quantity}
            dataArr.push(obj);
        } else {
            // else find existing Country and add new data
            let obj = dataArr.find(({ type }) => type === projectTypeCats[item['Project Type']]);
            if(typeof obj != 'undefined') {
                let tempSum = item.Quantity + obj.y
                obj.y = tempSum
            }
        }
    })
    let sortedInput = dataArr.slice().sort((a, b) => b.y - a.y);
    return sortedInput
}

function getTypeStacked(minYear=2020) {
    let totalData = toucanData.concat(mossData)
    let dataArr = []
    totalData.forEach(function(item) {
        if (parseInt(item["Issuance Date"].split("-")[0]) >= minYear) {
            if(item["Project Type"] != null && typeof dataArr.find(({ name }) => name === projectTypeCats[item['Project Type']]) == 'undefined') {
                let obj = {}
                obj = {"name":projectTypeCats[item['Project Type']], "data":[{date: convertDTUNIX(item['Issuance Date']), y: item.Quantity}]}
                dataArr.push(obj)
            } else {
                let obj = dataArr.find(({ name }) => name === projectTypeCats[item['Project Type']]);
                if(typeof obj != 'undefined') {
                    obj.data.push({date: convertDTUNIX(item['Issuance Date']), y: item.Quantity})
                }
            }
        }
    })
    dataArr.forEach(function(item) {
        let tempData = sumDailyMonthly(item.data)
        item.data = tempData.map(el=>Object.values(el))
    })
    // console.log('Stacked DATA ', dataArr)
    return dataArr
}

function getColorByCountry(country) {
    return countryColors.filter(
        function(data){ return data.country == country }
    );
}


export { getCarbonCreditData, getTotalCarbonCreditsQty, getCountryBreakdown, getCountryStacked,
         sumCarbonCreditsMonthly, getProtocolBreakdown, getProtocolStacked, getCarbonTypeBreakdown,
         getTypeStacked, getFlowCarbonMapData, getCarbonMapData, getProtocolColors, getCarbonTxs,
         getTotalRetiredCCQty,
         projectTypeColors, projectTypeCats }