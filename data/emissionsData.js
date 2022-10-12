
const dateLabels = ["9/15/22", "9/16/22", "9/17/22", "9/18/22", "9/19/22", "9/20/22", "9/21/22", "9/22/22", "9/23/22", 
                    "9/24/22", "9/25/22", "9/26/22", "9/27/22", "9/28/22", "9/29/22", "9/30/22", "10/1/22", "10/2/22", 
                    "10/3/22", "10/4/22", "10/5/22", "10/6/22", "10/7/22", "10/8/22", "10/9/22", "10/10/22"]

const emissionsData = [12.6564, 13.11849, 13.22077, 11.56893, 11.3821, 11.49031, 11.0013, 11.18297, 11.19895, 11.09206, 
                       11.07217, 11.41218, 12.14294, 11.09706, 11.29558, 12.25886, 11.58038, 11.63876, 13.07142, 11.85269, 
                       11.69356, 12.02667, 11.80358, 11.80084, 10.68531, 11.2339]

const cumEmissionsData = [12.6564, 25.77489, 38.99566, 50.56459, 61.94669, 73.437, 84.4383, 95.62127, 106.82022, 117.91228, 
                          128.98445, 140.39663, 152.53957, 163.63663, 174.93221, 187.19107, 198.77145, 210.41021, 223.48163, 
                          235.33432, 247.02788, 259.05455, 270.85813, 282.65897, 293.34428, 304.57818]

const txData = [1265640, 1311849, 1322077, 1156893, 1138210, 1149031, 1100130, 1118297, 1119895, 1109206, 1107217, 1141218, 
                1214294, 1109706, 1129558, 1225886, 1158038, 1163876, 1307142, 1185269, 1169356, 1202667, 1180358, 1180084, 
                1068531, 1123390]

const operationsdata = [
            { name: 'Office', y: 100 },
            { name: 'Transportation', y: 100 },
            { name: 'Supplies', y: 100 },
            { name: 'Misc', y: 100 },
]

const operationsDailyData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


function numberWithCommas(x, n=0) {
    // return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // return x.toFixed(n).toLocaleString("en-US")
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

export {dateLabels, emissionsData, cumEmissionsData, txData, operationsdata, operationsDailyData,
        calculateMedian, calculateSum, numberWithCommas} 