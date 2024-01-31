import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const TokenSymbol = ({icon}:any) => {
    return (
        <>
            {icon ?
                (<><div className="container w-6 h-6 border border-slate-300 flex items-center justify-center px-1 rounded-full text-[8px]">ETH</div>
                    <label className="font-semibold px-1" >ETH</label>
                    <FaChevronDown /></>)
                :
                (<><div className="container w-6 h-6 border border-slate-300 flex items-center justify-center px-1 rounded-full text-[8px]">ETH</div>
                    <label className="font-semibold px-1" >ETH</label>
                    </>)
            }

        </>
    )
}

export default TokenSymbol