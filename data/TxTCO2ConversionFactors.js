const btcTxTCO2Factor = 0.844094886
const ethTxTCO2PreFactor = 0.00002662087
const ethTxTCO2PostFactor = 0.00000210546
const celoTxTCO2Factor = 0.00000210546*5
const solTxTCO2Factor = 0.0000000791525424
const avaxTxTCO2Factor = 0.00000246808
// Polygon Paper
// (0.000049901633* (1.3/(1.3+1))) + (0.000000136986301*(1/2.3)))
// 0.00002826483
const polyTxTCO2PreFactor = 0.00002826483
const polyTxTCO2PostFactor = 0.000000136986301
const cardTxTCO2Factor = 0.00002366666
const polkTxTCO2Factor = 0.00000825

export {btcTxTCO2Factor, ethTxTCO2PreFactor, ethTxTCO2PostFactor, celoTxTCO2Factor,
        solTxTCO2Factor, avaxTxTCO2Factor, polyTxTCO2PreFactor, polyTxTCO2PostFactor, 
        cardTxTCO2Factor, polkTxTCO2Factor}