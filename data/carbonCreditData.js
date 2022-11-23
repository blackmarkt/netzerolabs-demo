// Requiring the lodash library
const _ = require("lodash")
import moment from 'moment'
import toucanData from './carbon_credits/toucan_vcus.json' assert {type: 'json'}
import { numberWithCommas, calculateTotalCarbonQty, convertDTUNIX } from './utils/utilFunctions.js'

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
            // console.log('OBJECT ', obj)
            if(typeof obj != 'undefined') {
                let tempSum = item.Quantity + obj.y
                obj.y = tempSum
            }
        }
    })
    // console.log('COUNTRY ', dataArr)
    return dataArr
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
    // var res = arr.reduce((acc, obj)=>{
    //     console.log('TEST ', acc);
    //     var existObj = acc.find(item => item.date === obj.date);
    //     if(existObj){
    //         existObj.y += obj.y;
    //         // return acc
    //     }
    //     acc.push(obj);
    //     // return acc
    // }, [])
    // return res
}

function convertDailyMonthly(results) {
    let groupedResults = _.groupBy(results, (result) => moment.unix(result).startOf('month'));
    return groupedResults
}

export { getCarbonCreditData, getTotalCarbonCreditsQty, getCountryBreakdown, getCountryStacked }