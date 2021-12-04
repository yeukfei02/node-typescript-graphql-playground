import { GraphQLClient, gql } from 'graphql-request';

const rootUrl = 'https://node-ts-graphql-playground.herokuapp.com';
const graphQLClient = new GraphQLClient(rootUrl);

export const matchTest = (): void => {
  describe('match test', () => {
    test('matches test', async () => {
      const MATCHES = gql`
        query matches {
          matches {
            id
            name
          }
        }
      `;
      const response = await graphQLClient.request(MATCHES);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.matches).toBeDefined();
    });

    test('match test', async () => {
      const MATCH = gql`
        query match($id: Int!) {
          match(id: $id) {
            id
            name
          }
        }
      `;
      const variables = { id: 1 };
      const response = await graphQLClient.request(MATCH, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.match).toBeDefined();
    });

    test('add match test', async () => {
      const ADD_MATCH = `
            mutation addMatch ($data: CreateMatch!) {
                addMatch (data: $data) {
                    id
                    name
                }
            }
        `;
      const variables = { data: { id: 3, name: 'match 3' } };
      const response = await graphQLClient.request(ADD_MATCH, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.addMatch).toBeDefined();
    });

    test('update match test', async () => {
      const UPDATE_MATCH = gql`
        mutation updateMatch($data: UpdateMatch!) {
          updateMatch(data: $data) {
            id
            name
          }
        }
      `;
      const variables = { data: { id: 1, name: 'match 111112222233333' } };
      const response = await graphQLClient.request(UPDATE_MATCH, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.updateMatch).toBeDefined();
    });

    test('delete match test', async () => {
      const DELETE_match = gql`
        mutation deleteMatch($id: Int!) {
          deleteMatch(id: $id) {
            id
          }
        }
      `;
      const variables = { id: 1 };
      const response = await graphQLClient.request(DELETE_match, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.deleteMatch).toBeDefined();
    });
  });
};
