import React from 'react'
import Headers from '../components/Header1'
import Header2 from '@/components/Header2'
import Header3 from '@/components/Header3'
import Image from 'next/image'
import Head from 'next/head'
import Header4 from '@/components/Header4'
import Footer from '@/components/Footer'

const Index = () => {
  return (
    <div>
      <Head>
      <title>Oyo : India's Best Online Hotel Booking Site For Sanitize Stay</title>
        <meta name="description" content="OYO : India's Best Online Hotel Booking Site For Sanitize Stay" />
    
      </Head>
      <Headers />
      <Header2 />
      <Header3 />
      <div className='mx-10'>

        <div className=' mx-20 my-16 items-center box-border rounded-md shadow-sm overflow-hidden hover:shadow-md '>
          <Image src={"/banner1.avif"} alt='banner1' width={200} height={200} className=' w-full'></Image>
        </div>

        <div className=' mx-20 my-16 items-center box-border rounded-md shadow-sm overflow-hidden hover:shadow-md'>
          <Image src={"/banner2.avif"} alt='banner1' width={200} height={200} className=' w-full'></Image>
        </div>
        <div className='mx-20  items-center'>
          <Header4 />
        </div>
        
      </div>

      <Footer/>
    </div>

  )
}

export default Index

