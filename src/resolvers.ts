import fetch from 'node-fetch'

const BASE_URL = 'https://swapi.dev/api'

function fetchPeople(relativeURL: String){
    return fetch(`${BASE_URL}${relativeURL}`)
    .then(res => res.json())
    .then(json => json)
}

type People = {
    count: number, 
    next: string, 
    previous: string, 
    results: [Person]
}

type Person = {
    name: String,
    height: String
    mass: String
    gender: String
    homeworld: String
}

export const resolvers = {
    Query: {
        getAllPeople: async (_: any, args: any): Promise<People> => {
            if(args && args.hasOwnProperty('page')) {
                return await fetchPeople(`/people/?page=${args.page}`) 
            } else {
                return await fetchPeople('/people/')
            }   
        } ,
        singlePerson: (_: any, args: any): Promise<People> => fetchPeople(`/people/?search=${args.name}`)
    }
}
