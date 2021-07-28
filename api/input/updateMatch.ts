import { inputObjectType } from 'nexus';

export const UpdateMatchInput = inputObjectType({
  name: 'UpdateMatch',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
