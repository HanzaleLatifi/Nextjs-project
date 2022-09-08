import {AdjustmentsHorizontalIcon} from '@heroicons/react/24/outline';

function DesktopSortBar() {
  return (
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
      )
}

export default DesktopSortBar;