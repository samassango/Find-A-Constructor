import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import { makeExecutableSchema } from '@graphql-tools/schema';
import{TypesDifs, Resolver} from './graphql/main';

interface MyContext {
  token?: String;
}

const app = express();
const httpServer = http.createServer(app);


const server = new ApolloServer<MyContext>({
    schema: makeExecutableSchema({
      typeDefs: TypesDifs,
      resolvers: Resolver,
    }),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

(async ()=>{
    await server.start();
    app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
        context: async ({ req }) => ({ token: req.headers.token }),
    }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);

})()

  