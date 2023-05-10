import {mergeTypeDefs} from '@graphql-tools/merge'
import {typeDefs as AuthorTypeDefs} from '../schemas/author'
import {typeDefs as BookTypeDefs} from '../schemas/book'
import {typeDefs as AccountTypeDefs} from '../schemas/account'
import {typeDefs as CategoriesTypeDefs} from '../schemas/categories'
import {typeDefs as RoleTypeDefs} from '../schemas/role'
import {typeDefs as UserTypeDefs} from '../schemas/user'
const typeDefs =[AuthorTypeDefs, BookTypeDefs, AccountTypeDefs, CategoriesTypeDefs, RoleTypeDefs, UserTypeDefs]

export default mergeTypeDefs(typeDefs)