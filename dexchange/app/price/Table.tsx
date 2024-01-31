"use client"
import React, { useState, useEffect, Key } from 'react'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { IoSearchOutline } from "react-icons/io5";
import FuzzySearch from 'fuzzy-search';

interface PriceData {
    image: string | undefined;
    market_cap_rank: number;
    id: Key | null | undefined;
    name: string,
    current_price: number,
    price_change_24h: number,
    total_supply: number,
    total_volume: number
}

const Tokentable = () => {
    const [cryptoData, setCryptoData] = useState<PriceData[]>([]);
    const [redisdata, setredisdata] = useState<PriceData[]>([]);
    const [searchtoken, setsearchtoken] = useState("")
    const [sort, setsort] = useState(false)

    const fetchFromRedis = async () => {

        var redresponse = await fetch("http://localhost:9798/data", {
            method: 'GET',
            redirect: 'follow'
        })
            .then(response => response.text())
            .then(result => {
                let redisresponse = JSON.parse(result)
                console.log("Result in redis is : ", redisresponse)
                setredisdata(redisresponse);
                return redisresponse
            })
            .catch(error => console.log('error', error));

        console.log("The result is : ", typeof redresponse);
        setCryptoData(redresponse)
    }

    const handleSarch = (e: any) => {
        setsearchtoken(e.target.value)
        const searcher = new FuzzySearch(redisdata, ['id'], {
            caseSensitive: false,
        });
        const result = searcher.search(e.target.value);
        setCryptoData(result)
    }

    const sortData = () => {
        setsort(!sort)

        if (!sort) {
            const sortedata = redisdata.sort((a, b) => {
                if (a.price_change_24h < b.price_change_24h) {
                    return -1;
                }
                else {
                    return 1;
                }
            })
            setCryptoData(sortedata);
        }
        else{
            const sortedata = redisdata.sort((a, b) => {
                if (a.price_change_24h > b.price_change_24h) {
                    return -1;
                }
                else {
                    return 1;
                }
            }) 
            setCryptoData(sortedata);
        }
    }

    return (
        <>
            <div className='flex flex-row w-full pl-6'>
                <div className='flex items-center border rounded-lg px-2 w-96 bg-slate-100 mt-1'>
                    <IoSearchOutline style={{ fontSize: "30px", opacity: 0.3, marginRight: "4px" }} />
                    <input type="text" className="[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none bg-slate-100 [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none w-full text-xl py-2  leading-tight font-normal rounded-md focus:outline-none focus:"
                        placeholder="Search token"
                        value={searchtoken}
                        onChange={handleSarch}
                    ></input>
                </div>
                <button className='btn btn-secondary ml-10' onClick={() => fetchFromRedis()}>Fetch data</button>
            </div>
            {cryptoData != undefined ?
                <div className="overflow-x-auto px-8 pt-4">
                    <table className="table border-gray-300 rounded-md">
                        <thead>
                            <tr>
                                <th className='cursor-pointer select-none'>#</th>
                                <th className='cursor-pointer select-none'>Name</th>
                                <th className='cursor-pointer select-none'>current_price</th>
                                <th className='flex cursor-pointer select-none' onClick={() => sortData()}>
                                    {!sort ? (<IoMdArrowDropdown className=' text-xl' />) :
                                        (<IoMdArrowDropup className='text-xl' />)}

                                    price_change_24h</th>
                                <th className='cursor-pointer select-none'>total_supply</th>
                                <th className='cursor-pointer select-none'>total_volume</th>
                            </tr>
                        </thead>

                        {cryptoData.map((item) => {
                            return (
                                <tbody key={item.id}>
                                    <tr>
                                        <td>{item.market_cap_rank}</td>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image ? item.image : "https://unsplash.com/photos/stacked-round-gold-colored-coins-on-white-surface-OApHds2yEGQ"} />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item!.name}</div>
                                                    <div className="text-sm opacity-50">United States</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.current_price}
                                            <br />
                                        </td>
                                        <td>

                                            {item.price_change_24h < 0 ?
                                                <div className='flex items-center'>
                                                    <IoMdArrowDropdown className='text-red-600 text-xl' />
                                                    <td className='text-red-600 pl-0'>{Number(item.price_change_24h.toFixed(2))}%<br /></td>
                                                </div>
                                                :
                                                <div className='flex items-center'>
                                                    <IoMdArrowDropup className='text-green-600 text-xl' />
                                                    <td className='text-green-600 pl-0' >{item.price_change_24h}<br /></td>
                                                </div>
                                            }
                                        </td>
                                        <td>{item.total_supply}</td>
                                        <td>{item.total_volume}</td>
                                    </tr>
                                </tbody>)
                        })}
                    </table>
                </div> : (<h2>Something went wrong !</h2>)
            }
        </>
    )
}

export default Tokentable