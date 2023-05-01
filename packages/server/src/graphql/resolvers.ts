import {mergeResolvers} from '@graphql-tools/merge'
import {resolvers as AuthorResolver} from '../schemas/author'
import {resolvers as BookResolver} from '../schemas/book'

const resolvers =[AuthorResolver, BookResolver]
export default mergeResolvers(resolvers);