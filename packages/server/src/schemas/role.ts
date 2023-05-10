import { createCategories, getCategories } from "../db/middlewares/categories";
import { getRoles } from "../db/middlewares/userSignup";

export const typeDefs = `
  type Role {
    _id: String
    name: String
  }
  type Query {
    roles: [Role],
  }
 
`;

export const resolvers = {
    Query: {
        roles: async() => await getRoles()
    },
  };