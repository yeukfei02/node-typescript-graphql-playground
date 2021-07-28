import { objectType, nonNull } from 'nexus';

export const DeleteTeamResult = objectType({
  name: 'DeleteTeamResult',
  definition(t) {
    t.field('id', {
      type: nonNull('Int'),
    });
  },
});
