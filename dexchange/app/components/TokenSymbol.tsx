import React from 'react'
import { FaChevronDown } from "react-icons/fa";

const symbol = ({icon ,image,symbol}:any) => {
    return (
        <>
            {icon ?
                (<><div className="container w-6 h-6 border border-slate-300 flex items-center justify-center rounded-full text-[6px]">
                    {image != null ? <img src={image} className='p-0' ></img>:symbol}
                    </div>
                    <label className="font-semibold px-1" >{symbol}</label>
                    <FaChevronDown /></>)
                :
                (<><div className="container w-6 h-6 border border-slate-300 flex items-center justify-center rounded-full text-[6px]">
                    {image != null ? <img src={image} className='p-0' ></img>:symbol}
                    </div>
                    <label className="font-semibold px-1" >{symbol}</label>
                    </>)
            }

        </>
    )
}

export default symbol