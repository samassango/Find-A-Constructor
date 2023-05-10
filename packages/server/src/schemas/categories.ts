import { createCategories, getCategories } from "../db/middlewares/categories";

export const typeDefs = `
  type Category {
    _id: String
    name: String
  }
  type Query {
    categories: [Category],
  }
  input CategoryInput{
   name: String
  }
  type CategoryResponse{
    _id: String
    name: String
  }
  type Mutation {
    createCategory(category: CategoryInput): CategoryResponse
  }
`;

export const resolvers = {
    Query: {
        categories: async() => await getCategories()
    },
    Mutation:{
        createCategory: async (root,args,context,info)=>{
            console.log({args});
            return await createCategories(args.category.name);
        }
    }
  };