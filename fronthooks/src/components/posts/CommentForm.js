import { useState } from "react";

function CommentForm({postId , responseTo}) {
  const [commentValue, setCommentValue] = useState("");
    
  const submitHandler=(e)=>{
    e.preventDefault();
    console.log(`${commentValue}-${postId} -${responseTo}  `)

  }

  return (
    <form className=" mt-1" onSubmit={submitHandler}>
      <textarea
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        className="w-full border-green-500 border-2 py-4 px-2 rounded-xl my-4"
        placeholder="نظرت رو برام بنویس ..."
      />

      <button type="submit" className="px-4 py-2 w-full sm:w-56 rounded-xl text-lg bg-green-500 text-white">
        ارسال نظر
      </button>
    </form>
  );
}

export default CommentForm;
