import mongoose, { Schema } from "mongoose";

const UserSchema =  new Schema({
  username: String,
  email: String,
  password: String,
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }
  ],
  createdAt: Schema.Types.Date,
  updatedAt: Schema.Types.Date
})
const User = mongoose.model( "Users", UserSchema);

export default User;