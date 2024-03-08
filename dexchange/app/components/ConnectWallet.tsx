"use client"
import React, { useEffect, useState } from 'react'
import { useSDK, MetaMaskProvider } from "@metamask/sdk-react";

const ConnectWallet = () =>{

  const { sdk, provider, account } = useSDK();

  const connect = async () => {
    try {
      await sdk?.connect();
    } catch (err) {
      console.warn(`No accounts found`, err);
    }
  };
  

  const disconnect = () => {
    if (sdk) {
      sdk.terminate();
    }
  };

  const formatAddress = (addr: string | undefined) => {
    return `${addr?.substring(0, 7)} . . . ${addr?.substring(addr.length-4, addr.length)}`;
  };

  const wallet = () => {
    if(account){
      return (<button className='btn' onClick={() => disconnect()}>{formatAddress(account)}</button>);
    }
    else{
      return (<button className='btn' onClick={() => connect()}>{"Connect Wallet"}</button>)
    }
  }

    return (
        <>
            {wallet()}
        </>
    )
}

export default ConnectWallet;
