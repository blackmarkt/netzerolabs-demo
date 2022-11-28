const UNIXMult = 1663113600000

function combineUnixDataArr(dateArr, dataArr) {
    try {
        var dateDataArr = []; 
        if (dateArr.length == dataArr.length) {
            for (let i = 0; i < dateArr.length; i++) {
                dateDataArr.push({x: dateArr[i]*1000, y: dataArr[i]})
            }
        }
        // console.log('CHART DATA: ', dateDataArr)
        return dateDataArr
    } catch (error) {
        console.log('ERROR: ', error)
    }
}

function combineUnixFauxDataArr(dateArr) {
    try {
        var dateDataArr = []; 
        for (let i = 0; i < dateArr.length; i++) {
            dateDataArr.push({x: dateArr[i]*1000, y: 0})
        }
        // console.log('CHART DATA: ', dateDataArr)
        return dateDataArr
    } catch (error) {
        console.log('ERROR: ', error)
    }
}

function calculateTxTCO2(dataArr, type='daily') {
    try {
        let txTCO2Arr = [];
        if (type == 'daily') {
            for (let i = 0; i < dataArr.length; i++) {
                txTCO2Arr.push(dataArr[i]*txTCO2Convert)
            }
            return txTCO2Arr
        } else {
            for (let i = 0; i < dataArr.length; i++) {
                txTCO2Arr.push(dataArr[i]*txTCO2Convert)
            }
            return calculateSum(txTCO2Arr)
        }
    } catch (error) {
        console.log('ERROR: ', error)
    }
}

function createTxTCO2Chart(dateArr, dataArr, factor, type='daily') {
    let txTCO2Arr = [];
    if (type == 'daily') {
        for (let i = 0; i < dataArr.length; i++) {
            txTCO2Arr.push({x: dateArr[i], y: dataArr[i]*factor})
        }
        return txTCO2Arr
    } else {
        let cumTCO2Arr = [];
        for (let i = 0; i < dataArr.length; i++) {
            cumTCO2Arr.push(dataArr[i]*factor)
            txTCO2Arr.push({x: dateArr[i], y: calculateSum(cumTCO2Arr)})
        }
        return txTCO2Arr
    }
}

function calculateTxTCO2Chart(dataArr, factor, type='daily') {
    let txTCO2Arr = [];
    if (type == 'daily') {
        for (let i = 0; i < dataArr.length; i++) {
            txTCO2Arr.push({x: dataArr[i]['x'], y: dataArr[i]['y']*factor})
        }
        return txTCO2Arr
    } else {
        let cumTCO2Arr = [];
        for (let i = 0; i < dataArr.length; i++) {
            cumTCO2Arr.push(dataArr[i]['y']*factor)
            txTCO2Arr.push({x: dataArr[i]['x'], y: calculateSum(cumTCO2Arr)})
        }
        return txTCO2Arr
    }
}

function calculateMergeTxTCO2Chart(dataArr, factorPre, factorPost, type='daily') {
    let txTCO2Arr = [];
    if (type == 'daily') {
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i]['x'] > UNIXMult) {
                txTCO2Arr.push({x: dataArr[i]['x'], y: dataArr[i]['y']*factorPost})
            } else {
                txTCO2Arr.push({x: dataArr[i]['x'], y: dataArr[i]['y']*factorPre})
            }
            
        }
        return txTCO2Arr
    } else {
        let cumTCO2Arr = [];
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i]['x'] > UNIXMult) {
                cumTCO2Arr.push(dataArr[i]['y']*factorPost)
                txTCO2Arr.push({x: dataArr[i]['x'], y: calculateSum(cumTCO2Arr)})
            } else {
                cumTCO2Arr.push(dataArr[i]['y']*factorPre)
                txTCO2Arr.push({x: dataArr[i]['x'], y: calculateSum(cumTCO2Arr)})
            }
        }
        return txTCO2Arr
    }
}

function getArrFromChartArr(dataArr, type='daily') {
    let numArr = []
    if (type == 'daily') {
        for (let i = 0; i < dataArr.length; i++) {
            numArr.push(dataArr[i]['y'])
        }
        return numArr
    } else {
        let cumNumArr = [];
        for (let i = 0; i < dataArr.length; i++) {
            cumNumArr.push(dataArr[i]['y'])
            numArr.push(calculateSum(cumNumArr))
        }
        return numArr
    }
}

