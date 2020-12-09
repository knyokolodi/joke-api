"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_1 = require("apollo-server");
exports.typeDefs = apollo_server_1.gql `
  type Categories {
    categories: [String!]
  }

  type Joke {
    categories: [String]!
    created_at: String!
    icon_url: String!
    id: String!
    updated_at: String!
    url: String!
    value: String!
  }

  type Query {
    getCategories: Categories!
    getRandomJoke(category: String!): Joke!
  }
`;
