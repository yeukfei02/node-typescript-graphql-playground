import { objectType, nonNull } from 'nexus';

export const Player = objectType({
  name: 'Player',
  definition(t) {
    t.field('id', {
      type: nonNull('Int'),
    });
    t.field('name', {
      type: nonNull('String'),
    });
  },
});
