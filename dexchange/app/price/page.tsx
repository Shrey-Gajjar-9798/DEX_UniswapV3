import React from 'react'
import Tokentable from './Table'
import { Suspense } from 'react';

const Price = () => {
    return (
        <Suspense fallback={<span className="loading loading-ball loading-lg"></span>}>
        <div className='w-full h-auto flex overflow-hidden justify-center items-center flex-col'>
            <div id='pricetop' className='w-full mt-32 ml-10'>
                <label className='text-5xl font-medium'>Top Tokens Price</label>
            </div>
            <div className='w-full h-auto overflow-auto mt-8'>
            
                <Tokentable />
            </div>
        </div>
            </Suspense >
    )
}

export default Price