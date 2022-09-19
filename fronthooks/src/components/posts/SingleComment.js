import {FaRegUserCircle} from 'react-icons/fa';
import { useState } from 'react';
import CommentForm from './CommentForm';

function SingleComment({ commentData}) {

const [isReplay, setIsReplay] = useState(false);


  return (
    <div className='border-2 border-gray-400 bg-white rounded-xl mb-3 md:p-4 p-2 mt-6'>
        <div className='flex items-center mb-2 md:mb-4  '>
            <FaRegUserCircle  className='ml-2 w-8 h-8'/>
            <div className='flex flex-col justify-center gap-y-2 text-sm '>
                <span>{commentData.writer?.name}</span>
                <span>{new Date(commentData.createdAt).toLocaleDateString("fa-IR")}</span>
            </div>
        </div>
        <p className='mb-2'>{commentData.content}</p>
        <button onClick={()=>setIsReplay(!isReplay) } className="text-green-600 ">{isReplay ? "بیخیال" :"پاسخ"}</button>
            { isReplay  && <CommentForm/>
            }
    </div>
  )
}

export default SingleComment;