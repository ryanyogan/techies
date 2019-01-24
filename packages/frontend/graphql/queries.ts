import gql from "graphql-tag";

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

export const ME_QUERY = gql`
  query ME_QUERY {
    me {
      id
      name
      myMeetups {
        id
        title
        date
        location
        attendees {
          id
        }
      }
      meetupsAttending {
        id
        title
        location
        organizer {
          name
        }
        attendees {
          id
        }
      }
    }
  }
`;
