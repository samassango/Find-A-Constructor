import mongoose from "mongoose";

const Categories = mongoose.model(
  "Categories",
  new mongoose.Schema({
    name: String
  })
);

export default Categories;