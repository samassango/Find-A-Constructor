export interface IUserLogin{
    username: string;
    password: string;
}

export interface IAuth{
    isAuthenticated:boolean;
    accessToken: string;
    loginUser?: (user: IUserLogin)=>void
    logout?: ()=>void
  }