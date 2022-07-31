import { gql } from '@apollo/client'
import * as Apollo from '@apollo/client'

export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type Member = {
  __typename?: 'Member'
  address: Scalars['String']
  displayName: Scalars['String']
  id: Scalars['Int']
  username: Scalars['String']
  usernameFormatted: Scalars['String']
}

export type MemberPayload = {
  __typename?: 'MemberPayload'
  error?: Maybe<UserError>
  member?: Maybe<Member>
}

export type Mutation = {
  __typename?: 'Mutation'
  createMember?: Maybe<Member>
}

export type MutationCreateMemberArgs = {
  address: Scalars['String']
  displayName: Scalars['String']
  username: Scalars['String']
}

export type Query = {
  __typename?: 'Query'
  memberByAddress?: Maybe<MemberPayload>
}

export type QueryMemberByAddressArgs = {
  address: Scalars['String']
}

export type UserError = {
  __typename?: 'UserError'
  data?: Maybe<Scalars['String']>
  message: Scalars['String']
  path?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type UserErrorDetailsFragment = {
  __typename?: 'UserError'
  message: string
  path?: Array<string | null> | null
  data?: string | null
}

export type MemberDetailsFragment = {
  __typename?: 'Member'
  id: number
  address: string
  username: string
  usernameFormatted: string
  displayName: string
}

export type MemberPayloadDetailsFragment = {
  __typename?: 'MemberPayload'
  member?: {
    __typename?: 'Member'
    id: number
    address: string
    username: string
    usernameFormatted: string
    displayName: string
  } | null
  error?: {
    __typename?: 'UserError'
    message: string
    path?: Array<string | null> | null
    data?: string | null
  } | null
}

export type MemberByAddressQueryVariables = Exact<{
  address: Scalars['String']
}>

export type MemberByAddressQuery = {
  __typename?: 'Query'
  memberByAddress?: {
    __typename?: 'MemberPayload'
    member?: {
      __typename?: 'Member'
      id: number
      address: string
      username: string
      usernameFormatted: string
      displayName: string
    } | null
    error?: {
      __typename?: 'UserError'
      message: string
      path?: Array<string | null> | null
      data?: string | null
    } | null
  } | null
}

export const MemberDetailsFragmentDoc = gql`
  fragment memberDetails on Member {
    id
    address
    username
    usernameFormatted
    displayName
  }
`
export const UserErrorDetailsFragmentDoc = gql`
  fragment userErrorDetails on UserError {
    message
    path
    data
  }
`
export const MemberPayloadDetailsFragmentDoc = gql`
  fragment memberPayloadDetails on MemberPayload {
    member {
      ...memberDetails
    }
    error {
      ...userErrorDetails
    }
  }
  ${MemberDetailsFragmentDoc}
  ${UserErrorDetailsFragmentDoc}
`
export const MemberByAddressDocument = gql`
  query MemberByAddress($address: String!) {
    memberByAddress(address: $address) {
      ...memberPayloadDetails
    }
  }
  ${MemberPayloadDetailsFragmentDoc}
`

/**
 * __useMemberByAddressQuery__
 *
 * To run a query within a React component, call `useMemberByAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useMemberByAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMemberByAddressQuery({
 *   variables: {
 *      address: // value for 'address'
 *   },
 * });
 */
export function useMemberByAddressQuery(
  baseOptions: Apollo.QueryHookOptions<MemberByAddressQuery, MemberByAddressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<MemberByAddressQuery, MemberByAddressQueryVariables>(
    MemberByAddressDocument,
    options
  )
}
export function useMemberByAddressLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<MemberByAddressQuery, MemberByAddressQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<MemberByAddressQuery, MemberByAddressQueryVariables>(
    MemberByAddressDocument,
    options
  )
}
export type MemberByAddressQueryHookResult = ReturnType<typeof useMemberByAddressQuery>
export type MemberByAddressLazyQueryHookResult = ReturnType<typeof useMemberByAddressLazyQuery>
export type MemberByAddressQueryResult = Apollo.QueryResult<
  MemberByAddressQuery,
  MemberByAddressQueryVariables
>
