import Link from "next/link"
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { useState } from "react";
import { useRouter } from "next/router";

function DesktopCategory({categories}) {

 const [isOpen, setIsOpen] = useState(false);
 const {query}=useRouter();
 console.log(query.categorySlug)


  return (
    <>
    <div className='bg-white rounded-xl overflow-hidden'>
            {/* accordian header */}
            <div className='flex items-center justify-between bg-green-400 py-3 px-4  cursor-pointer' onClick={()=>setIsOpen(!isOpen)} >
                <span className='text-lg font-medium' >دسته بندی مقالات</span>
                <ChevronDownIcon className={`h-6 transition-all  w-6 ${isOpen ? 'rotate-180':'rotate-0'}`}/>
            </div>
            {/* accordian content */}
            <div className={` transition-all ${isOpen ?'block' : 'hidden'}`}>
                <Link href="/blogs" >
                  <a className={`block py-2 mb-1 hover:bg-green-200 px-4 ${!query.categorySlug ? 'bg-green-500 text-white':''}`}>
                    همه مقالات
                  </a>
                </Link>
           {categories.map(category=>{
            return <Link href={`/blogs/${category.englishTitle}`} key={category._id} >
            <a className={`block py-2 mb-1 hover:bg-green-200 px-4 ${category.englishTitle===query.categorySlug ? 'bg-green-500 text-white':''}`}>
              {category.title}
            </a>
            </Link>
           })}
            </div>
      </div>
    </>
  )
}

export default DesktopCategory