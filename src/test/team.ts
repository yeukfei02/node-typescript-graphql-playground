import { GraphQLClient, gql } from 'graphql-request';

const rootUrl = 'https://node-ts-graphql-playground.herokuapp.com';
const graphQLClient = new GraphQLClient(rootUrl);

export const teamTest = (): void => {
  describe('team test', () => {
    test('teams test', async () => {
      const TEAMS = gql`
        query teams {
          teams {
            id
            name
          }
        }
      `;
      const response = await graphQLClient.request(TEAMS);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.teams).toBeDefined();
    });

    test('team test', async () => {
      const TEAM = gql`
        query team($id: Int!) {
          team(id: $id) {
            id
            name
          }
        }
      `;
      const variables = { id: 2 };
      const response = await graphQLClient.request(TEAM, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.team).toBeDefined();
    });

    test('add team test', async () => {
      const ADD_TEAM = gql`
        mutation addTeam($data: CreateTeam!) {
          addTeam(data: $data) {
            id
            name
          }
        }
      `;
      const variables = { data: { id: 3, name: 'team 3' } };
      const response = await graphQLClient.request(ADD_TEAM, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.addTeam).toBeDefined();
    });

    test('update team test', async () => {
      const UPDATE_TEAM = gql`
        mutation updateTeam($data: UpdateTeam!) {
          updateTeam(data: $data) {
            id
            name
          }
        }
      `;
      const variables = { data: { id: 1, name: 'team 111112222233333' } };
      const response = await graphQLClient.request(UPDATE_TEAM, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.updateTeam).toBeDefined();
    });

    test('delete team test', async () => {
      const DELETE_TEAM = gql`
        mutation deleteTeam($id: Int!) {
          deleteTeam(id: $id) {
            id
          }
        }
      `;
      const variables = { id: 1 };
      const response = await graphQLClient.request(DELETE_TEAM, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.deleteTeam).toBeDefined();
    });
  });
};
