import React, { useState } from "react"
import SingleComment from "./SingleComment"


function PostComments({post}) {
const [commentValue, setCommentValue] = useState("")

  return (
    <div>
        <h3 className="font-semibold text-2xl">نظرات</h3>
        {post.comments.map(comment=>{
            return !comment.responseTo && <React.Fragment key={comment._id}>
                                            <SingleComment commentData={comment}/>
                                        </React.Fragment>
        })}
        <form className=" mt-8">
            <span className="text-gray-500 ">ارسال دیدگاه جدید</span>
            <textarea 
            value={commentValue}
            onChange={(e)=>setCommentValue(e.target.value)}
            className="w-full border-green-500 border-2 py-4 px-2 rounded-xl my-4" 
            placeholder="نظرت رو برام بنویس ..."
            />

            <button className="px-4 py-2 w-full sm:w-56 rounded-xl text-lg bg-green-500 text-white">ارسال نظر</button>
        </form>
    </div>
  )
}

export default PostComments