import toucanData from './carbon_credits/toucan_vcus.json' assert {type: 'json'}
import { numberWithCommas, calculateTotalCarbonQty } from './utils/utilFunctions.js'

function getCarbonCreditData() {
    return toucanData
}

function getTotalCarbonCreditsQty() {
    return numberWithCommas(calculateTotalCarbonQty(toucanData))
}

export { getCarbonCreditData, getTotalCarbonCreditsQty }