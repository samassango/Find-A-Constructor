import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { createUser, getUser, getUsers } from "../db/middlewares/userSignup";

export const typeDefs = `
  type User {
    username: String
    email: String
    password: String
    roles: String
  }
  type Query {
    users: [User],
    getUser(email: String):User
  }

  input UserInput{
    username: String
    email: String
    password: String
    roles: String
  }

  input UserLoginInput{
    username: String
    password: String
  }

  type UserResponse{
    username: String
    email: String
  }
  type LoginResponse{
    accessToken: String
    refreshToken: String
  }
  type Mutation {
    createUser(user: UserInput): UserResponse
    login(user: UserLoginInput): LoginResponse
  }
`;

export const resolvers = {
    Query: {
      getUser: async(root, args, context, info) => {
        
        const user = getUser(args.email as string);
        return user
      },
      users: async ()=> await getUsers()
    },
    Mutation:{
        createUser: async (root,args,context,info)=>{
            const {username, email, password, roles} = args.user;
            const hashPassword = await bcrypt.hash(password,10);
            return await createUser({
                username,
                email,
                roles,
                password: hashPassword
            })
        },
        login: async  (root,args,context,info)=>{
            const {username, password} = args.user;
            const user = await getUser(username);
            if(!user){
                throw new Error("User not found");
            }
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if(!isPasswordValid){
                throw new Error("Invalid username or password");
            }

            const accessToken = jwt.sign({userId: user._id, email: user.email}, process.env.JWT_SECRET, {expiresIn:'60m'});
            const refreshToken = jwt.sign({username: user.email}, process.env.REFRESH_TOKEN, {expiresIn:'1d'});
            context.token = accessToken;
            context.res.cookie('jwt', refreshToken, { httpOnly: true, 
                sameSite: 'none', secure: true, 
                maxAge: 24 * 60 * 60 * 1000 });

            return{
               accessToken,
               refreshToken
            }
        }
    }
  };