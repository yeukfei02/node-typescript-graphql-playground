import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`server is running on ${url}`);
});
