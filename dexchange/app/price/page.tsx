import React from 'react'
import Tokentable from './Table'

const Price = () => {
    return (
        <div className='w-full h-auto flex overflow-hidden justify-center items-center flex-col'>
            <div id='pricetop' className='w-full mt-32 ml-10'>
                <label className='text-5xl font-medium'>Top Tokens Price</label>
            </div>
            <div className='w-full h-auto overflow-auto mt-8'>
                <Tokentable />
            </div>
        </div>
    )
}

export default Price