"use client"
import Image from 'next/image'
import React from 'react'

const Header4 = () => {
  return (
    <div className='flex my-14 justify-between border border-gray-300 p-3 rounded-lg'>
        <div className='flex items-center'>
            <Image src={'/fire.jpg'} alt="logo" width={200} height={200} className='w-20 h-20 m rounded-full mr-5' />

            <div className="text-xl">
                <p>
                    <span className='font-bold'>Get access to exclusive deals</span>

                </p>
                <p>
                    <span>Get the latest deals and discounts</span>
                </p>
            </div>
        </div>

        <div className="flex items-center">
            <input type="email" placeholder='Enter your email' className='h-14 w-80 outline-none px-4 py-2 mr-5 rounded-lg text-lg border border-gray-300  ' />
            <button type='submit' className=' px-4 py-2 h-14  bg-green-700 w-52 hover:cursor-pointer hover:bg-green-900 text-white text-xl rounded-md'>Notify</button>
        </div>
    </div>
  )
}

export default Header4