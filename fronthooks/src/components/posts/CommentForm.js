import routerPush from "@/utils/routerPush";
import { useRouter } from "next/router";
import { useState } from "react";
import toast from "react-hot-toast";
import http from "src/services/httpServices";

function CommentForm({postId , responseTo}) {
  const [commentValue, setCommentValue] = useState("");
  const router=useRouter();

  const data={
    content: commentValue,
    postId,
    responseTo,

  }
    
  const submitHandler=(e)=>{
    console.log(postId,responseTo)
    e.preventDefault();
    http.post('post-comment/save-comment',data).then(res=>{
        toast.success(res.data.message);
        routerPush(router);
        setCommentValue("")

    }).catch(err=> toast.error (err?.respons?.data?.message) )
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
