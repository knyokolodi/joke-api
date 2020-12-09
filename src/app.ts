import { ApolloServer, makeExecutableSchema } from 'apollo-server';
import * as dotenv from 'dotenv';

import { typeDefs } from './graphql/typeDefs';
import { resolvers } from './graphql/resolvers';
import { GraphQLSchema } from 'graphql';

dotenv.config();

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const server = new ApolloServer({
  schema,
  introspection: true,
  playground: true,
});

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    const res = await server.listen({ port });
    console.log(`Server running at ${res.url}`);
  } catch (err) {
    console.log(`Error: ${err}`);
  }
};

startServer();
