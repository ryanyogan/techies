import React from "react";
import { Query } from "react-apollo";
import Meetup from "../Meetup";
import Menu from "../Menu";

import { ME_QUERY } from "../../graphql/queries";

const MyMeetups = () => (
  <Query query={ME_QUERY}>
    {({ data: { me }, loading }) => (
      <div className="ui stackable relaxed grid container">
        <div className="twelve wide column">
          <h2 className="ui header">My Meetups</h2>
          <div className="ui segment">
            {loading && <div>Loading...</div>}
            {me && <Meetup meetups={me.myMeetups} />}
          </div>
        </div>
        <div className="four wide column">
          <Menu />
        </div>
      </div>
    )}
  </Query>
);

export default MyMeetups;
