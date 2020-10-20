import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './schema/schema';
import resolvers from './resolvers/resolvers';

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log('server is running on localhost:4000'));
