import { ApolloServer } from 'apollo-server';
import { schema } from '../../api/schema';

const server = new ApolloServer({
  schema,
});

export const playerTest = (): void => {
  describe('player test', () => {
    test('players test', async () => {
      const PLAYERS = `
        query players {
            players {
                id
                name
            }
        }
      `;
      const response = await server.executeOperation({ query: PLAYERS, variables: {} });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.players).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('player test', async () => {
      const PLAYER = `
            query player ($id: Int!) {
                player (id: $id) {
                    id
                    name
                }
            }
        `;

      const response = await server.executeOperation({ query: PLAYER, variables: { id: 2 } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.player).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('add player test', async () => {
      const ADD_PLAYER = `
            mutation addPlayer ($data: CreatePlayer!) {
                addPlayer (data: $data) {
                    id
                    name
                }
            }
        `;
      const response = await server.executeOperation({
        query: ADD_PLAYER,
        variables: { data: { id: 3, name: 'player3' } },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.addPlayer).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('update player test', async () => {
      const UPDATE_PLAYER = `
            mutation updatePlayer ($data: UpdatePlayer!) {
                updatePlayer (data: $data) {
                    id
                    name
                }
            }
        `;
      const response = await server.executeOperation({
        query: UPDATE_PLAYER,
        variables: { data: { id: 2, name: 'player 22222' } },
      });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.updatePlayer).toBeDefined();
      expect(response.errors).toBeUndefined();
    });

    test('delete player test', async () => {
      const DELETE_PLAYER = `
        mutation deletePlayer ($id: Int!) {
            deletePlayer (id: $id) {
                id
            }
        }
          `;
      const response = await server.executeOperation({ query: DELETE_PLAYER, variables: { id: 1 } });
      console.log('response = ', response);

      expect(response.data).toBeDefined();
      expect(response.data.deletePlayer).toBeDefined();
      expect(response.errors).toBeUndefined();
    });
  });
};
