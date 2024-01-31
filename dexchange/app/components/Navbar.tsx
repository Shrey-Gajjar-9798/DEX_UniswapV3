"use client"
import React from 'react'
// import ConnectWallet from '../components/ConnectWallet';
import { MetaMaskProvider } from "@metamask/sdk-react";
import Link from 'next/link';
import dynamic from 'next/dynamic'
const ConnectWallet = dynamic(() => import('../components/ConnectWallet'), { ssr: false })

const Navbar = () => {

    const host =
        typeof window !== "undefined" ? window.location.host : "defaultHost";

    const sdkOptions = {    
        logging: { developerMode: false },
        checkInstallationImmediately: false,
        dappMetadata: {
            name: "DEXCHANGE",
            url: host, // using the host constant defined above
        },
    };

    return (
        <div className="navbar absolute bg-slate-800 text-white pr-10 pl-8">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link className='text-black' href={"/"}>Swap</Link></li>
                        <li><Link className='text-black' href={"/pools"}>Pools</Link></li>
                        <li><Link className='text-black' href={"/price"}>Price</Link></li>
                    </ul>
                </div>
                <Link href={"/"} className="btn btn-ghost text-2xl font-bold">D-Exchange</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link href={"/"}>Swap</Link></li>
                    <li><Link href={"/pools"}>Pools</Link></li>
                    <li><Link href={"/price"}>price</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <MetaMaskProvider debug={false} sdkOptions={sdkOptions}>
                    <ConnectWallet></ConnectWallet>
                </MetaMaskProvider>
            </div>
        </div>
    )
}

export default Navbar;