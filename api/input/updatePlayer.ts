import { inputObjectType } from 'nexus';

export const UpdatePlayerInput = inputObjectType({
  name: 'UpdatePlayer',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
