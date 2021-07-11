import { gql } from 'apollo-server';

const typeDefs = gql`
  type Query {
    players: [Player!]!
    player(id: Int!): Player!

    teams: [Team!]!
    team(id: Int!): Player!

    matches: [Match!]!
    match(id: Int!): Player!
  }

  type Mutation {
    addPlayer(data: CreatePlayer!): Player!
    updatePlayer(data: UpdatePlayer!): Player!
    deletePlayer(id: Int!): DeletePlayerResult!

    addTeam(data: CreateTeam!): Team!
    updateTeam(data: UpdateTeam!): Team!
    deleteTeam(id: Int!): DeleteTeamResult!

    addMatch(data: CreateMatch!): Match!
    updateMatch(data: UpdateMatch!): Match!
    deleteMatch(id: Int!): DeleteMatchResult!
  }

  type Player {
    id: Int!
    name: String!
  }

  type DeletePlayerResult {
    id: Int!
  }

  type Team {
    id: Int!
    name: String!
  }

  type DeleteTeamResult {
    id: Int!
  }

  type Match {
    id: Int!
    name: String!
  }

  type DeleteMatchResult {
    id: Int!
  }

  input CreatePlayer {
    id: Int!
    name: String!
  }

  input UpdatePlayer {
    id: Int!
    name: String!
  }

  input CreateTeam {
    id: Int!
    name: String!
  }

  input UpdateTeam {
    id: Int!
    name: String!
  }

  input CreateMatch {
    id: Int!
    name: String!
  }

  input UpdateMatch {
    id: Int!
    name: String!
  }
`;

export default typeDefs;
