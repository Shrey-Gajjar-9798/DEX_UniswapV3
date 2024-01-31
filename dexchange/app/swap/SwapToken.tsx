"use client"
import React from 'react'
import Modal from './Modal';
import TokenSymbol from '../components/TokenSymbol';

const SwapToken = () => {
    return (<>
        <div>
            <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center" onClick={() => (document.getElementById('my_modal_3')! as any).showModal()}>
                <TokenSymbol icon={true} />
            </div>
        </div>
        <dialog id="my_modal_3" className="modal">
            <Modal />
        </dialog>
    </>
    )
}

export default SwapToken