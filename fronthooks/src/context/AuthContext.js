import { createContext, useContext  , useEffect} from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useReducerAsync } from "use-reducer-async";
import Router from "next/router";
import http from "src/services/httpServices";

const AuthContext = createContext();
const AuthContextDispathcer = createContext();

const initialState={
    user: null,
    loading: false,
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
        
        http.post("/user/signin", action.payload)
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
        
        http.post("/user/signup", action.payload)
        .then((res) => {
          toast.success("با موفقیت وارد شدید");
          dispatch({type:"SIGNUP_SUCCESS" , payload:res.data}) ;
          Router.push("/");

        })
        .catch((err) => {
          toast.error(err?.response?.data?.message);
          dispatch({type:"SIGNUP_REJECT" , error:err?.response?.data?.message}) ;

        });
    } ,
    LOAD_USER:({ dispatch }) =>(action)=>{
      dispatch({type:"SIGNUP_PENDING"}) ;
      
      http.get("/user/load")
      .then((res) => {
        dispatch({type:"SIGNUP_SUCCESS" , payload:res.data}) ;
        // Router.push("/");

      })
      .catch((err) => {
        dispatch({type:"SIGNUP_REJECT" , error:err?.response?.data?.message}) ;

      });
  } ,
  LOGOUT:({ dispatch }) =>(action)=>{
    
    http.get("/user/logout")
    .then((res) => {
      window.location.href="/"
      Router.push("/login");

    })
    .catch(() => {

    });
} ,
}

function AuthProvider({ children }) {
  const [state, dispatch] = useReducerAsync(reducer,initialState,asyncActionHandlers);
 
  useEffect(() => {

    dispatch({type:"LOAD_USER"})
   
  }, [])
  
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
