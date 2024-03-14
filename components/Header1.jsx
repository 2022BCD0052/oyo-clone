import Image from 'next/image'
import Blocks from './Blocks'
import { MdBusinessCenter } from "react-icons/md";
import { SlUserFollowing } from "react-icons/sl";
import Link from 'next/link';



const Header1 = () => {
  return (
    <div className='px-10 border-b-2 border-gray-300 py-1'>
      <div className='flex h-16 px-10 justify-between  items-center '>
        <Link href={'/'}>
        <Image src={'/logo.png'} alt='logo' width={200} height={200} className='w-24 h-24 px' /></Link>
        <div className='flex border-l-2 border-gray-300 h-full '>
          <Blocks title={'OYO for Business'} para={'Trusted by 5000 Corporates'} />
          <Blocks title={'List your property'} para={'Call us to Book now'} />
          <Blocks title={'0124-6201611'} para={'Book on the go'} />
          <Blocks title={'Offers'} para={'Special discounts'} />
          
            <Link href={'/login'} className='flex items-center px-3'>
               <SlUserFollowing className=' text-gray-500 text-4xl mx-3' />
              <h3>Login / Signup</h3>
              </Link>
     
        </div>



      </div>
    </div>
  )
}

export default Header1