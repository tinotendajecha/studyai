'use client'
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DocumentLayout = () => {
  const pathname = usePathname()
  return (
    <div className='text-2xl p-5'>
      {console.log(pathname)}
        <ul className=''>
            <Link href='/library/vectorised-docs'>
                <li className={pathname === '/library/vectorised-docs'? 'bg-lime-300 text-white p-2 rounded-md mb-5 w-52' : null}>Vectorised Docs</li>
            </Link>
            <Link href='/library/non-vectorised-docs'>
                <li className={pathname === '/library/non-vectorised-docs'? 'bg-lime-300 text-white p-2 rounded-md mt-5 w-52' : null}>New Documents</li>
            </Link>
        </ul>
    </div>
  )
}

export default DocumentLayout