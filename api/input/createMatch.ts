import { inputObjectType } from 'nexus';

export const CreateMatchInput = inputObjectType({
  name: 'CreateMatch',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
