import { ApolloServer } from 'apollo-server';
import typeDefs from './schema/typeDefs';
import resolvers from './resolvers/resolvers';

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`server is running on ${url}`);
});
