import { inputObjectType } from 'nexus';

export const UpdateTeamInput = inputObjectType({
  name: 'UpdateTeam',
  definition(t) {
    t.nonNull.int('id');
    t.nonNull.string('name');
  },
});
