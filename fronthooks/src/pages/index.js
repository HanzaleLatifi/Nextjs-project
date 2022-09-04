import { ChevronDownIcon ,AdjustmentsHorizontalIcon,HeartIcon,BookmarkIcon,ClockIcon,ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container mx-auto xl::max-w-screen-xl  '>
      <div className="grid gap-4 md:grid-cols-12 bg-gray-100 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen ">
      {/* desktop category */}
      <div className="hidden  md:block md:col-span-3 md:row-span-2 ">
          <div className='bg-white rounded-xl overflow-hidden'>
            {/* accordian header */}
            <div className='flex items-center justify-between bg-green-400 py-3 px-4  cursor-pointer' onClick={()=>setIsOpen(!isOpen)} >
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
      {/* desktop sort */}
      <div className="hidden md:block md:col-span-9 ">
        <div className='bg-white rounded-xl px-4 flex'>
          <div className='flex items-center gap-x-2 ml-6 '>
            <AdjustmentsHorizontalIcon className='h-6 w-6 '/>
            <p>مرتب سازی :</p>
          </div>
          <ul className='flex gap-x-6 '>
            <li className='py-4 cursor-pointer'>جدید ترین</li>
            <li className='py-4 cursor-pointer'>محبوب ترن</li>
            <li className='py-4 cursor-pointer'>پربازدید ترین</li>
          </ul>
        </div>     
      </div>
      {/* blogs */}
      <div className="md:col-span-9 grid grid-cols-6 gap-8 ">
        {['reactjs.png','tailwind.jpg','nextjs.png','nodejs.png','vuejs.png','nuxtjs.png'].map((item , index)=>{
          return <div key={index} className="bg-white col-span-6 sm:col-span-3 md:col-span-2 rounded-xl overflow-hidden p-2 ">
                    {/* imgae cover */}
                    <div className='aspect-w-16 aspect-h-8 mb-4 '>
                      <img src={`/images/${item}`} alt={item} className="w-full h-full object-center object-cover rounded-xl "/>
                    </div>
                    {/* content */}
                    <div className='bg-lime-100 rounded-xl p-2'>

                      <h2 className='mb-4'>بررسی ریکت و ریداکس</h2>
                      <div className='flex justify-between items-center mb-4' >
                        <div className='flex items-center '>
                            <img src={`/images/${item}`} alt={item} className="w-8 h-8 rounded-full ring-2 ring-white ml-2"/>
                            <p className='text-gray-500 font-light text-sm'>حنظله لطیفی</p>
                        </div>
                        <p className='px-4 py-1 font-light text-black bg-green-200 rounded-2xl text-sm cursor-pointer hover:bg-green-400  transition-all duration-300'>ریکت</p>
                      </div>

                          {/* like & comment & ... */}
                        <div className='flex justify-between items-center text-sm '>
                            <div className='flex gap-x-1 text-sm font-thin'>
                                <span className='flex items-center bg-red-200 rounded-xl p-1 cursor-pointer'> <HeartIcon className='w-4 h-5'/>10</span>
                                <span className='flex items-center bg-yellow-200 rounded-xl p-1 cursor-pointer'> <ChatBubbleBottomCenterIcon  className='w-4 h-5'/>4</span>
                                <span className='flex items-center bg-blue-200 rounded-xl p-1 cursor-pointer'> <BookmarkIcon  className='w-4 h-5 ' />2</span>
                            </div>
                            <div className='flex items-center text-xs font-thin text-gray-500'>
                              <ClockIcon className='w-4 h-4 ml-0.5'/>
                              <p>زمان مطالعه 12 دقیقه</p>
                            </div>
                        </div>
                    </div>
                
          </div>
        })}

      </div>
    </div>
    </div>
    
  )
}
