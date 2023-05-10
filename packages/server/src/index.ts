import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import express from 'express';
import http from 'http';
import cors from 'cors';
import { json } from 'body-parser';
import * as dotenv from 'dotenv';
import { makeExecutableSchema } from '@graphql-tools/schema';
import cookieparser from 'cookie-parser'
import{TypesDifs, Resolver} from './graphql/main';
import db from './db/connect'
import Role from './db/models/role.model';


dotenv.config()

interface MyContext {
  token?: String;
}

const app = express();
app.use(cookieparser());
const httpServer = http.createServer(app);


const server = new ApolloServer<MyContext>({
    schema: makeExecutableSchema({
      typeDefs: TypesDifs,
      resolvers: Resolver,
    }),
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});

function initial() {
  Role.create([{ name: "Musician"},{ name: "BusinessOwner"}, { name: "Admin"}])
}

(async ()=>{
    await server.start();
    
    db(initial).catch(err=> console.log(err));

    app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    json(),
    expressMiddleware(server, {
        context: async ({ req, res }) => {
          return ({ token: req.headers.token, res })
        },
    }),
    );

    await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
    console.log(`🚀 Server ready at http://localhost:4000/graphql`);

})()

  