"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const apollo_server_express_1 = require("apollo-server-express");
const resolvers_1 = require("./resolvers");
const typeDefs_1 = require("./typeDefs");
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const server = new apollo_server_express_1.ApolloServer({
            typeDefs: typeDefs_1.typeDefs,
            resolvers: resolvers_1.resolvers
        });
        const app = express();
        yield server.start();
        server.applyMiddleware({ app });
        app.listen({ port: 7000 }, () => {
            console.log(`Server running at http://localhost:7000${server.graphqlPath}`);
        });
    }
    catch (error) {
        console.log(error.message);
    }
}))();
//# sourceMappingURL=index.js.map