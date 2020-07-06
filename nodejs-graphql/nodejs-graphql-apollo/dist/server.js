"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const winston_1 = __importDefault(require("winston"));
const NodeApi_1 = __importDefault(require("./data-sources/NodeApi"));
const resolverUtils_1 = require("./utils/resolverUtils");
process
    .on('unhandledRejection', (reason, p) => {
    winston_1.default.error('Unhandled Rejection at Promise', reason, p);
})
    .on('uncaughtException', err => {
    winston_1.default.error('Uncaught Exception thrown', err);
    process.exit(1);
});
// The GraphQL schema sample
const typeDefs = apollo_server_1.gql `
  # A simple schema Book to start
  type Book {
    title: String
    author: String
  }

  type City {
    id: String
    name: String
    city: String
  }

  type Query {
    books: [Book],
    cities: [City],
    city(id: String): City
  }
`;
const books = [
    {
        title: 'Harry Potter and the Chamber of Secrets',
        author: 'J.K. Rowling',
    },
    {
        title: 'Jurassic Park',
        author: 'Michael Crichton',
    },
];
const resolvers = {
    Query: {
        books: () => books,
        cities: resolverUtils_1.catchResolverErrors(async (parent, args, { dataSources }) => {
            return dataSources.nodeApi.getAllCities();
        }),
        city: resolverUtils_1.catchResolverErrors(async (parent, { id }, { dataSources }) => {
            return dataSources.nodeApi.getCityById(id);
        })
    }
};
// The ApolloServer constructor
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers,
    cacheControl: {
        defaultMaxAge: 1,
        stripFormattedExtensions: false
    },
    formatError: error => {
        winston_1.default.error('Error apollo-server', error);
        return error;
    },
    dataSources: () => {
        return {
            nodeApi: new NodeApi_1.default()
        };
    }
});
// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=server.js.map