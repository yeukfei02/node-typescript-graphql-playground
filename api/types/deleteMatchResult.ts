import { objectType, nonNull } from 'nexus';

export const DeleteMatchResult = objectType({
  name: 'DeleteMatchResult',
  definition(t) {
    t.field('id', {
      type: nonNull('Int'),
    });
  },
});
