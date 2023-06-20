import React, { useEffect, useMemo, useState } from "react";
import './style.css'
import RoutesApp from "../../RoutesApp";
import { AuthContext } from "../../context/Auth.Context";
import { IAuth, IUserLogin } from "../../types/auth.types";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../graphql/auth-graphql";
const AppClient:React.FC<any> =()=>{
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [accessToken, setAccessToken] = useState("");
    const [userLogin, { data, loading, error }] = useMutation(LOGIN_USER);
    const loginUser=(user:IUserLogin)=>{
        userLogin({variables:{
                "user": {
                  "password": user.password,
                  "username": user.username
                }
              }
            }
        );
    }
    useEffect(()=>{
       if(data){
         const {login}=data.data;
         setAccessToken(login.accessToken);
         setIsAuthenticated(true);
         sessionStorage.setItem('refreshToken', login.refreshToken);
         sessionStorage.setItem('accessToken', login.accessToken);
       }
       if(error){
          
       }
       if(loading){

       }
    },[data, error, loading])
    const authData:IAuth = useMemo(()=>{
        return{
            isAuthenticated, 
            accessToken,
            loginUser
        }
    },[])
    return (
        <div className="container">
            <AuthContext.Provider value={authData}>
                 <RoutesApp/>
            </AuthContext.Provider>
          
        </div>
    )
}
export default AppClient;