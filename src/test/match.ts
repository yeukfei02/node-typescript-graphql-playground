import { ApolloServer } from 'apollo-server';
import { schema } from '../../api/schema';

import { createTestClient } from 'apollo-server-testing';

const server = new ApolloServer({
  schema,
});
const { query, mutate } = createTestClient(server);

export const matchTest = (): void => {
  describe('match test', () => {
    test('matches test', async () => {
      const matches = `
        query matches {
            matches {
                id
                name
            }
        }
      `;
      const response = await query({ query: matches, variables: {} });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.matches).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('match test', async () => {
      const match = `
            query match ($id: Int!) {
                match (id: $id) {
                    id
                    name
                }
            }
        `;
      const response = await query({ query: match, variables: { id: 1 } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.match).toBeDefined();
      expect(response.errors).toBeUndefined();
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
      const response = await mutate({ mutation: ADD_MATCH, variables: { data: { id: 3, name: 'match 3' } } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.addMatch).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('update match test', async () => {
      const UPDATE_MATCH = `
            mutation updateMatch ($data: UpdateMatch!) {
                updateMatch (data: $data) {
                    id
                    name
                }
            }
        `;
      const response = await mutate({
        mutation: UPDATE_MATCH,
        variables: { data: { id: 1, name: 'match 111112222233333' } },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.updateMatch).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('delete match test', async () => {
      const DELETE_match = `
            mutation deleteMatch ($id: Int!) {
                deleteMatch (id: $id) {
                    id
                }
            }
        `;
      const response = await mutate({ mutation: DELETE_match, variables: { id: 1 } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.deleteMatch).toBeDefined();
      expect(response.errors).toBeUndefined();
    });
  });
};
