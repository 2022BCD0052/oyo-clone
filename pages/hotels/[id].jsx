import React, { useRef, useState } from 'react';
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import { LiaGreaterThanSolid } from "react-icons/lia";
import Image from 'next/image';
import { PiElevatorLight } from "react-icons/pi";
import { IoWifiSharp } from "react-icons/io5";
import { GiWashingMachine } from "react-icons/gi";
import { TbAirConditioning } from "react-icons/tb";
import { PiMonitorPlayDuotone } from "react-icons/pi";
import { LiaCarBatterySolid } from "react-icons/lia";
import { FcApproval } from "react-icons/fc";



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import Footer from '@/components/Footer';
import Header5 from '@/components/Header5';
import HotelPayment from '@/components/HotelPayment';

export default function App() {
    return (
        <>
            <div>
                <div>
                    <Header5 />
                </div>

                <div className='mt-3'>
                    <newSwipper />
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={1}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <SwiperSlide>
                            <Image src={'/img.jpeg'} alt='' width={700} height={700} className=''></Image>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={'/img.jpeg'} alt='' width={500} height={200} className=''></Image>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={'/img.jpeg'} alt='' width={500} height={200} ></Image>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={'/img.jpeg'} alt='' width={500} height={200} ></Image>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={'/img.jpeg'} alt='' width={500} height={200} ></Image>
                        </SwiperSlide>

                        <SwiperSlide>
                            <Image src={'/img.jpeg'} alt='' width={200} height={200} ></Image>
                        </SwiperSlide>

                    </Swiper>

                </div>

                <div className='flex py-10 px-16'>

                    <div className='w-8/12 h-auto '  >
                        <div className=' px-16 mr-6 '>

                            <div className='flex items-center'>

                                <div className='flex-col items-center '>
                                    <h1 className='text-3xl font-bold'>Super OYO Townhouse 1292 Xotel</h1>
                                    <p className='text-gray-400  w-10/12 py-2'>Plot No - 16, Sy No.41, 2nd Cross, Satish Reddy Layout,
                                        asdeesd Opposite PB Sof sdfgh sfgt Tech, Electronic City, Phase 2, Bangalore</p>
                                </div>

                                <div className='flex-col items-center  rounded-lg shadow-xl'>
                                    <p className='flex gap-2 w-full bg-green-700 border-b text-white p-1 items-center justify-center '>3.3<FaStar /></p>
                                    <p className='whitespace-nowrap p-0.5 px-1 text-sm bg-gray-300'>1031 Ratings</p>
                                </div>
                            </div>

                            <div className='flex-col py-5'>
                                <div className='flex items-center gap-4'>
                                    <button className='items-center rounded-md text-sm px-5 text-white text-center p-0.5 bg-slate-900'> Townhouse</button>
                                    <button className='flex gap-1 items-center border pr-2 bg-white rounded-md '>
                                        <Image src={'/w.jpg'} alt='' width={22} height={30} className='' ></Image>
                                        <p className='uppercase font-semibold text-sm'>Wizard member</p>
                                    </button>
                                </div>
                                <div className='px-10 flex items-center   py-5'>
                                    <p className='whitespace-nowrap flex items-center gap-1 text-xl font-medium'> Checking in rating<span><LiaGreaterThanSolid size={11} /> </span> Delightful experience</p>
                                </div>
                            </div>

                            <div className='flex-col'>
                                <div className='flex-col'>
                                    <div className='text-2xl font-bold '>American</div>
                                    <div className='grid grid-cols-3 style-none  text-xl mt-5 '>

                                        <li className='list-none flex  items-center gap-3 py-4'><GiWashingMachine size={24} /> AC</li>
                                        <li className='list-none flex  items-center gap-3 py-4' ><IoWifiSharp size={25} /> sdfgn</li>
                                        <li className='list-none flex  items-center gap-3 py-4'  ><PiElevatorLight size={25} /> sdfgn</li>
                                        <li className='list-none flex  items-center gap-3 py-4'><TbAirConditioning size={25} /> sdfgn</li>
                                        <li className='list-none flex  items-center gap-3 py-4' ><PiMonitorPlayDuotone size={25} /> sdfgn</li>
                                        <li className='list-none flex  items-center gap-3 py-4'><LiaCarBatterySolid /> sdfgn</li>

                                    </div>
                                    <div className='font-bold text-xl text-red-700'>Show More</div>
                                </div>

                            </div>



                            <div className='my-10' >
                                <h1 className='text-2xl font-bold my-4'>About This OYO</h1>
                                <p className='text-justify w-10/12 font-medium text-gray-700 '>Super OYO Townhouse 1292 Xotel is a modern and trendy property located in Electronic City, Bangalore. The property is close to tourist attractions like Begur Lake, Begur Fort, and Begur Temple. </p>
                                <p className='my-4 font-bold text-red-700 text-xl'>Read More</p>
                            </div>

                            <div >
                                <div className='text-2xl font-bold'>Choose your room</div>
                                <div className='flex-col border my-4'>

                                    <div className='flex bg-gradient-to-l items-center gap-2 py-1  font-medium px-4 jus from-purple-300 to bg-purple-900'>
                                        <FaStar className='text-yellow-500' size={14} />
                                        <span>selected category</span>
                                    </div>

                                    <div className='flex justify-between p-5 border-b'>
                                        <div className=''>
                                            <p className='text-2xl font-medium flex items-center gap-2'>Classic <FcApproval /></p>
                                            <p className='font-medium text-gray-600 py-4'>Room size: 100 sqft</p>

                                            <div className='flex space-x-12 pt-6'>
                                                <p className='flex space-x-3 items-center gap-2 font-medium text-gray-600  '>
                                                    <TbAirConditioning size={20} />
                                                    AC

                                                </p>
                                                <p className='flex space-x-3 items-center gap-3 font-medium text-gray-600 '>
                                                    <PiMonitorPlayDuotone size={20} />
                                                    TV
                                                </p>

                                            </div>

                                        </div>

                                        <div className=''>
                                            <Image src={'/img.jpeg'} width={200} height={100} className='rounded-md'></Image>
                                        </div>
                                    </div>

                                    <div className='flex justify-between p-2 px-3' >
                                        <div className='flex-col'>
                                            <p className='p-1 space-x-1'><span className='text-2xl font-bold'>$432</span> <span className='font-medium text-xl text-gray-500'>$3123</span></p>
                                            <p className=' text-gray-500'>+ $121 taxes & fees</p>
                                        </div>

                                        <div className='border px-5 w-auto text-center flex items-center font-medium text-xl uppercase shadow-inner rounded-md ' ><FcApproval className='mx-3' />selected</div>
                                    </div>

                                </div>


                            </div>

                        </div>
                    </div>




                    <div className='w-4/12 h-auto'>
                        <HotelPayment/>
                    </div>
                </div>
<div>
    <Footer />
</div>


            </div>


        </>
    );
}
