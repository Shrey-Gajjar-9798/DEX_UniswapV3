import React, {useState} from "react";

interface ContextDetails {
    tokenA: String,
    tokenB: String,
    mainnetUrl:String
}

export const TransactionContext = React.createContext();


export const TransactionProvider = ({children}:any) => {
    var tokenA = "ETH"
    var tokenB = "select"
    const mainnetUrl = "https://mainnet.infura.io/v3/ffad543983e34fdfa394a70929beb02e"

    return (
        <TransactionContext.Provider
        value={{
            tokenA,
            tokenB,
            mainnetUrl
        }}
        >
            {children}
        </TransactionContext.Provider>
    )
}