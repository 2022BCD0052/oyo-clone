import Image from 'next/image'
import React from 'react'
import { FaStar } from "react-icons/fa6";
import { PiElevatorLight } from "react-icons/pi";
import { IoWifiSharp } from "react-icons/io5";
import { GiWashingMachine } from "react-icons/gi";
import Link from 'next/link';


const Hotel = () => {
    return (
        <div className=' border-b pb-6 mb-6'>
            <div className="flex overflow-y-hidden ">
                <div className='flex items-cente overflow-hidden ' >
                    <div>
                        <Image src={'/img1.avif'} alt='' width={300} height={200} className='w-[100%] h-full cursor-pointer mr-1'></Image>

                    </div>

                    <div className=" cursor-pointer ml-1 overflow-hidden">

                        
                        <div>
                            <Image src={'/img.jpeg'} alt='' width={100} height={100} className=' h-12 w-[100%] mr-2  mb-0.5'></Image>
                        </div>
                        <div>
                            <Image src={'/img.jpeg'} alt='' width={100} height={100} className='h-12 w-[100%] mr-2 mb-0.5'></Image>
                        </div>
                        <div>
                            <Image src={'/img.jpeg'} alt='' width={100} height={100} className='h-12 w-[100%]  mr-2 mb-0.5'></Image>
                        </div>
                        <div>
                            <Image src={'/img.jpeg'} alt='' width={100} height={100} className='h-12 w-[100%]  mr-2 mb-0.5'></Image>
                        </div>
                        <div>
                            <Image src={'/img.jpeg'} alt='' width={100} height={100} className=' h-12 w-[100%] mr-2'></Image>
                        </div>

                    </div>
                </div>

                <div className=' flex-col ml-3  '>
                    <h2 className='font-bold text-xl line-clamp-1'>Super OYO Townhouse 1292 XOTEL</h2>

                    <p className='text-gray-500 text-sm line-clamp-3'>3.5 km from City Centre</p>

                    <div>
                        <div className='flex mt-3  gap-2 '>
                            <div className='flex text-white  items-center gap-2 bg-green-600 px-2  rounded-sm mr-2'>4.4
                                <FaStar className='text-white  size-3 ' />
                            </div>
                            <p className='text-gray-500 font-medium flex gap-2 '>(1024 Ratings)<span>.Fabulous</span> </p>
                        </div>

                        <div className="flex my-2 gap-4 ">
                            <div className='flex items-center'>
                                <PiElevatorLight className=' text-gray-500' />
                                <p className='text-gray-500'>Elevator</p>
                            </div>
                            <div className='flex items-center'>
                                <IoWifiSharp className=' text-gray-500' />
                                <p className='text-gray-500'>Wifi</p>
                            </div>
                            <div className='flex items-center'>
                                <GiWashingMachine className=' text-gray-500' />
                                <p className='text-gray-500'>Washing Machine</p>
                            </div>
                            <div className="flex items-center">
                                <p className='text-gray-500'>+ 5 more</p>
                            </div>
                        </div>
                        <button className='flex gap-1 items-center border pr-2'>
                            <Image src={'/w.jpg'} alt='' width={30} height={30} className='border' ></Image>
                            <p className='uppercase font-semibold text-sm'>Wizard member</p>
                        </button>
                    </div>

                    <div className='flex   mt-4 justify-between gap-20  '>
                        <div className=''>
                            <p className='flex gap-2 items-center'>
                                <span className='text-2xl font-semibold'>$765</span>
                                <span className='text-gray-600 font-semibold text-xl line-through'> $1765</span>
                                <span className='text-orange-500 font-bold'>71% off</span>
                            </p>
                            <p className='line-clamp-1'>+131 taxes & fees . per room per night</p>
                        </div>
                        <div className=" flex gap-2">
                            <Link href={'/hotels/2'}>
                                <button className='border border-gray-800 shadow-inner rounded-md w-32 h-12'>
                                    View Details</button></Link>
                            <button className='bg-green-600 text-white rounded-md  w-32 h-12'>Book Now</button>
                        </div>
                    </div>



                </div>
            </div>


        </div>
    )
}

export default Hotel