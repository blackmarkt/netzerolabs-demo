import Link from 'next/link'
import Web3 from "web3";
import React, { useEffect } from "react";
// import creditTable from '../../styles/CreditTable.module.css'
import { numberWithCommas } from '../../data/emissionsData'
// import { projectTypeCats } from '../../data/carbonCreditData'

const OnChainTxnsTable = ( props ) => {
    let web3 = new Web3("https://polygon-mainnet.infura.io/v3/88fe9fe75c1045c380f70457ad0d44ba")
    // console.log(web3)

    let subscription = web3.eth.subscribe(
        "logs",
        {
        // BCT
        address: "0x2F800Db0fdb5223b3C3f354886d907A671414A7F",
        },
        function (error, result) {
        if (!error) {
            console.log(result);
        }
        }
    )
    .on("data", function (log) {
        console.log(log);
    });

    console.log('SUBSCRIPTION ', subscription)

}

export default OnChainTxnsTable