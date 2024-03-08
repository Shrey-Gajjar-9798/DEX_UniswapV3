import React from "react";
import Swap from "./swap/Swap";
import { Suspense } from 'react';

export default function Home() {
  return (
    <main>
      <div className='w-full h-screen flex justify-center items-center'>
      <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
        <div className='container bg-slate-200 rounded-lg w-1/3 static h-max drop-shadow-md border border-slate-300 items-center flex flex-col'>
              <Swap />
        </div>
        </Suspense>
      </div>
    </main>
  )
}
