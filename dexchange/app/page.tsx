"use client"
import { FaArrowDown } from "react-icons/fa";
import React, { createContext, useState } from "react";
import { useSDK } from "@metamask/sdk-react";
import { ethers } from "ethers";
import { FaChevronDown } from "react-icons/fa";
import Swap from "./swap/Swap";
export default function Home() {

  const [balance, setbalance] = useState<number>()
  const { account } = useSDK();
  const Tokenbalance = createContext(balance);

  //**************  function to get the ether's balance of the connected account. ****************
  const fetchtokenprice = async () => {
    const provider = ethers.getDefaultProvider();
    const balance = (await provider.getBalance(account!)).toNumber();
    setbalance(balance);
  }

  return (
    <main>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='container bg-slate-200 rounded-lg w-1/3 static h-96 drop-shadow-md border border-slate-300 items-center '>
          <Swap className="Swap1" balance={10} price={10} />
          <Swap className="Swap2" balance={20} price={20} />
          <div><FaArrowDown style={{ padding: "5px",borderTop:"3px solid rgb(203 213 225)",borderBottom:"3px solid rgb(203 213 225)",fontSize: "33px", backgroundColor: "rgb(226 232 240)", borderRadius: "20px", color: "black", position: 'absolute', zIndex: 1, top: "39%", right: "45%" }} /></div>
        </div>
      </div>
    </main>
  )
}
