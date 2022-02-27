import * as express from 'express'
import { ApolloServer } from "apollo-server-express"
import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"

const PORT = process.env.PORT || 7000;

(async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers
        })
        const app: express.Application = express()
        await server.start()
        server.applyMiddleware({ app })

        app.listen({ port: PORT }, () => {
            console.log(`Server running at http://localhost:${PORT}${server.graphqlPath}`)

        })
    } catch (error) {
        console.log(error.message);
    }
})()
