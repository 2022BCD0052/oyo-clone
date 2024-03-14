import Link from 'next/link'
import React from 'react'
import { LuBadgePercent } from "react-icons/lu";
import { CiCircleInfo } from "react-icons/ci";
import { FcCheckmark } from "react-icons/fc";


const HotelPayment = () => {
  return (
    <div>
      <div className='border h-auto'>

        <div className='flex justify-between items-center  px-4 bg--gradient-r text-white from-red-700 to bg-red-600 p-2  border'>
          <div className='flex gap-2 items-center uppercase text-sm font-bold  '>
            <h1><LuBadgePercent size={20} className='' /></h1>
            <p className='w-10/12'>login now to get upto 15% Lower prices</p>
          </div>
          <Link href={''}>
            <button className='px-4 mr-2 py-1 text-sm bg-red-400 rounded-md shadow-sm  drop-shadow-lg  uppercase font-medium w-auto'>Login</button>
          </Link>
        </div>

        <div className=' m-3 shadow-sm  p-3'>
          <div>
            <p className='flex gap-4 items-center'><span className='text-2xl font-semibold'>$542</span> <span className='text-xl font-semibold text-gray-500 line-through' >$347</span><span className='text-orange-500 font-bold'>45% off</span></p>
            <p className='text-sm text-gray-500 font-medium'>+taxes & fees: $121</p>
          </div>
          <div className=' shadow-inner border border-gray-100 mt-4 p-2 py-3 flex items-center  justify-between font-medium capitalize'>
            <p className='border-r w-7/12'>wed, 13 mar-Tue,14 mar</p>
            <p> 1 Room, 1 Guest</p>
          </div>
          <div className='flex justify-between items-center p-2 py-3 font-medium mt-2 shadow-inner border border-gray-100'>
            <div >Classic</div>
            <div>l</div>
          </div>

          <div className='flex-col justify-between items-center  py-3  shadow-sm  mt-3'>
            <div className='flex justify-between '>
              <div className='flex gap-2 '>
                <div className='' ><LuBadgePercent size={20} /></div>
                <div className='flex-col'>
                  <p className='text-gray-700 '><span className='font-medium '>WELCOME75</span> coupon applied</p>
                  <p className='mt-2'><span className='text-green-900  border-green-8 bg-green-100 rounded-md font-bold uppercase  p-1 border'>More offers</span></p>
                </div>
              </div>

              <div className='flex justify-between gap-3'>
                <p>-$1213</p>
             
                <div >  <FcCheckmark className='text-white bg-green-00 text'/></div>
              </div>
            </div>

            <div className='flex-col  p-3'>
              <div className='flex justify-between mt-3 border-t border-dotted pb-3 pt-4'>
                <p className=''>Your savings</p>
                <p className='font-semibold'>$2424</p>
              </div>
              <div className='flex justify-between items-center'>
                <div className=''>
                  <p>Total price</p>
                  <p className='text-gray-500 text-sm gap-1  flex items-center g'>Including taxes & fees
                  <span> <CiCircleInfo size={17} /></span> </p>
                 
                </div>
                <div>
                  <p className='font-semibold'>$2424</p>
                </div>
              </div>
              <div className='flex-col mt-3 font-semibold'>
                <div className='bg-green-600 p-2  font-bold text-white rounded-md text-center'>
                <Link href={''} >
                Continue to Book
                </Link></div>
                <p className='mt-1 text-red-600 flex items-center gap-1'>Cancellation Policy 
                <span> <CiCircleInfo size={17} /></span></p>
                <p className='mt-1 text-red-600'>follow safty measures advised at the hotel</p>
                <p className='mt-1 text-gray-500'>By processing, you agree to our <span className='text-red-600'>Guest Policies</span></p>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>
  )
}

export default HotelPayment