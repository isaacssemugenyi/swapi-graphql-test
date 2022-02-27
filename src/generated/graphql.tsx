import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type People = {
  __typename?: 'People';
  count?: Maybe<Scalars['Int']>;
  next?: Maybe<Scalars['String']>;
  previous?: Maybe<Scalars['String']>;
  results?: Maybe<Array<Maybe<Person>>>;
};

export type Person = {
  __typename?: 'Person';
  gender?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
  homeworld?: Maybe<Scalars['String']>;
  mass?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getAllPeople?: Maybe<People>;
  singlePerson?: Maybe<People>;
};


export type QueryGetAllPeopleArgs = {
  page?: InputMaybe<Scalars['Int']>;
};


export type QuerySinglePersonArgs = {
  name: Scalars['String'];
};

export type GetSinglePersonQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type GetSinglePersonQuery = { __typename?: 'Query', singlePerson?: { __typename?: 'People', count?: number | null, next?: string | null, previous?: string | null, results?: Array<{ __typename?: 'Person', gender?: string | null, height?: string | null, mass?: string | null, name?: string | null, homeworld?: string | null } | null> | null } | null };

export type GetAllPeopleQueryVariables = Exact<{
  page?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllPeopleQuery = { __typename?: 'Query', getAllPeople?: { __typename?: 'People', count?: number | null, next?: string | null, previous?: string | null, results?: Array<{ __typename?: 'Person', gender?: string | null, height?: string | null, mass?: string | null, name?: string | null, homeworld?: string | null } | null> | null } | null };


export const GetSinglePersonDocument = gql`
    query GetSinglePerson($name: String!) {
  singlePerson(name: $name) {
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

/**
 * __useGetSinglePersonQuery__
 *
 * To run a query within a React component, call `useGetSinglePersonQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSinglePersonQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSinglePersonQuery({
 *   variables: {
 *      name: // value for 'name'
 *   },
 * });
 */
export function useGetSinglePersonQuery(baseOptions: Apollo.QueryHookOptions<GetSinglePersonQuery, GetSinglePersonQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSinglePersonQuery, GetSinglePersonQueryVariables>(GetSinglePersonDocument, options);
      }
export function useGetSinglePersonLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSinglePersonQuery, GetSinglePersonQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSinglePersonQuery, GetSinglePersonQueryVariables>(GetSinglePersonDocument, options);
        }
export type GetSinglePersonQueryHookResult = ReturnType<typeof useGetSinglePersonQuery>;
export type GetSinglePersonLazyQueryHookResult = ReturnType<typeof useGetSinglePersonLazyQuery>;
export type GetSinglePersonQueryResult = Apollo.QueryResult<GetSinglePersonQuery, GetSinglePersonQueryVariables>;
export const GetAllPeopleDocument = gql`
    query GetAllPeople($page: Int) {
  getAllPeople(page: $page) {
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

/**
 * __useGetAllPeopleQuery__
 *
 * To run a query within a React component, call `useGetAllPeopleQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllPeopleQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllPeopleQuery({
 *   variables: {
 *      page: // value for 'page'
 *   },
 * });
 */
export function useGetAllPeopleQuery(baseOptions?: Apollo.QueryHookOptions<GetAllPeopleQuery, GetAllPeopleQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllPeopleQuery, GetAllPeopleQueryVariables>(GetAllPeopleDocument, options);
      }
export function useGetAllPeopleLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllPeopleQuery, GetAllPeopleQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllPeopleQuery, GetAllPeopleQueryVariables>(GetAllPeopleDocument, options);
        }
export type GetAllPeopleQueryHookResult = ReturnType<typeof useGetAllPeopleQuery>;
export type GetAllPeopleLazyQueryHookResult = ReturnType<typeof useGetAllPeopleLazyQuery>;
export type GetAllPeopleQueryResult = Apollo.QueryResult<GetAllPeopleQuery, GetAllPeopleQueryVariables>;