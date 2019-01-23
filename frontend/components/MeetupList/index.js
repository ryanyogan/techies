import React from 'react';
import { Query } from 'react-apollo';
import Meetup from '../Meetup';
import Menu from '../Menu';
import { MEETUPS_QUERY } from '../../graphql/queries';

const MeetupList = () => (
  <Query query={MEETUPS_QUERY}>
    {({ data: { meetups }, loading }) => {
      return (
        <div className="ui stackable relaxed grid container">
          <div className="twelve wide column">
            <h2 className="ui header">All Meetups</h2>
            <div className="ui segment">
              {loading && <div>Loading...</div>}
              {meetups && <Meetup meetups={meetups} />}
            </div>
          </div>
          <div className="four wide column">
            <Menu />
          </div>
        </div>
      );
    }}
  </Query>
);

export default MeetupList;
