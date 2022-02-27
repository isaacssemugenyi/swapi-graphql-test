import { gql } from "apollo-server-express"

export const typeDefs = gql`
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
`