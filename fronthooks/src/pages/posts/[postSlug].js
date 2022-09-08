import axios from "axios";
function Post({postData}) {

  return (
    <div>{postData.title}</div>
  )
}

export default Post;

export async function getServerSideProps(context) {
    const {query}=context;
    const {data}=await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

    return {
      props: { 
            postData:data.data
    }
    }
  }