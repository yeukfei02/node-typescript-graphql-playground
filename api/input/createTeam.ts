import { inputObjectType } from 'nexus';

export const CreateTeamInput = inputObjectType({
  name: 'CreateTeam',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
