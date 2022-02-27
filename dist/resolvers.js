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
exports.resolvers = void 0;
const node_fetch_1 = require("node-fetch");
const BASE_URL = 'https://swapi.dev/api';
function fetchPeople(relativeURL) {
    return (0, node_fetch_1.default)(`${BASE_URL}${relativeURL}`)
        .then(res => res.json())
        .then(json => json);
}
exports.resolvers = {
    Query: {
        getAllPeople: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            if (args && args.hasOwnProperty('page')) {
                return yield fetchPeople(`/people/?page=${args.page}`);
            }
            else {
                return yield fetchPeople('/people/');
            }
        }),
        singlePerson: (_, args) => fetchPeople(`/people/?search=${args.name}`)
    }
};
//# sourceMappingURL=resolvers.js.map