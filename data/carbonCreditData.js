// Requiring the lodash library
const _ = require("lodash")
import moment from 'moment'
import toucanData from './carbon_credits/toucan_vcus.json' assert {type: 'json'}
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

function getCarbonCreditData() {
    return toucanData
}

function getTotalCarbonCreditsQty() {
    return numberWithCommas(calculateTotalCarbonQty(toucanData))
}

function getCountryBreakdown() {
    let dataArr = []
    toucanData.forEach(function(item) {
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
    console.log('Stacked DATA ', dataArr)
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

function sumCarbonCreditsMonthly(arr) {
    let dataArr = []
    let tempArr
    toucanData.forEach(function(item) {
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
        tempArr = sortedArr.map(el=>Object.values(el))
    })
    return tempArr
}

function getProtocolStacked(minYear=2020) {
    let dataArr = []
    toucanData.forEach(function(item) {
        if (parseInt(item["Issuance Date"].split("-")[0]) >= minYear) {
            // if(item.Country != null && typeof dataArr.find(({ name }) => name === item.Country) == 'undefined') {
            //     let obj = {}
            //     obj = {"name":item.Country, "data":[{date: convertDTUNIX(item['Issuance Date']), y: item.Quantity}]}
            //     dataArr.push(obj)
            // } else {
            //     let obj = dataArr.find(({ name }) => name === item.Country);
            //     if(typeof obj != 'undefined') {
            //         obj.data.push({date: convertDTUNIX(item['Issuance Date']), y: item.Quantity})
            //     }
            // }
            dataArr.push({date: convertDTUNIX(item['Issuance Date']), y: item.Quantity})
        }
    })
    // dataArr.forEach(function(item) {
    let tempData = sumDailyMonthly(dataArr)
    let sortedInput = tempData.slice().sort((a, b) => a.date - b.date);
    let tempArr = tempData.map(el=>Object.values(el))
    // })
    console.log('PROTOCOL DATA ', [{name:'Toucan', data: tempArr}])
    return [{name:'Toucan', data: tempArr}]
}

function getProtocolBreakdown() {
    let tempProtocol = [{provider: 'Toucan', 'y':calculateTotalCarbonQty(toucanData), color: '#FFFFFF'}]
    return tempProtocol
}

function convertDailyMonthly(results) {
    let groupedResults = _.groupBy(results, (result) => moment.unix(result).startOf('month'));
    return groupedResults
}

function sumProtocolCreditsMonthly(arr) {
    let dataArr = []
    let tempArr
    toucanData.forEach(function(item) {
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
    let dataArr = []
    toucanData.forEach(function(item) {
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
    let dataArr = []
    toucanData.forEach(function(item) {
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
    console.log('Stacked DATA ', dataArr)
    return dataArr
}

export { getCarbonCreditData, getTotalCarbonCreditsQty, getCountryBreakdown, getCountryStacked,
         sumCarbonCreditsMonthly, getProtocolBreakdown, getProtocolStacked, getCarbonTypeBreakdown,
         getTypeStacked, projectTypeColors, projectTypeCats }