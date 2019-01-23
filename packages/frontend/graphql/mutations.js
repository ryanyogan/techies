import gql from 'graphql-tag';

export const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION(
    $email: String!
    $password: String!
    $name: String!
  ) {
    signup(email: $email, password: $password, name: $name) {
      token
    }
  }
`;

export const LOGIN_MUTATION = gql`
  mutation LOGIN_MUTATION($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const CREATE_MEETUP_MUTATION = gql`
  mutation CREATE_MEETUP_MUTATION(
    $title: String!
    $location: String!
    $date: DateTime!
    $description: String!
  ) {
    createMeetup(
      title: $title
      location: $location
      date: $date
      description: $description
    ) {
      id
      title
      date
      location
      organizer {
        name
      }
      attendees {
        id
      }
    }
  }
`;
