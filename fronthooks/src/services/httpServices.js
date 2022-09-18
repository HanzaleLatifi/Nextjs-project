import axios from "axios";

// const baseURL="http://localhost:5000/api";

const app=axios.create({
    baseURL:process.env.NEXT_PUBLIC_BASE_API_URL ,
    // baseURL,
    withCredentials:true ,

})

const http={
    get:app.get,
    post:app.post,
    put:app.put,
    delete:app.delete
}

export default http;