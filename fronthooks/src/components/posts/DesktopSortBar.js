import routerPush from '@/utils/routerPush';
import {AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { useState } from 'react';

const sortOptions=[
  {id:"most" , label:"پربازدید ترین"},
  {id:"newest" , label:"جدید ترین"},
  {id:"popular" , label:"محبوب ترین"}
]

function DesktopSortBar() {
  const router=useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

const sortHandler=(id)=>{
  setSort(id)
  router.query.sort=id;
  routerPush(router)

}
  return (
    <div className='bg-white rounded-xl px-4 flex'>
        <div className='flex items-center gap-x-2 ml-6 '>
        <AdjustmentsHorizontalIcon className='h-6 w-6 '/>
        <p>مرتب سازی :</p>
        </div>
        <ul className='flex gap-x-6 relative '>
          {sortOptions.map(item=>{
            return <li onClick={()=>sortHandler(item.id)} className={`py-4 cursor-pointer relative ${sort===item.id ? 'text-green-500 font-semibold' :'text-gray-500'}`} key={item.id}> {item.label} </li>

            
          })}
        </ul>
      </div>  
      )
}

export default DesktopSortBar;