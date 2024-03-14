'use client'
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'

const Login = () => {
const [login,setLogin]=React.useState(false)

const handleToggle = () => {
  setLogin(!login)
}

const handleLogin = () => {
    setLogin(true)
} 
const handleSignup = () => {
    setLogin(false)
}

  return (
    <div style={{
      backgroundImage: "url('/background.avif')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }} className="h-screen ">


      <div className="flex h-screen justify-center relative items-center">
        <div className='absolute w-full top-7 px-20 flex items-center'>
          <Link href={'/'}>
          <h2 className='text-5xl font-bold mr-3 select-none cursor-pointer'>OYO   </h2></Link>
          <p className='font-bold text-xl text-white text-nowrap'>
            Hotels and homes across 800 cities, 24+ countries

          </p>
        </div>


        <div className="flex   w-9/12 mt-12 text-justify text-white gap-9">
          <div className=' mt-20'>
            <p className='font-bold text-5xl py-6'>There is a smarter way to oyo around</p>
            <p className='text-2xl'>
              <span>Sign in with your phone number to access all your bookings, profile and more.</span>

            </p>
          </div>



          <div className="ml-10   w-9/12 h-full bg-white  ">
            <p className="h-8 flex items-center px-10 bg-gradient-to-r from-red-500 to bg-red-900 text-lg font-semibold py-5 text-white">
              Signup and get 500 oyo money
            </p>
            
            <div className='flex w-full h-full flex-col justify-between gap-20'>
              <div className="px-10 py-2">
                <h3 className='text-3xl font-semibold my-4 text-gray-600'>Login / Signup</h3>
                <p className='font-medium text-lg mb-3 text-gray-600'>
                  <span>Enter your phone number to get started</span></p>
                {
                  login ? ("") : (
                    <input type="text" placeholder="Enter your Number " className="shadow text-gray-500 font-medium text-xl w-full h-auto  border border-gray-300 rounded-full py-2 px-3 outline-none mb-5" />

                  )
                }
                {/* <input type="text" placeholder="Enter your Name " className="shadow  w-full h-auto  border border-gray-300 rounded-full py-2 px-3 outline-none mb-5" /> */}
                <input type="text" placeholder="Enter your Email " className="shadow  w-full h-auto  border border-gray-300 rounded-full py-2 px-3 text-gray-500 font-medium text-xl outline-none mb-5" />
                <input type="text" placeholder="Enter your Password " className="shadow  w-full h-auto  border  border-gray-300 rounded-full py-2 px-3 outline-none " />
                <button className=" bg-gray-400  text-lg font-semibold rounded-sm mt-5 p-3 w-8/12 hover:bg-gray-500 " onClick={login ? handleLogin : handleSignup}>
                 {login ? ("Login") : ("Sign Up")}
                  </button>

                <p className=' py-2 text-justify space-x-2 font-semibold '>
                  <span className='text-black' >{login ? "don't have an account ?" :"Already have an account ?"}</span>
                  <span  onClick={handleToggle} className='text-red-600 cursor-pointer'>
                  {""} 
                  {login ? "Sign Up" : "Login"}
                  </span>
                </p>
              </div>


              <div className='px-10 '>
                <p className='border-b font-bold pb-2'>
                  <span className='span'>
                    Or sign in as
                  </span>

                </p>



                <div className='flex justify-center gap-5 py-5'>
                  <button className="bg-blue-600 text-white text-lg font-semibold rounded-sm p-3 w-8/12 hover:bg-blue-700 ">Facebook</button>
                  <button className="bg-red-600 text-white text-lg font-semibold rounded-sm p-3 w-8/12 hover:bg-red-700 ">Google</button>
                </div>

              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Login