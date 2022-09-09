import { toPersianDigits } from '@/utils/toPersianDigits';
import {HeartIcon,BookmarkIcon,ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import {HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';


function PostInteractions({post , isSmall}) {
  return (

         <div className='flex gap-x-1 text-sm font-thin'>
               <span className='flex items-center bg-red-200 rounded-xl p-1 cursor-pointer'> {post.isLiked ?  <HeartIconSolid  className='w-4 h-5 ml-1' /> : <HeartIcon className='w-4 h-5 ml-1' />}  {toPersianDigits(post.likesCount)}</span>
               <span className='flex items-center bg-yellow-200 rounded-xl p-1 cursor-pointer'> <ChatBubbleBottomCenterIcon  className='w-4 h-5 ml-1'/>{toPersianDigits(post.commentsCount)}</span>
               <span className='flex items-center bg-blue-200 rounded-xl p-1 cursor-pointer'> <BookmarkIcon  className='w-4 h-5 ' /></span>
          </div> 
             
          )
}

export default PostInteractions;
