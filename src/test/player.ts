import { GraphQLClient, gql } from 'graphql-request';

const rootUrl = 'https://node-ts-graphql-playground.herokuapp.com';
const graphQLClient = new GraphQLClient(rootUrl);

export const playerTest = (): void => {
  describe('player test', () => {
    test('players test', async () => {
      const PLAYERS = gql`
        query players {
          players {
            id
            name
          }
        }
      `;

      const response = await graphQLClient.request(PLAYERS);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.players).toBeDefined();
    });

    test('player test', async () => {
      const PLAYER = gql`
        query player($id: Int!) {
          player(id: $id) {
            id
            name
          }
        }
      `;

      const variables = { id: 2 };
      const response = await graphQLClient.request(PLAYER, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.player).toBeDefined();
    });

    test('add player test', async () => {
      const ADD_PLAYER = gql`
        mutation addPlayer($data: CreatePlayer!) {
          addPlayer(data: $data) {
            id
            name
          }
        }
      `;

      const variables = { data: { id: 3, name: 'player3' } };
      const response = await graphQLClient.request(ADD_PLAYER, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.addPlayer).toBeDefined();
    });

    test('update player test', async () => {
      const UPDATE_PLAYER = gql`
        mutation updatePlayer($data: UpdatePlayer!) {
          updatePlayer(data: $data) {
            id
            name
          }
        }
      `;

      const variables = { data: { id: 2, name: 'player 22222' } };
      const response = await graphQLClient.request(UPDATE_PLAYER, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.updatePlayer).toBeDefined();
    });

    test('delete player test', async () => {
      const DELETE_PLAYER = gql`
        mutation deletePlayer($id: Int!) {
          deletePlayer(id: $id) {
            id
          }
        }
      `;
      const variables = { id: 1 };
      const response = await graphQLClient.request(DELETE_PLAYER, variables);
      console.log('response = ', response);

      expect(response).toBeDefined();
      expect(response.deletePlayer).toBeDefined();
    });
  });
};
