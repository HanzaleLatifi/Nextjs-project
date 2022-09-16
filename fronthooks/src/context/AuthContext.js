import { createContext, useContext } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";

const AuthContext = createContext();
const AuthContextDispathcer = createContext();

const initialState={
    user: null,
    loading: true,
    error:null,
}


const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_PENDING": {
        return {user: null , loading:true , error:null}
    }
    case "LOGIN_SUCCESS": {
        return {user: action.payload , loading:false , error:null}
    }
    case "LOGIN_REJECT": {
        return {user: null , loading:false , error:action.error}
    }
    case "SIGNUP_PENDING": {
        return {user: null , loading:true , error:null}
    }
    case "SIGNUP_SUCCESS": {
        return {user: action.payload , loading:false , error:null}
    }
    case "SIGNUP_REJECT": {
        return {user: null , loading:false , error:action.error}
    }
   
    
  }
};

const asyncActionHandlers={
    LOGIN: ({ dispatch }) =>(action)=>{
        dispatch({type:"LOGIN_PENDING"}) ;
        
        axios.post("http://localhost:5000/api/user/signin", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("با موفقیت وارد شدید");
          dispatch({type:"LOGIN_SUCCESS" , payload:res.data}) 
          Router.push("/");

        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          dispatch({type:"LOGIN_REJECT" , error:err?.response?.data?.message}) ;

        });
    } ,

    SIGNUP: ({ dispatch }) =>(action)=>{
        dispatch({type:"SIGNUP_PENDING"}) ;
        
        axios.post("http://localhost:5000/api/user/signup", action.payload, {
          withCredentials: true,
        })
        .then((res) => {
          toast.success("با موفقیت وارد شدید");
          dispatch({type:"SIGNUP_SUCCESS" , payload:res.data}) ;
          Router.push("/");

        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          dispatch({type:"SIGNUP_REJECT" , error:err?.response?.data?.message}) ;

        });
    }
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducerAsync(reducer,initialState,asyncActionHandlers);
  return (
    <AuthContext.Provider value={state}>
      <AuthContextDispathcer.Provider value={dispatch}>
        {children}
      </AuthContextDispathcer.Provider>
    </AuthContext.Provider>
  );
}

export default AuthProvider;
export const useAuth = () => useContext(AuthContext);
export const useAuthActions = () => useContext(AuthContextDispathcer);
