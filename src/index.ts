import * as express from 'express'
import { ApolloServer } from "apollo-server-express"
import { resolvers } from "./resolvers"
import { typeDefs } from "./typeDefs"


(async () => {
    try {
        const server = new ApolloServer({
            typeDefs,
            resolvers
        })
        const app: express.Application = express()
        await server.start()
        server.applyMiddleware({ app })

        app.listen({ port: 7000 }, () => {
            console.log(`Server running at http://localhost:7000${server.graphqlPath}`)

        })
    } catch (error) {
        console.log(error.message);
    }
})()
