import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();
const AuthContextDispathcer = createContext();

const reducer = (state, action) => {
    switch(action.type){
        
    }
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    user: null,
    loading: true,
    error: false,
  });
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
