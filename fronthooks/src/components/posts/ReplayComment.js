import React from 'react'
import SingleComment from './SingleComment'

function ReplayComment( {comments , parentCommentId} ) {
    console.log(comments)
    console.log(parentCommentId)

  return (
    <>
        {comments.map(comment=>{
            return comment.responseTo===parentCommentId && <div className='mr-5'>
                                                            <React.Fragment key={comment._id}> 
                                                                    <SingleComment commentData={comment}/>
                                                                    <ReplayComment comments={comments} parentCommentId={comment._id}/>
                                                            </React.Fragment>
                                                            </div>
        })}
    </>
  )
}

export default ReplayComment