import axios from 'axios';
import Link from 'next/link';
import { useState } from 'react';
import PostList from '@/components/posts/PostList';
import MobileCategory from '@/components/posts/MobileCategory';
import DesktopCategory from '@/components/posts/DesktopCategory';
import DesktopSortBar from '@/components/posts/DesktopSortBar';

export default function Home({blogsData , categories}) {

  return (

    <div className='container mx-auto xl::max-w-screen-xl px-4 md:px-0 '>
          <div className="grid gap-4 md:grid-cols-12 bg-gray-100 md:grid-rows-[60px_minmax(300px,_1fr)]  ">

                <div className="hidden  md:block md:col-span-3 md:row-span-2 ">
                    <DesktopCategory categories={categories}  />
                </div>

                <div className=' flex overflow-auto md:hidden gap-x-4 '>
                    <MobileCategory categories={categories} />
                </div>

                <div className="hidden md:block md:col-span-9 ">
                      <DesktopSortBar/>
                </div>

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
  const {data:categories}=await axios.get('http://localhost:5000/api/post-category');


  return {
    props: { 
      blogsData: data ,
      categories:categories.data
    }, // will be passed to the page component as props
  }
}
