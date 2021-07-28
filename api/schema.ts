import { makeSchema } from 'nexus';
import path from 'path';

import { players, playerById, teams, teamById, matches, matchById } from './query/query';
import {
  addPlayer,
  updatePlayer,
  deletePlayer,
  addTeam,
  updateTeam,
  deleteTeam,
  addMatch,
  updateMatch,
  deleteMatch,
} from './mutation/mutation';

export const schema = makeSchema({
  types: [
    players,
    playerById,
    teams,
    teamById,
    matches,
    matchById,
    addPlayer,
    updatePlayer,
    deletePlayer,
    addTeam,
    updateTeam,
    deleteTeam,
    addMatch,
    updateMatch,
    deleteMatch,
  ],
  outputs: {
    typegen: path.join(process.cwd(), '/nexus-typegen.ts'),
    schema: path.join(process.cwd(), '/schema.graphql'),
  },
});
