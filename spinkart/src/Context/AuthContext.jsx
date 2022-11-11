import { createContext, useState } from "react";

export const AuthContext = createContext();


function AuthContextProvider({children}) {
    const [authState,setState] = useState({
        isAuth : false,
        token : null
    })

    const loginUser = (token) => {
        setState({
            
            isAuth : true,
            token : token
        });
    };

    const logoutUser = () => {
        setState({
            isAuth : false,
            token : null
        });
    }

    return(
        <AuthContext.Provider value={{authState,loginUser,logoutUser}}>

            {children}

        </AuthContext.Provider>
    )
}

export default AuthContextProvider;