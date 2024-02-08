"use client"
import React, { useState } from 'react'
import SwapToken from './SwapToken'
import { ethers } from "ethers"
import TokenSymbol from '../components/TokenSymbol';
import Modal from './Modal';
import Modal1 from './Modal';


const Swap = ({ id }: any) => {

    const [number, setnumber] = useState<any>();
    const [oppositeNumber, setoppositeNumber] = useState<any>();
    const [ids, setIds] = useState("")
    const [symbolA, setsymbolA] = useState("ETH")
    const [symbolB, setsymbolB] = useState("SELECT")
    const [imageA, setimageA] = useState("https://assets.coingecko.com/coins/images/279/large/ethereum.png?1696501628")
    const [imageB, setimageB] = useState(null)
    const [addressA, setaddressA] = useState<String>()
    const [addressB, setaddressB] = useState<String>()

    

    // const tokensymbol;
    // const tokenaddress;  /// future implementation for fetching the prica and balance.

    const handleclick = (index: any) => {
        console.log("indes", index)
        if (index == 1) {

            (document.getElementById('my_modal_3')! as any)?.showModal()
        } else {
            (document.getElementById('my_modal_34')! as any)?.showModal()

        }
    }

    return (
        <>
            <div className='container bg-white w-auto h-36 mx-4 p-4  mt-4 rounded-lg drop-shadow-md border border-slate-300 '>
                {/* container with swap functions input, balance, token select */}
                <div><label className="text-sm font-medium text-slate-600">You Pay</label></div>
                <div className="flex justify-between items-center">
                    <input type="number" className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-9/12 text-4xl py-1  leading-tight font-medium rounded-md focus:outline-none focus:"
                        placeholder="0"
                        value={number}
                        onChange={(e) => setnumber(e.target.value)}
                    ></input>

                    <div>
                        <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center" onClick={() => {
                            console.log("id", id)
                            setIds(id)
                            handleclick(1)
                        }}>
                            <TokenSymbol image={imageA} icon={true} symbol={symbolA} setimage={setimageA}  setaddress={setaddressA} ></TokenSymbol>
                        </div>
                    </div>
                    {<dialog id="my_modal_3" className="modal">
                        <Modal
                            name={'my_modal_3'}
                            setsymbol={setsymbolA}
                            setimage={setimageA}
                            setaddress={setaddressA}
                        />
                    </dialog>}
                    {/* <SwapToken id={index} symbol={symbol} setsymbol={setsymbol} /> */}
                </div>
                <div className="flex justify-between">
                    <label className="text-sm font-medium text-slate-600">`$898M`</label>
                    <label className="text-sm font-medium text-slate-600">`Balance:$893`</label>
                </div>
            </div>


            {/* ------------------------  Lower Swap component ---------------------------------------------*/}
            <div className='container bg-white w-auto h-36 mx-4 p-4  mt-4 rounded-lg drop-shadow-md border border-slate-300 '>
                {/* container with swap functions input, balance, token select */}
                <div><label className="text-sm font-medium text-slate-600">You Pay</label></div>
                <div className="flex justify-between items-center">
                    <input type="number" className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-9/12 text-4xl py-1  leading-tight font-medium rounded-md focus:outline-none focus:"
                        placeholder="0"
                        value={oppositeNumber}
                        onChange={(e) => setnumber(e.target.value)}
                    ></input>

                    <div>
                        <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center" onClick={() => {
                            console.log("id", id)
                            setIds(id)
                            handleclick(2)
                        }}>
                            <TokenSymbol image={imageB} icon={true} symbol={symbolB} setimage={setimageB}  setaddress={setaddressB}  ></TokenSymbol>
                        </div>
                    </div>
                    {<dialog id="my_modal_34" className="modal">
                        <Modal name={'my_modal_34'} image={imageB} setsymbol={setsymbolB} setimage={setimageB} setaddress={setaddressB} />
                    </dialog>}
                    {/* <SwapToken id={index} symbol={symbol} setsymbol={setsymbol} /> */}
                </div>
                <div className="flex justify-between">
                    <label className="text-sm font-medium text-slate-600">`$898M`</label>
                    <label className="text-sm font-medium text-slate-600">`Balance:$893`</label>
                </div>
            </div>
        </>
    )
}

export default Swap