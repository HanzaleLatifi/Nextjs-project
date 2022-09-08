import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import { ChevronDownIcon ,AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline';
import PostList from '../components/PostList';

export default function Home({blogsData}) {
  console.log(blogsData)
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='container mx-auto xl::max-w-screen-xl  '>
      <div className="grid gap-4 md:grid-cols-12 bg-gray-100 md:grid-rows-[60px_minmax(300px,_1fr)]  ">
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
        <PostList blogsData={blogsData}/>
      </div>
    </div>
    </div>
    
  )
}

export async function getServerSideProps(context) {
  const {data:result}=await axios.get('http://localhost:5000/api/posts?limit=3');
  const {data}=result;

  return {
    props: { blogsData: data }, // will be passed to the page component as props
  }
}
