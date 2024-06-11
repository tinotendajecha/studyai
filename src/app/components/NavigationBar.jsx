'use client'
import React from 'react'
import Link from 'next/link'

const NavigationBar = () => {
  return (
    <div className='flex justify-center items-center'>
        <nav>
            <ul className='flex mt-10 gap-5 text-2xl'>
                <Link href='/'>
                    <li className='bg-lime-300 p-3 text-white rounded-md hover:bg-white hover:text-blue-950 transition-all duration-100'>Home</li>
                </Link>
                <Link href='/chat'>
                    <li className='bg-lime-300 p-3 text-white rounded-md hover:bg-white hover:text-blue-950 transition-all duration-100'>Chat</li>
                </Link>
                <Link href='/upload-pdf'>
                    <li className='bg-lime-300 p-3 text-white rounded-md hover:bg-white hover:text-blue-950 transition-all duration-100'>Upload Documents</li>
                </Link>
                <Link href='/library/vectorised-docs'>
                    <li className='bg-lime-300 p-3 text-white rounded-md hover:bg-white hover:text-blue-950 transition-all duration-100'>My Library</li>
                </Link>
            </ul>
        </nav>
    </div>
  )
}

export default NavigationBar