"use client"
import React, { useEffect, useState } from 'react'
import { RiRadioButtonLine } from "react-icons/ri";
import { MetaMaskProvider,useSDK } from '@metamask/sdk-react';
import { ethers } from 'ethers';

const Blocknumber = () => {
    
    const [block, setblock] = useState<number>()
    
    useEffect(() => { 
        const interval = setInterval(() => {
            getblocknumber()
        }, 8000);
 
        //Clearing the interval
        return () => clearInterval(interval);

    }, [block])


    const getblocknumber = async() => {
        const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/ffad543983e34fdfa394a70929beb02e")
        const blockNumber = await provider.getBlockNumber();
        console.log(blockNumber);
        setblock(blockNumber);
        
    }


    return (
        <div className="text-xs fixed right-3 bottom-3 items-center flex text-green-300">
            {block}
            <RiRadioButtonLine className="ml-1" />
        </div>)
}

export default Blocknumber