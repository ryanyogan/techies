import React from "react";
import Link from "next/link";
import moment from "moment";

const Meetup = ({ meetups }: any) => (
  <div className="ui divided items">
    {meetups.map((meetup: any, idx: number) => (
      <div className="item" key={idx}>
        <div className="content">
          <Link href={meetup.id}>
            <a className="header">{meetup.title}</a>
          </Link>
          {meetup.organizer && (
            <div className="meta">
              Organized by <strong>{meetup.organizer.name}</strong>
            </div>
          )}
          <div className="description">
            <span>
              <i className="calendar icon" />{" "}
              {moment(meetup.date).format("dddd, MMMM Do YYYY, hA")}
            </span>
            <span>
              <i className="map marker alternate icon" /> {meetup.location}
            </span>
          </div>
          <div className="extra">
            <i className="thumbs up icon" />
            {meetup.attendees && meetup.attendees.length <= 1
              ? `${meetup.attendees.length} attendee going`
              : `${meetup.attendees.length} attendees going`}
          </div>
        </div>
      </div>
    ))}
  </div>
);

export default Meetup;
