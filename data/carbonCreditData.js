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
                obj = {"name":item.Country, "data":[[convertDTUNIX(item['Issuance Date']), item.Quantity]]}
                dataArr.push(obj)
            } else {
                let obj = dataArr.find(({ name }) => name === item.Country);
                if(typeof obj != 'undefined') {
                    obj.data.push([convertDTUNIX(item['Issuance Date']), item.Quantity])
                }
            }
        }
    })
    console.log('Stacked DATA ', dataArr)
    return dataArr
}

export { getCarbonCreditData, getTotalCarbonCreditsQty, getCountryBreakdown, getCountryStacked }