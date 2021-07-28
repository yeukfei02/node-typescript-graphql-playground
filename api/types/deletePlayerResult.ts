import { objectType, nonNull } from 'nexus';

export const DeletePlayerResult = objectType({
  name: 'DeletePlayerResult',
  definition(t) {
    t.field('id', {
      type: nonNull('Int'),
    });
  },
});
