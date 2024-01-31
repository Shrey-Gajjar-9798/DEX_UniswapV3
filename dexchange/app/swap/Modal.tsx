import React,{useContext} from 'react'
import { IoSearchOutline } from "react-icons/io5";
import TokenSymbol from '../components/TokenSymbol';

const Modal = () => {

    // const balance = useContext(Tokenbalance);

    return (
        <div className="modal-box">
            <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <h3 className="font-semibold text-base">Select a token</h3>
            <div className='flex items-center border rounded-lg px-2 bg-slate-100 mt-1'>
                <IoSearchOutline style={{ fontSize: "30px", opacity: 0.3, marginRight: "4px" }} />
                <input type="number" className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none bg-slate-100 [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-full text-3xl py-1  leading-tight font-medium rounded-md focus:outline-none focus:" placeholder="0"></input>
            </div>
            <div className='grid grid-rows-2 grid-cols-3 grid-flow-col gap-1 mt-2 w-9/12'>
                <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center">
                    <TokenSymbol />
                </div>
                <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center">
                    <TokenSymbol />
                </div>
                <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center">
                    <TokenSymbol />
                </div>
                <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center">
                    <TokenSymbol />
                </div>
                <div className=" container bg-slate-100 w-max px-2 h-10 rounded-full ml-1 flex items-center">
                    <TokenSymbol />
                </div>
            </div>
            <p className="py-4">Press ESC key or click on ✕ button to close</p>
        </div>
    )
}

export default Modal