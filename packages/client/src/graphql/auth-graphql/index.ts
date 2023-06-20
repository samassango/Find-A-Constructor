import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
mutation Mutation($user: UserLoginInput) {
    login(user: $user) {
      accessToken
      refreshToken
    }
  }`

