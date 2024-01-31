"use client"
import React,{useState} from 'react'
import SwapToken from './SwapToken'
import {ethers} from "ethers"
const Swap = ({balance,price}:any) => {

    const [number, setnumber] = useState<any>();
    const [tokencontract, settokencontract] = useState()

    return (
        <>
            <div className='container bg-white w-auto h-36 mx-4 p-4  mt-4 rounded-lg drop-shadow-md border border-slate-300 '>
                {/* container with swap functions input, balance, token select */}
                <div><label className="text-sm font-medium text-slate-600">You Pay</label></div>
                <div className="flex justify-between items-center">
                    <input type="number" className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-9/12 text-4xl py-1  leading-tight font-medium rounded-md focus:outline-none focus:"
                        placeholder="0"
                        value={number}
                        onChange={(e)=> setnumber(e.target.value)}
                    ></input>
                    {/* below container for token change and model open */}
                    <SwapToken />
                </div>
                <div className="flex justify-between">
                    <label className="text-sm font-medium text-slate-600">`${price}M`</label>
                    <label className="text-sm font-medium text-slate-600">`Balance:${balance}`</label>
                </div>
            </div>
        </>
    )
}

export default Swap