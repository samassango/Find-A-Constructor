import mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import model from './models'
dotenv.config();

const uri = process.env.MONGODB_CONNECTION_STRING ?? ""

const main =async (callback: Function)=> {
  await model.mongoose.connect(uri)
  callback();
}
export default main;