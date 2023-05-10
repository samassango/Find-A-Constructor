import { createAccount, getAccount, getRoles } from "../db/middlewares/userSignup";

export const typeDefs =`
  type Account {
    accountId: String
    accountName: String
    accountType: String
    accountDescription: String
    accountPicture: String
    accountBarnner: String
    accountLocation: String
    accountAddress: String
    managerName: String
    managerContact: String
    genre: String
  }
  type Query{
    getMusicians: [Account]
    getBusinessOwner:[Account]
  }

  type Mutation {
     addAccount(
        accountId: String,
        accountName: String, 
        accountType: String, 
        accountDescription: String, 
        accountPicture: String,  
        accountBarnner: String,
        accountLocation: String,
        accountAddress: String,
        managerName: String,
        managerContact: String,
        genre: String ): Account
  }

`

export const resolvers = {
    Query: {
      getMusicians: async() => {
        const roles = await getRoles();
        const role = roles.find(({name})=>name==='Musician');
        return await getAccount({role: role._id})
      },
      getBusinessOwner: async ()=>{
        const roles = await getRoles();
        const role = roles.find(({name})=>name==='BusinessOwner');
        return await getAccount({role: role._id});
      }
    },

    Mutation: {
        addAccount:async (root, args, context, info) => {
            return await createAccount({...args});
        }
    }
  };