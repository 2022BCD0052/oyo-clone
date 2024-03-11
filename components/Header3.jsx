"use client"
import React from 'react';

const Header3 = () => {
    return (
        <div className=' h-64 p-14' style={{backgroundImage: 'url(/header3.avif) ',width:"100%", backgroundSize: '', backgroundRepeat: 'no-repeat'}}>
            <div className='px-16'>
                <h2 className='text-4xl text-white text-center font-bold py-2'>
                    Over 157,000 vacation rentals and hotels worldwide
                </h2>
                <div className="grid grid-cols-5 my-5 mx-20">
                    <input type="text" placeholder='Search...' className='h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-2 rounded-l-md' />
                    <input type="text" placeholder='Check-in' className='h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />
                    <input type="text" placeholder='Check-out' className='h-14 outline-none px-3 text-lg border-r-2 border-gray-400 col-span-1' />
                    <button type='submit' className='h-14 px-3 py-2 col-span-1 bg-red-300 hover:cursor-pointer hover:bg-red-500 text-white text-xl rounded-r-md'>Search</button>
                </div>
                {/* <div className="flex items-center ">
                    <button className='h-16 px-3 py-2 hover:cursor-pointer text-white text-xl'>Continue Search</button>
                    <button className='h-12 px-2 py-2 hover:cursor-pointer border-white border-2 text-white mr-5 hover:bg-gray-500 rounded-3xl'>Need Help please verify?</button>
                </div> */}
            </div>
        </div>
    );
};

export default Header3;
