import { ApolloServer } from 'apollo-server';
import typeDefs from '../schema/typeDefs';
import resolvers from '../resolvers/resolvers';

import { createTestClient } from 'apollo-server-testing';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});
const { query, mutate } = createTestClient(server);

export const teamTest = (): void => {
  describe('team test', () => {
    test('teams test', async () => {
      const TEAMS = `
        query teams {
            teams {
                id
                name
            }
        }
      `;
      const response = await query({ query: TEAMS, variables: {} });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.teams).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('team test', async () => {
      const team = `
        query team ($id: Int!) {
            team (id: $id) {
                id
                name
            }
        }
        `;
      const response = await query({ query: team, variables: { id: 2 } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.team).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('add team test', async () => {
      const ADD_TEAM = `
        mutation addTeam ($data: CreateTeam!) {
            addTeam (data: $data) {
                id
                name
            }
        }
        `;
      const response = await mutate({ mutation: ADD_TEAM, variables: { data: { id: 3, name: 'team 3' } } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.addTeam).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('update team test', async () => {
      const UPDATE_TEAM = `
        mutation updateTeam ($data: UpdateTeam!) {
            updateTeam (data: $data) {
                id
                name
            }
        }
        `;
      const response = await mutate({
        mutation: UPDATE_TEAM,
        variables: { data: { id: 1, name: 'team 111112222233333' } },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.updateTeam).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('delete team test', async () => {
      const DELETE_TEAM = `
        mutation deleteTeam ($id: Int!) {
            deleteTeam (id: $id) {
                id
            }
        }
        `;
      const response = await mutate({ mutation: DELETE_TEAM, variables: { id: 1 } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.deleteTeam).toBeDefined();
      expect(response.errors).toBeUndefined();
    });
  });
};
