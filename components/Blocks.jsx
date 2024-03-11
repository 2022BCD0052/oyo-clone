import React from 'react'
import Image from 'next/image'

const Blocks = ({title,para}) => {
    return (
        <div className='border-r-2 border-gray-300  h-full flex  items-center px-2'>
            <Image src={'/demo.svg'} alt="demo" width={200} height={200} className='w-10 h-10 rounded-full mr-4' />
            <div>
                <h5 className='text-black '>{title}</h5>
                <p className='text-gray-400 text-xs  line-clamp-2'>{para}</p>

            </div>
        </div>
    )
}

export default Blocks