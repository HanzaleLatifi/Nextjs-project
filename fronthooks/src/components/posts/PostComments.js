import React, { useState } from "react"
import CommentForm from "./CommentForm"
import ReplayComment from "./ReplayComment"
import SingleComment from "./SingleComment"


function PostComments({post}) {
const [commentValue, setCommentValue] = useState("")

  return (
    <div>
        <h3 className="font-semibold text-2xl">نظرات</h3>
        {post.comments.map(comment=>{
            return !comment.responseTo && comment.status===2 && (
                                          <React.Fragment key={comment._id}>
                                            <SingleComment commentData={comment}/>
                                            <ReplayComment comments={post.comments} parentCommentId={comment._id} />
                                        </React.Fragment>
            )  
        })}
            <span className="text-gray-500 block mt-10">ارسال دیدگاه جدید</span>
            <CommentForm/>
    </div>
  )
}

export default PostComments