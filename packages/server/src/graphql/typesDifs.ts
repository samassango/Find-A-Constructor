import {mergeTypeDefs} from '@graphql-tools/merge'
import {typeDefs as AuthorTypeDefs} from '../schemas/author'
import {typeDefs as BookTypeDefs} from '../schemas/book'

const typeDefs =[AuthorTypeDefs, BookTypeDefs]

export default mergeTypeDefs(typeDefs)