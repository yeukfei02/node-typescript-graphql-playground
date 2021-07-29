import { ApolloServer } from 'apollo-server';
import { schema } from '../api/schema';

const server = new ApolloServer({
  schema,
  cors: true,
  tracing: true,
  introspection: true,
  playground: true,
});
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`server is running on ${url}`);
});
