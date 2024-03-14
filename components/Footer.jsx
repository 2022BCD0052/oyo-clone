import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import { MdOutlineBusiness } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { CiPlay1 } from "react-icons/ci";


const hotelLocations = [
    "Hotels near me",
    "Hotels in Goa",
    "Hotels in Puri",
    "Hotels in Mahabaleshwar",
    "Hotels in Jaipur",
    "Hotels in Shimla",
    "Hotels in Manali",
    "Hotels in Udaipur",
    "Hotels in Mussoorie",
    "Hotels in Pondicherry",
    "Hotels in Delhi",
    "Hotels in Mumbai",
    "Hotels in Nainital",
    "Hotels in Lonavala",
    "Hotels in Munnar",
    "Hotels in Bangalore",
    "Hotels in Mysore",
    "Hotels in Darjeeling",
    "Hotels in Mount Abu",
    "Hotels in Kodaikanal",
    "Hotels in Hyderabad",
    "Hotels in Pune",
    "Hotels in Chandigarh",
    "Hotels in Shirdi",
    "Hotels in Agra",
    "Hotels in Gangtok",
    "Hotels in Coorg",
    "Hotels in Chennai",
    "Hotels in Tirupati",
    "Hotels in Dalhousie",
    "Hotels in Haridwar",
    "Hotels in Kolkata",
    "Hotels in Ahmedabad",
    "Hotels in Shillong",
    "Hotels in Rishikesh",
    "Hotels in Varanasi",
    "Hotels in Gurgaon",
    "Hotels in Mandarmoni",
    "Hotels in Daman",
    "Hotels in Yercaud",
    "Hotels in Amritsar",
    "Hotels in Madurai",
    "Hotels in Coimbatore",
    "Hotels in Kasauli",
    "Hotels in Dehradun",
    "Travel Guide",
    "All Cities Hotels",
    "Coupons",
    "OYO Hotel UK",
    "OYO Hotel USA",
    "OYO Hotel Mexico",
    "OYO Hotel Brasil",
    "Hotels in Japan",
    "OYO Hotel Indonesia",
    "OYO Vacation Homes in Europe",
    "Homes in Scandinavia",
    "Homes in Southern Europe",
    "Belvilla Holiday Homes",
    "Traum Vacation Apartments",
    "Traum Holiday Homes"
];


const Footer = () => {
    return (
        <div className='  bg-gray-500 '>

            <div className="flex text-white text-xl border-b border-gray-100 w-full">
                <div className="w-1/2  p-3 font-bold ">
                    <div className='flex items-center text-xl'>
                        <Image src="/logo.png" alt="logo" width={100} height={100} className=" " />
                        <p className='text-bold'>World is leading chain of hotels and homes</p>
                    </div>
                </div>

                <div className="w-1/2 font-bold ">
                    <div className='flex items-center justify-center m-10 gap-5'>
                        <p>Join our network and grow your business!</p>
                        <div className='flex items-center gap-3  bg-green-600 p-3 rounded-md  text-xs '>
                            <MdOutlineBusiness size={28} color="#fff" />
                            <button className=' '>
                                List your property
                            </button>
                        </div>

                    </div>
                </div>
            </div>
            {/*  */}

            <div className='p-3 mx-8 px-10 py-2'>

                <div className='flex justify-between py-5 border-b   whitespace-nowrap  flex-wrap  pt-3 '>

                    <div className='flex justify-between gap-x-32 '>


                        <div className='flex-col text-white ' >
                            <h1 className='mt-5'>Download OYO app for exciting offers</h1>



                            <div className=' flex justify-between items-center '>

                                <Image
                                    src={'/g-playpng.png'} width={150} height={100} alt='app' className='h-16'></Image>
                                <Image
                                    src={'/a-store.png'} width={250} height={200} className='' alt='app'
                                ></Image>

                            </div>


                        </div>

                        <div className='flex text-white list-none gap-10 text-left  p-3 px-10 whitespace-nowrap border-l mx-3 '>
                            <div className='list-none '>
                                <li className='py-1'>
                                    <Link href={''}>About US</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Team/Careers</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Blogs</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Support</Link>
                                </li>

                            </div>

                            <div>
                                <li className='py-1'>
                                    <Link href={''}>Official OYO Blog</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Investor Relations</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>OYO Circle</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>OYO Frames</Link>
                                </li>

                            </div>

                        </div>

                        <div className='flex text-white list-none gap-10 text-left p-3 px-10 whitespace-nowrap border-l '>
                            <div className='list-none '>
                                <li className='py-1'>
                                    <Link href={''}>About US</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Team/Careers</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Blogs</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Support</Link>
                                </li>

                            </div>

                            <div>
                                <li className='py-1'>
                                    <Link href={''}>Official OYO Blog</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>Investor Relations</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>OYO Circle</Link>
                                </li>
                                <li className='py-1'>
                                    <Link href={''}>OYO Frames</Link>
                                </li>

                            </div>

                        </div>

                    </div>

                </div>

                {/* ================ */}


                <div className=" border-b ">
                    <h1 className='text-white  py-4'>OYO Hotels</h1>

                    <div className="grid grid-cols-6 gap-4 pb-7">
                        {
                            hotelLocations.map((location, index) => (
                                <div key={index} className=" text-white list-none  whitespace-nowrap ">
                                    <li className=''>
                                        <Link href={''}>{location}</Link>
                                    </li>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='flex justify-between'>

                    <div className='flex py-5 gap-6'>
                        <Link to="/" className='border p-2 rounded-full cursor-pointer text-white'><FaInstagram size={16} /></Link>
                        <Link to="/" className='border p-2 rounded-full cursor-pointer text-white'><FaFacebook size={16} /></Link>
                        <Link to="/" className='border p-2 rounded-full cursor-pointer text-white'><FaTwitter size={16} /></Link>
                        <Link to="/" className='border p-2 rounded-full cursor-pointer text-white'><FaPinterestP size={16} /></Link>
                        <Link to="/" className='border p-2 rounded-full cursor-pointer text-white'><CiPlay1 size={16} /></Link>
                    </div>
                    <div className=' flex items-center'>
                        <p className='text-white'>2013-2024 © Oravel Stays Limited</p>

                    </div>
                </div>
            </div>


        </div>
    )
}

export default Footer