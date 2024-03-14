import React from 'react'

import PriceRangeSlider from './pricerangeslider'
import Blocks from './Blocks1'
import Block1Label from './Block1Label'
import Image from 'next/image'


const Hotels_sidebar = (props) => {


    return (
        <>
          


          <div className='flex-col  p-3  '>

            <div className='flex-col border-b pb-5 '>
                <div className='flex font-bold  items-center justify-between pb-2'>
                    <h1 className='text-3xl'>Filters</h1>
                    <h1 className='text-red-600 capitalize font-bold'>Clear ALL</h1>
                </div>
                <p className=' font-bold pb-4'>Popular location in banguluru</p>
                <input type="text" placeholder="Search hotels.." className=' border p-2 w-full border-gray-400 shadow-inner' />
                <div className=' grid grid-cols-2 font-medium text- py-4'>

                    <span className='inline-block will-change-auto text-center p-2 bg-gray-200 mb-4 mx-4  font-semibold'>tear-1</span>
                    <span className='inline-block will-change-auto p-2 bg-gray-200 mb-4 mx-4'>tear-1</span>
                    <span className='inline-block will-change-auto p-2 bg-gray-200 mb-4 mx-4'>tear-1</span>
                    <span className='inline-block will-change-auto p-2 bg-gray-200 mb-4 mx-4'>tear-1</span>
                    <span className='inline-block will-change-auto p-2 bg-gray-200 mb- mx-4'>tear-1</span>

                </div>
                <p className='font-bold text-red-600'>+ View More</p>
            </div>

            <div className='pt-6 font-bold border-b pb-4'>
                <div>Price</div>
                <PriceRangeSlider
                    min={0}
                    max={1000}
                    step={1}
                    defaultValue={[0, 1000]}
                    onChange={({ min, max }) => { console.log(`Min: ${min}, Max: ${max}`) }}

                />
            </div>

            <div className='flex-col font-semibold border-b pb-4'>
                <p className='py-4 font-bold'>Collections</p>

                <div className='pb-3'>
                    <input type="checkbox" width={'12%'} name="OYOs welcome couples" id="oyos_couples" className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="oyos_couples" className='' >OYOs welcome couples</label><br />

                </div>


                <div className='pb-3 '>
                    <input type="checkbox" name="Family OYOs" id="family_oyos" className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500  bg-red-400" />
                    <label for="family_oyos">Family OYOs</label><br />

                </div>


                <div className='pb-3'>

                    <input type="checkbox" name="OYOs for Business" id="oyos_business" className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500  bg-red-400" />
                    <label for="oyos_business">OYOs for Business</label><br />

                </div>

                <div className='pb-3'>

                    <input type="checkbox" name="OYOs with Parking" id="oyos_parking" className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500  bg-red-400" />
                    <label for="oyos_parking">OYOs with Parking</label><br />

                </div>

                <div className='pb-3'>

                    <input type="checkbox" name="Local IDs accepted" id="local_ids" className="mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="local_ids" className=''>Local IDs accepted</label><br />

                </div>

                <p className='font-bold text-red-600'>+ View More</p>

            </div>


            <div className='flex-col border-b pb-4'>
                <p className='py-4 font-bold'>Categories</p>

                <div className='pb-3 font-medium flex justify-between'>
                    <input type="checkbox" name="OYOs welcome couples" id="oyos_couples" className="mr-3 w-7 h-8 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="oyos_couples" className='' ><span className='font-bold'>OYO Rooms - </span>Super affordable stay with essential amentiex</label><br />
                </div>

                <div className='pb-3 font-medium flex justify-between'>
                    <input type="checkbox" name="OYOs welcome couples" id="oyos_couples" className="mr-3 w-7 h-8 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="oyos_couples" className='' ><span className='font-bold'>Premium - </span>Super affordable stay with essential amentiex</label><br />
                </div>

                <div className='pb-3 font-medium flex justify-between'>
                    <input type="checkbox" name="OYOs welcome couples" id="oyos_couples" className="mr-3 w-7 h-8 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="oyos_couples" className='' ><span className='font-bold'>Townhouse - </span>Super affordable stay with essential amentiex</label><br />
                </div>

                <div className='pb-3 font-medium flex justify-between'>
                    <input type="checkbox" name="OYOs welcome couples" id="oyos_couples" className="mr-3 w-8 h-8 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="oyos_couples" className='' ><span className='font-bold'>Flagship - </span>Super affordable stay with essential amentiex with full facilities</label><br />
                </div>

                <div className='pb-3 font-medium flex justify-between'>
                    <input type="checkbox" name="OYOs welcome couples" id="oyos_couples" className="mr-3 w-7 h-8 text-blue-600 focus:ring-blue-500  bg-red-400 " />
                    <label for="oyos_couples" className='' ><span className='font-bold'>Home </span> Villas and appartment with extra space and privacy</label><br />
                </div>


                <p className='font-bold text-red-600'>+ View More</p>

            </div>

            <div className='flex-col border-b pb-4'>
                <Blocks title={'Categories'} para={'Hotel'} />
                <Block1Label para={'Hotel'} />
                <Block1Label para={"OYO Home"} />
                <Blocks title={'Categories'} para={'Hotel'} />

            </div>

            <div className='flex-col border-b pb-4'>
                <Blocks title={'Hotel Facilities'} />
                <Block1Label para={'Refrigerator'} />
                <Block1Label para={"King Sized Bed"} />
                <Block1Label para={"Queen Sized Bed"} />
                <Block1Label para={"Mini Fridge"} />
            </div>



            <div className='flex.col border-b pb-4'>
                <div className='flex gap-3 pt-4 items-center pb-4'>
                    <Image src={'/w.jpg'} alt='' width={30} height={30} className='shadow-md' ></Image>
                    <div>
                        <p className='uppercase font-semibold text-sm pb-1'>Wizard member</p>
                        <p className=' text-gray-500 line-clamp-1'>Get 5% off on member hotels</p>
                    </div>

                </div>
                <button className='flex gap-2 items-center border p-2 bg-gray-200 rounded-md  ml-3'>
                    <Image src={'/w.jpg'} alt='' width={24} height={30} ></Image>
                    <p className='uppercase font-semibold text-sm line-clamp-1'> Show Only Wizard member OYOs </p>
                </button>

            </div>

            <div className='flex-col border-b pb-4'>
                <Blocks title={'Check-in features'} />
                <Block1Label para={'pay at Hotel'} />
                <Block1Label para={"Online Payment"} />
                <Block1Label para={"Pay leter option"} />
            </div>

        </div>
        </>
      
    )
}

export default Hotels_sidebar