import { mutationField, nonNull } from 'nexus';
import { Player } from '../types/player';
import { Team } from '../types/team';
import { Match } from '../types/match';
import { DeletePlayerResult } from '../types/deletePlayerResult';
import { DeleteTeamResult } from '../types/deleteTeamResult';
import { DeleteMatchResult } from '../types/deleteMatchResult';
import { playerList, teamList, matchesList } from '../data/data';

import { CreatePlayerInput } from '../input/createPlayer';
import { UpdatePlayerInput } from '../input/updatePlayer';
import { CreateTeamInput } from '../input/createTeam';
import { UpdateTeamInput } from '../input/updateTeam';
import { CreateMatchInput } from '../input/createMatch';
import { UpdateMatchInput } from '../input/updateMatch';

export const addPlayer = mutationField('addPlayer', {
  type: nonNull(Player),
  args: { data: nonNull(CreatePlayerInput) },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const player = {
      id: args.data.id,
      name: args.data.name,
    };
    playerList.push(player);
    return player;
  },
});

export const updatePlayer = mutationField('updatePlayer', {
  type: nonNull(Player),
  args: { data: nonNull(UpdatePlayerInput) },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const player = {
      id: args.data.id,
      name: args.data.name,
    };
    playerList.forEach((item, i) => {
      if (item.id === args.data.id) {
        item.name = args.data.name;
      }
    });
    return player;
  },
});

export const deletePlayer = mutationField('deletePlayer', {
  type: nonNull(DeletePlayerResult),
  args: { id: nonNull('Int') },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;

    // if (id) {
    //   playerList = playerList.filter((item, i) => {
    //     if (item.id !== id) {
    //       return item;
    //     }
    //   });
    // }

    const player = {
      id: args.id,
    };
    return player;
  },
});

export const addTeam = mutationField('addTeam', {
  type: nonNull(Team),
  args: { data: nonNull(CreateTeamInput) },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const team = {
      id: args.data.id,
      name: args.data.name,
    };
    teamList.push(team);
    return team;
  },
});

export const updateTeam = mutationField('updateTeam', {
  type: nonNull(Team),
  args: { data: nonNull(UpdateTeamInput) },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const team = {
      id: args.data.id,
      name: args.data.name,
    };
    teamList.forEach((item, i) => {
      if (item.id === args.data.id) {
        item.name = args.data.name;
      }
    });
    return team;
  },
});

export const deleteTeam = mutationField('deleteTeam', {
  type: nonNull(DeleteTeamResult),
  args: { id: nonNull('Int') },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;

    // if (id) {
    //   teamList = teamList.filter((item, i) => {
    //     if (item.id !== id) {
    //       return item;
    //     }
    //   });
    // }

    const team = {
      id: args.id,
    };
    return team;
  },
});

export const addMatch = mutationField('addMatch', {
  type: nonNull(Match),
  args: { data: nonNull(CreateMatchInput) },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const match = {
      id: args.data.id,
      name: args.data.name,
    };
    matchesList.push(match);
    return match;
  },
});

export const updateMatch = mutationField('updateMatch', {
  type: nonNull(Match),
  args: { data: nonNull(UpdateMatchInput) },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const match = {
      id: args.data.id,
      name: args.data.name,
    };
    matchesList.forEach((item, i) => {
      if (item.id === args.data.id) {
        item.name = args.data.name;
      }
    });
    return match;
  },
});

export const deleteMatch = mutationField('deleteMatch', {
  type: nonNull(DeleteMatchResult),
  args: { id: nonNull('Int') },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;

    // if (id) {
    //   matchesList = matchesList.filter((item, i) => {
    //     if (item.id !== id) {
    //       return item;
    //     }
    //   });
    // }

    const match = {
      id: args.id,
    };
    return match;
  },
});
