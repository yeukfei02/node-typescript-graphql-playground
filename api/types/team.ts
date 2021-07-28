import { objectType, nonNull } from 'nexus';

export const Team = objectType({
  name: 'Team',
  definition(t) {
    t.field('id', {
      type: nonNull('Int'),
    });
    t.field('name', {
      type: nonNull('String'),
    });
  },
});
