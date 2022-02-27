"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
    type People {
        count: Int, 
        next: String, 
        previous: String, 
        results: [Person]
    }
    type Person {
        name: String,
        height: String
        mass: String
        gender: String
        homeworld: String
    }
    type Query {
        getAllPeople(page: Int): People
        singlePerson(name: String!): People
    }
`;
//# sourceMappingURL=typeDefs.js.map