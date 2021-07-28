import { objectType, nonNull } from 'nexus';

export const Match = objectType({
  name: 'Match',
  definition(t) {
    t.field('id', {
      type: nonNull('Int'),
    });
    t.field('name', {
      type: nonNull('String'),
    });
  },
});
