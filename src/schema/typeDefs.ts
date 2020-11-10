import { importSchema } from 'graphql-import';

const typeDefs = importSchema('src/schema/schema.graphql');

export default typeDefs;
