import Link from 'next/link'
import React from 'react'
import { GiEarthAmerica } from "react-icons/gi";
import { AiOutlineUser } from "react-icons/ai";


const Header5 = () => {
    return (
        <div className='flex items-center justify-between py-3 shadow-xl'>
            <div className='px-8 '>
                <h1 className='font-extrabold text-4xl px-4'>
                    OYO
                </h1>
            </div>

            <div className="grid grid-cols-5 border rounded-lg">
                <input type="text" placeholder='Bangluru' className='h-14 outline-none px-3 text-lg border-r border-gray-400 col-span-2 rounded-l-md' />
                <input type="date"  value="2012-06-01" className='col-span-1 border-r border-gray-400  text-lg px-3 outline-none h-14 text-gray-400'  name="birthday"/>
                <input type="text" placeholder='1 Room, 1 Guest' className='h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />
                <Link href={'/hotels'}>
                    <button className='h-14 px-3 py-2 w-full col-span-1 bg-green-500 hover:cursor-pointer hover:bg-green-600 text-white text-xl rounded-r-md'>Search</button>
                </Link>
            </div>

            <div className='flex justify-between items-center'>
                <div>
                <GiEarthAmerica size={29} className='ml-4' />
                </div>
                <div>
                <Link href={'/login'} className='flex items-center px-7'>
                <AiOutlineUser size={29} className=' text-gray-600 border-gray-800  mx-3 border-2 rounded-full p-1 not-italic' />
              <h3 className='whitespace-nowrap'>Login / Signup</h3>
              </Link>
                </div>


            </div>

        </div>
    )
}

export default Header5