import gql from "graphql-tag";

export const SINGLE_PERSON = gql`
query GetSinglePerson($name: String!){
    singlePerson(name: $name){
        count
        next
        previous
        results {
            gender
            height
            mass
            name
            homeworld
        }
    }
}
`;