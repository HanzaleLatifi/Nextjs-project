import { toPersianDigits } from '@/utils/toPersianDigits';
import {HeartIcon,BookmarkIcon,ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline';
import {HeartIcon as HeartIconSolid , BookmarkIcon as BookmarkIconSolid } from '@heroicons/react/24/solid';


function PostInteractions({post , isSmall}) {
    const iconSize=`${isSmall} ? 'h-4 w-5 ' : 'h-6 w-6'`
  return (

         <div className={`flex ${isSmall ? 'gap-x-1' :'gap-x-4'} text-sm font-thin`}>
               <span className='flex items-center bg-red-200 rounded-xl text-red-500  p-1 cursor-pointer'> {post.isLiked ?  <HeartIconSolid  className={`${iconSize} ml-1 fill-current`} /> : <HeartIcon className={`${iconSize} ml-1 stroke-current`}/>}  {toPersianDigits(post.likesCount)}</span>
               <span className='flex items-center bg-yellow-200 rounded-xl p-1 cursor-pointer'> <ChatBubbleBottomCenterIcon  className={`${iconSize} ml-1`}/>{toPersianDigits(post.commentsCount)}</span>
               <span className='flex items-center bg-blue-200 text-blue-500 rounded-xl p-1 cursor-pointer'> {post.isBookmarked ? <BookmarkIconSolid   className={`${iconSize} ml-1 fill-current`}/> : <BookmarkIcon  className={`${iconSize} ml-1 stroke-current`} />}</span>
          </div> 
             
          )
}

export default PostInteractions;
