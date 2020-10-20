const playerList = [
  {
    id: 1,
    name: 'player1',
  },
  {
    id: 2,
    name: 'player2',
  },
];

const teamList = [
  {
    id: 1,
    name: 'team1',
  },
  {
    id: 2,
    name: 'team2',
  },
];

const matchesList = [
  {
    id: 1,
    name: 'match1',
  },
  {
    id: 2,
    name: 'match2',
  },
];

const resolvers = {
  Query: {
    players: (root: any, args: any, context: any, info: any) => {
      return playerList;
    },
    player: (root: any, args: any, context: any, info: any) => {
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

    teams: (root: any, args: any, context: any, info: any) => {
      return teamList;
    },
    team: (root: any, args: any, context: any, info: any) => {
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

    matches: (root: any, args: any, context: any, info: any) => {
      return matchesList;
    },
    match: (root: any, args: any, context: any, info: any) => {
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
  },
  Mutation: {
    addPlayer: (root: any, args: any, context: any, info: any) => {
      const player = {
        id: args.data.id,
        name: args.data.name,
      };
      playerList.push(player);
      return player;
    },

    addTeam: (root: any, args: any, context: any, info: any) => {
      const team = {
        id: args.data.id,
        name: args.data.name,
      };
      teamList.push(team);
      return team;
    },

    addMatch: (root: any, args: any, context: any, info: any) => {
      const match = {
        id: args.data.id,
        name: args.data.name,
      };
      matchesList.push(match);
      return match;
    },
  },
};

export default resolvers;
