import React from 'react';
import Link from 'next/link';
import moment from 'moment';

const Meetup = ({ meetups }) => (
  <div className="ui divided items">
    {meetups.map((meetup, idx) => (
      <div className="item" key={idx}>
        <div className="content">
          <Link className="header" href={meetup.id}>
            {meetup.title}
          </Link>
          {meetup.organizer && (
            <div className="meta">
              Organized by <strong>{meetup.organizer.name}</strong>
            </div>
          )}
          <div className="description">
            <span>
              <i className="calendar icon" />{' '}
              {moment(meetup.date, 'dddd, MMMM Do YYYY, hA')}
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
