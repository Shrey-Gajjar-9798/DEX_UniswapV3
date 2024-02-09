"use client"
import { FaArrowDown } from "react-icons/fa";
import React, { useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";
import Swap from "./swap/Swap";

import { Suspense } from 'react';
import {TransactionProvider } from "./components/Transaction"

export default function Home() {

  const [balance, setbalance] = useState<number>()


  const { account } = useSDK();

  //**************  function to get the ether's balance of the connected account. ****************
  const fetchtokenprice = async () => {
    const provider = ethers.getDefaultProvider();
    const balance = (await provider.getBalance(account!)).toNumber();
    setbalance(balance);
  }

  return (
    <main>
      <TransactionProvider>
      <div className='w-full h-screen flex justify-center items-center'>
      <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
        <div className='container bg-slate-200 rounded-lg w-1/3 static h-max drop-shadow-md border border-slate-300 items-center flex flex-col'>
              <Swap />
          <div><FaArrowDown style={{ padding: "5px", borderTop: "3px solid rgb(203 213 225)", borderBottom: "3px solid rgb(203 213 225)", fontSize: "33px", backgroundColor: "rgb(226 232 240)", borderRadius: "20px", color: "black", position: 'absolute', zIndex: 1, top: "39%", right: "45%" }} /></div>
        </div>
        </Suspense>
      </div>
      </TransactionProvider>
    </main>
  )
}
