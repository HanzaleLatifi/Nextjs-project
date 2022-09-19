import React, { useState } from "react"
import CommentForm from "./CommentForm"
import ReplayComment from "./ReplayComment"
import SingleComment from "./SingleComment"


function PostComments({post}) {

  return (
    <div>
        <h3 className="font-semibold text-2xl">نظرات</h3>
        {post.comments.map(comment=>{
            return !comment.responseTo && comment.status===2 && (
                                          <React.Fragment key={comment._id}>
                                            <SingleComment commentData={comment} postId={post._id}/>
                                            <ReplayComment comments={post.comments} parentCommentId={comment._id} postId={post._id} />
                                        </React.Fragment>
            )  
        })}

        {/* base  */}
            <span className="text-gray-500 block mt-10">ارسال دیدگاه جدید</span>
            <CommentForm postId={post._id} responseTo={null} />
    </div>
  )
}

export default PostComments