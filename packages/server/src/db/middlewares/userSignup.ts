import AccountModel from "../models/account.model";
import Role from "../models/role.model";
import UserModel from "../models/user.model";
import IAccount from "../types/Account.type";
import IUser from "../types/user.type";

export const createAccount = async (account: IAccount)=>{
  return await AccountModel.create(account)
}

export const createUser =async (user:IUser) => {
    return await UserModel.create(user)
}

export const getUser =async (email:string) => {
    return await UserModel.findOne({email}).exec();
}

export const getUsers =async ()=>await UserModel.find({});

export const getAccount = async (role) => {
    return await AccountModel.find({role}).exec();
}

export const getRoles =async () => {
    return await Role.find({});
}
