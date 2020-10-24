import { GraphQLServer } from 'graphql-yoga';
import typeDefs from './schema/schema';
import resolvers from './resolvers/resolvers';

const server = new GraphQLServer({ typeDefs, resolvers });
const port = process.env.PORT || 4000;
const options = {
  port: port,
  cors: {
    origin: '*',
    methods: 'GET,PUT,PATCH,POST,DELETE',
  },
};
server.start(options, () => {
  console.log('server is running on localhost:4000');
});
