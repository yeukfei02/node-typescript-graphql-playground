import { queryField, list, nonNull, intArg } from 'nexus';
import { Player } from '../types/player';
import { Team } from '../types/team';
import { Match } from '../types/match';
import { playerList, teamList, matchesList } from '../data/data';

export const players = queryField('players', {
  type: nonNull(list(nonNull(Player))),
  resolve: (parent: any, args: any, context: any, info: any) => {
    return playerList;
  },
});

export const playerById = queryField('player', {
  type: nonNull(Player),
  args: {
    id: nonNull(intArg()),
  },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;

    let player = null;
    if (id) {
      player = playerList.filter((item, i) => {
        if (item.id === id) {
          return item;
        }
      });
    }

    return player[0];
  },
});

export const teams = queryField('teams', {
  type: nonNull(list(nonNull(Team))),
  resolve: (parent: any, args: any, context: any, info: any) => {
    return teamList;
  },
});

export const teamById = queryField('team', {
  type: nonNull(Team),
  args: {
    id: nonNull(intArg()),
  },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;

    let team = null;
    if (id) {
      team = teamList.filter((item, i) => {
        if (item.id === id) {
          return item;
        }
      });
    }

    return team[0];
  },
});

export const matches = queryField('matches', {
  type: nonNull(list(nonNull(Match))),
  resolve: (parent: any, args: any, context: any, info: any) => {
    return matchesList;
  },
});

export const matchById = queryField('match', {
  type: nonNull(Match),
  args: {
    id: nonNull(intArg()),
  },
  resolve: (parent: any, args: any, context: any, info: any) => {
    const id = args.id;

    let match = null;
    if (id) {
      match = matchesList.filter((item, i) => {
        if (item.id === id) {
          return item;
        }
      });
    }

    return match[0];
  },
});
