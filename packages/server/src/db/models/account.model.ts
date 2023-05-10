
import mongoose from "mongoose";
const { randomUUID } = require('crypto');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    accountId: {type: Schema.Types.UUID, ref:'Users'},
    accountName: Schema.Types.String,
    accountType: Schema.Types.ObjectId,
    accountDescription: Schema.Types.String,
    accountPicture: Schema.Types.String,
    accountBarnner: Schema.Types.String,
    accountLocation: Schema.Types.String,
    accountAddress: Schema.Types.String,
    managerName: Schema.Types.String,
    managerContact: Schema.Types.String,
    genre: Schema.Types.String,
    createdAt: Schema.Types.Date,
    updatedAt: Schema.Types.Date
});
const Account = mongoose.model("Accounts",AccountSchema);
export default Account;