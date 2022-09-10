import {FaRegUserCircle} from 'react-icons/fa';
import { useState } from 'react';

function SingleComment({ commentData}) {

const [isReplay, setIsReplay] = useState(false);
const [commentValue, setCommentValue] = useState("")


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
        <button onClick={()=>setIsReplay(!isReplay) } className="text-green-600">{isReplay ? "بیخیال" :"پاسخ"}</button>
            { isReplay  &&  <form className=" mt-4">
                <span className="text-gray-500 ">ارسال پاسخ</span>
                <textarea 
                value={commentValue}
                onChange={(e)=>setCommentValue(e.target.value)}
                className="w-full border-green-500 border-2 py-4 px-2 rounded-xl my-4" 
                placeholder="نظرت رو برام بنویس ..."
                />

                <button className="px-4 py-2 w-full sm:w-56 rounded-xl text-lg bg-green-500 text-white">ارسال نظر</button>
            </form>
            }
    </div>
  )
}

export default SingleComment;