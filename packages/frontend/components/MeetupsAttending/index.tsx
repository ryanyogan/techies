import React from "react";
import { Query } from "react-apollo";
import { ME_QUERY } from "../../graphql/queries";
import Menu from "../Menu";
import Meetup from "../Meetup";

const MeetupsAttending = () => (
  <Query query={ME_QUERY}>
    {({ data: { me }, loading }) => (
      <div className="ui stackable relaxed grid container">
        <div className="twelve wide column">
          <h2 className="ui header">Meetups I'm Going</h2>
          <div className="ui segment">
            {loading && <div>Loading...</div>}
            {me && <Meetup meetups={me.meetupsAttending} />}
          </div>
        </div>
        <div className="four wide column">
          <Menu authenticated={me} />
        </div>
      </div>
    )}
  </Query>
);

export default MeetupsAttending;
