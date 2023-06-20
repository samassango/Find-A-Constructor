import React from "react";
import { IAuth } from "../types/auth.types";

const defaultContext: IAuth={
    isAuthenticated:false,
    accessToken:""
}
export const AuthContext = React.createContext<IAuth>(defaultContext);

