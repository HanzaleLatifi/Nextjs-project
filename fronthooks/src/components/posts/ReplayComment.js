import React from 'react'
import SingleComment from './SingleComment'

function ReplayComment( {comments , parentCommentId , postId} ) {
 

  return (
    <>
        {comments.map(comment=>{
            return comment.responseTo===parentCommentId && <div className='mr-5'>
                                                            <React.Fragment key={comment._id}> 
                                                                    <SingleComment commentData={comment} postId={postId}/>
                                                                    <ReplayComment comments={comments} parentCommentId={comment._id} postId={postId}/>
                                                            </React.Fragment>
                                                            </div>
        })}
    </>
  )
}

export default ReplayComment