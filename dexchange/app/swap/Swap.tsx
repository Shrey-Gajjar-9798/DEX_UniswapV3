"use client"
import React, { useEffect, useState } from 'react'
import { ethers } from "ethers"
import TokenSymbol from '../components/TokenSymbol';
import Modal from './Modal';
import { swaptransaction } from '../components/blockchain/SwapTransaction';
import { Suspense } from 'react';
import { FaArrowDown } from "react-icons/fa";
import erc20ABI from  "../components/blockchain/ERC20.json"

const Swap = ({ id }: any) => {

    const [number, setnumber] = useState<any>();
    const [oppositeNumber, setoppositeNumber] = useState<any>();
    const [ids, setIds] = useState("")
    const [symbolA, setsymbolA] = useState("WETH")
    const [symbolB, setsymbolB] = useState("USDC")
    const [imageA, setimageA] = useState("https://changenow.io/images/cached/weth.png")
    const [imageB, setimageB] = useState("https://assets.coingecko.com/coins/images/6319/large/usdc.png?1696506694")
    const [addressA, setaddressA] = useState<string>("0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2")
    const [addressB, setaddressB] = useState<string>("0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48")
    const [signer, setsigner] = useState<ethers.providers.JsonRpcSigner>()

    const [balanceA, setbalanceA] = useState<string>()

    useEffect(() => {
        if (window.ethereum) {
            getSignerHandler(window.ethereum);
            // getbalance(addressA, sign)
        }
        
    }, [addressA]);

    // useEffect(() => {
    //     if (window.ethereum) {
    //         getSignerHandler(window.ethereum);
    //         // getbalance(addressA, sign)
    //     }
        
    // }, [addressB]);

    const  getSignerHandler = async (data:any) =>{
        var provider = new ethers.providers.Web3Provider(data)
        // MetaMask requires requesting permission to connect users accounts
        await provider.send("eth_requestAccounts", [])
        // The MetaMask plugin also allows signing transactions to
        // send ether and pay to change state within the blockchain.
        // For this, you need the account signer...
        const sign = await provider.getSigner()
        setsigner(sign);
        getbalance(addressA,sign);
    }

    const getbalance = async (token: string,sign: ethers.providers.JsonRpcSigner) => {
        const useraddress = await sign?.getAddress()
        console.log("user account is: ",useraddress)
        const contract = new ethers.Contract(token, erc20ABI, sign)
        const balance = await contract.balanceOf(useraddress)
        const etherbalance = ethers.utils.formatEther(balance);
        console.log("balance of user A:",etherbalance);
        setbalanceA(etherbalance? etherbalance : "-");
    }

    const handleclick = (index: any) => {
        console.log("indes", index)
        if (index == 1) {
            (document.getElementById('my_modal_3')! as any)?.showModal()
        } else {
            (document.getElementById('my_modal_34')! as any)?.showModal()
        }
    }


    //Swap Transaction
    const handleSwapTransaction = async () => {
        // var signer;

        if (signer) {
            if (addressB != null && number != null && addressA != null) {
                alert("We can proceed now !")
                await swaptransaction(addressA!, addressB, number, signer);
            }
            else { alert("Some Values are missing! ") }
        }
        else { alert("Metamask is not installed!") }
    }

    //Swap token from button click

    const changeTokens = () => {

        //Swap symbols
        let temp = symbolA;
        setsymbolA(symbolB);
        setsymbolB(temp);

        //swap Images
        temp = imageA;
        setimageA(imageB);
        setimageB(temp);

        //Swap addresses;
        temp = addressA;
        setaddressA(addressB);
        setaddressB(temp);
    }

    return (
        <>
            <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
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
                                <TokenSymbol image={imageA} icon={true} symbol={symbolA} setimage={setimageA} setaddress={setaddressA} ></TokenSymbol>
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
                        <label className="text-sm font-medium text-slate-600">{balanceA? `Balance:${balanceA}`: <span className="loading loading-dots loading-sm mr-3"></span>}</label>
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
                                <TokenSymbol image={imageB} icon={true} symbol={symbolB} setimage={setimageB} setaddress={setaddressB}  ></TokenSymbol>
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

                <button className='btn btn-secondary w-11/12 text-stone-50 my-5' onClick={handleSwapTransaction}>Swap Token</button>
            </Suspense>
            <div>
                <FaArrowDown style={{ padding: "5px", borderTop: "3px solid rgb(203 213 225)", borderBottom: "3px solid rgb(203 213 225)", fontSize: "33px", backgroundColor: "rgb(226 232 240)", borderRadius: "20px", color: "black", position: 'absolute', zIndex: 1, top: "38%", right: "45%" }}
                    onClick={changeTokens}
                />
            </div>
        </>
    )
}

export default Swap