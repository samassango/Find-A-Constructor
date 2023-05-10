import {mergeResolvers} from '@graphql-tools/merge'
import {resolvers as AuthorResolver} from '../schemas/author'
import {resolvers as BookResolver} from '../schemas/book'
import {resolvers as AccountResolver} from '../schemas/account'
import {resolvers as CategoriesResolver} from '../schemas/categories'
import {resolvers as RoleResolver} from '../schemas/role'
import {resolvers as UserResolver} from '../schemas/user'

const resolvers =[AuthorResolver, BookResolver, AccountResolver,CategoriesResolver,RoleResolver, UserResolver]
export default mergeResolvers(resolvers);