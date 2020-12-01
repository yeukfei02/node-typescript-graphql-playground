let playerList = [
  {
    id: 1,
    name: 'player1',
  },
  {
    id: 2,
    name: 'player2',
  },
];

let teamList = [
  {
    id: 1,
    name: 'team1',
  },
  {
    id: 2,
    name: 'team2',
  },
];

let matchesList = [
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
    players: (parent: any, args: any, context: any, info: any) => {
      return playerList;
    },
    player: (parent: any, args: any, context: any, info: any) => {
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

    teams: (parent: any, args: any, context: any, info: any) => {
      return teamList;
    },
    team: (parent: any, args: any, context: any, info: any) => {
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

    matches: (parent: any, args: any, context: any, info: any) => {
      return matchesList;
    },
    match: (parent: any, args: any, context: any, info: any) => {
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
    addPlayer: (parent: any, args: any, context: any, info: any) => {
      const player = {
        id: args.data.id,
        name: args.data.name,
      };
      playerList.push(player);
      return player;
    },
    updatePlayer: (parent: any, args: any, context: any, info: any) => {
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
    deletePlayer: (parent: any, args: any, context: any, info: any) => {
      const id = args.id;

      if (id) {
        playerList = playerList.filter((item, i) => {
          if (item.id !== id) {
            return item;
          }
        });
      }

      const player = {
        id: args.id,
      };
      return player;
    },

    addTeam: (parent: any, args: any, context: any, info: any) => {
      const team = {
        id: args.data.id,
        name: args.data.name,
      };
      teamList.push(team);
      return team;
    },
    updateTeam: (parent: any, args: any, context: any, info: any) => {
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
    deleteTeam: (parent: any, args: any, context: any, info: any) => {
      const id = args.id;

      if (id) {
        teamList = teamList.filter((item, i) => {
          if (item.id !== id) {
            return item;
          }
        });
      }

      const team = {
        id: args.id,
      };
      return team;
    },

    addMatch: (parent: any, args: any, context: any, info: any) => {
      const match = {
        id: args.data.id,
        name: args.data.name,
      };
      matchesList.push(match);
      return match;
    },
    updateMatch: (parent: any, args: any, context: any, info: any) => {
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
    deleteMatch: (parent: any, args: any, context: any, info: any) => {
      const id = args.id;

      if (id) {
        matchesList = matchesList.filter((item, i) => {
          if (item.id !== id) {
            return item;
          }
        });
      }

      const match = {
        id: args.id,
      };
      return match;
    },
  },
};

export default resolvers;
