import { ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="grid gap-4 md:grid-cols-12 md:grid-rows-2 bg-gray-100 min-h-screen">
      <div className="hidden  md:block md:col-span-3 md:row-span-2 bg-emerald-50">
          <div className='bg-white rounded-xl overflow-hidden'>
            {/* accordian header */}
            <div className='flex items-center justify-between bg-green-400 py-4 px-4  cursor-pointer' onClick={()=>setIsOpen(!isOpen)} >
                <span className='text-lg font-medium' >دسته بندی مقالات</span>
                <ChevronDownIcon className={`h-6 transition-all  w-6 ${isOpen ? 'rotate-180':'rotate-0'}`}/>
            </div>
            {/* accordian content */}
            <div className={` transition-all ${isOpen ?'block' : 'hidden'}`}>
                <Link href="#" >
                  <a className='block py-2 mb-1 hover:bg-green-200 px-4'>
                    ریکت
                  </a>
                </Link>
                <Link href="#">
                  <a className='block py-2 mb-1 hover:bg-green-200 px-4'>
                    نکست
                  </a>
                </Link>
                <Link href="#">
                  <a className='block py-2 hover:bg-green-200 px-4'>
                    انگولار
                  </a>
                </Link>
            </div>
          </div>
      </div>
      <div className="hidden md:block md:col-span-9 bg-emerald-50">
        sort
      </div>
      <div className="md:col-span-9 bg-emerald-50">
        blogs
      </div>
    </div>
  )
}
