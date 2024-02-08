"use client"
import React, { useState } from 'react'
import Modal from './Modal';
import TokenSymbol from '../components/TokenSymbol';


const SwapToken = ({symbol, setsymbol,id}:any) => {

    const [ids,setIds] = useState("")

    const handleclick = () => {

        (document.getElementById('my_modal_3')! as any)?.showModal()
    }

    console.log("-=-=-=-=-",id)


    return (
        <>
            <div>
                <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center" onClick={() =>{
                            console.log("id",id)
                            setIds(id)

                 handleclick()}}>
                    <TokenSymbol icon={true} symbol={symbol} />
                </div>
            </div>
            <dialog id="my_modal_3" className="modal">
                <Modal  setsymbol={setsymbol} closeModal={handleclick} />
            </dialog>
        </>
    )
}

export default SwapToken