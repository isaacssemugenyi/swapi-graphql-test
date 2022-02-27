import gql from "graphql-tag";

export const GET_ALL_PEOPLE = gql`
    query GetAllPeople($page: Int) {
        getAllPeople(page: $page){
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
` 