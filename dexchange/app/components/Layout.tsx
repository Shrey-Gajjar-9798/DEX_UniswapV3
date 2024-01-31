import React, { PropsWithChildren } from "react";
import Navbar from "./Navbar";
import dynamic from 'next/dynamic'
const Blocknumber = dynamic(() => import('./Blocknumber'), { ssr: false })

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      <div className="container">{children}</div>
      <Blocknumber />
    </>
  );
};

export default Layout;