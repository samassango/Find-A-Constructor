import mongoose from 'mongoose';
import user from './user.model'
import role from './role.model'
import Account  from './account.model';

mongoose.Promise = global.Promise;

const ROLES = ["Musician", "Admin", "BusinessOwner"];

export default {
    mongoose,
    user,
    role,
    ROLES,
    Account
}