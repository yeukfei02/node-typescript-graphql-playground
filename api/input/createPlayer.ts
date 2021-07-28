import { inputObjectType } from 'nexus';

export const CreatePlayerInput = inputObjectType({
  name: 'CreatePlayer',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