function getTCO2ArrFromChartArr(dataArr, factor, type='daily') {
    let numArr = []
    if (type == 'daily') {
        for (let i = 0; i < dataArr.length; i++) {
            numArr.push(dataArr[i]['y']*factor)
        }
        return numArr
    } else {
        let cumNumArr = [];
        for (let i = 0; i < dataArr.length; i++) {
            cumNumArr.push(dataArr[i]['y']*factor)
            numArr.push(calculateSum(cumNumArr))
        }
        return numArr
    }
}

function getMergeTCO2ArrFromChartArr(dataArr, factorPre, factorPost, type='daily') {
    let numArr = []
    if (type == 'daily') {
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i]['x'] > UNIXMult ) {
                numArr.push(dataArr[i]['y']*factorPost)
            } else {
                numArr.push(dataArr[i]['y']*factorPre)
            }
        } 
        return numArr
    } else {
        let cumNumArr = [];
        for (let i = 0; i < dataArr.length; i++) {
            if (dataArr[i]['x'] > UNIXMult ) {
                cumNumArr.push(dataArr[i]['y']*factorPost)
            } else {
                cumNumArr.push(dataArr[i]['y']*factorPre)
            }
            numArr.push(calculateSum(cumNumArr))
        }
        return numArr
    }
}

function numberWithCommas(x, n=0) {
    return x.toFixed(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}    

function calculateMedian(arr) {
    const mid = Math.floor(arr.length / 2),
    nums = [...arr].sort((a, b) => a - b);
    return arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2
}

function calculateSum(arr) {
    const sum = arr.reduce((a, b) => a + b, 0)
    return sum
}

function getTotalOffsetsMonthly(monthOffset) {
    let currentDate = new Date()
    let monthNumber = currentDate.getMonth() + 1;
    return monthOffset * monthNumber
}

function createUNIXOffsetChartData(monthOffset) {
    let monthDTArr = []
    let temp_dt
    let currentDate = new Date()
    let monthNumber = currentDate.getMonth() + 1
    for (let i = 1; i<=monthNumber; i++) {
        temp_dt = Math.floor(new Date('2022/0' + String(i) + '/01 12:00:00').getTime())
        monthDTArr.push({x: temp_dt, y: monthOffset*i})
    }
    return monthDTArr
}

function calculateTotalL1Emissions(dataArr) {
    let totalArr = [];
    for (let i = 0; i<dataArr.length; i++) {
        if (dataArr[i].emissions != null) {
            totalArr.push(parseInt(dataArr[i].emissions.replace(/,/g, '')))
        }
    }
    return calculateSum(totalArr)
}

function calculateTotalL1Offsets(dataArr) {
    let totalArr = [];
    for (let i = 0; i<dataArr.length; i++) {
        if (dataArr[i].offsets != null) {
            totalArr.push(parseInt(dataArr[i].offsets.replace(/,/g, '')))
        }
    }
    return calculateSum(totalArr)
}

function calculateTotalCarbonQty(dataArr) {
    let totalArr = [];
    for (let i = 0; i<dataArr.length; i++) {
        if (dataArr[i]['Quantity'] != null) {
            totalArr.push(parseInt(dataArr[i]['Quantity']))
        }
    }
    return calculateSum(totalArr)
}

function convertDTUNIX(dateStr) {
    const [year, month] = dateStr.split("-")
    let dt = year + "/" + month + "/1"
    let date = new Date(dt);
    // console.log('DATE ', date); // 👉️ Wed Jun 22 2022

    // let timestampInMs = date.getTime();

    let unixTimestamp = Math.floor(date.getTime().valueOf());
    // console.log('TIMESTAMP ', unixTimestamp)
    return unixTimestamp
}


export { createTxTCO2Chart, numberWithCommas, calculateMedian, calculateSum, getTotalOffsetsMonthly,
        createUNIXOffsetChartData, combineUnixDataArr, combineUnixFauxDataArr, calculateTxTCO2,
        calculateTxTCO2Chart, getArrFromChartArr, getTCO2ArrFromChartArr, calculateMergeTxTCO2Chart,
        getMergeTCO2ArrFromChartArr, calculateTotalL1Emissions, calculateTotalL1Offsets, calculateTotalCarbonQty,
        convertDTUNIX }