import gql from 'graphql-tag';

export const MEETUPS_QUERY = gql`
  query MEETUPS_QUERY {
    meetups {
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
