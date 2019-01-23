import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';

import { CREATE_MEETUP_MUTATION } from '../../graphql/mutations';
import { MEETUPS_QUERY } from '../../graphql/queries';

class NewMeetup extends Component {
  state = {
    title: '',
    description: '',
    location: '',
    date: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e, createMeetup) => {
    e.preventDefault();

    try {
      await createMeetup({
        variables: {
          ...this.state,
        },
        update: (store, { data: { createMeetup } }) => {
          const data = store.readQuery({ query: MEETUPS_QUERY });
          data.meetups.push(createMeetup);
          store.writeQuery({ query: MEETUPS_QUERY, data });
        },
      });

      Router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Mutation mutation={CREATE_MEETUP_MUTATION}>
        {createMeetup => (
          <div className="ui stackable two column centered grid container">
            <div className="column">
              <h3 className="ui horizontal divider header">Create Meetup</h3>
              <form
                className="ui form"
                method="POST"
                onSubmit={e => this.onSubmit(e, createMeetup)}
              >
                <div className="field">
                  <label>Title</label>
                  <input
                    type="text"
                    name="title"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Location</label>
                  <input
                    type="text"
                    name="location"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Date</label>
                  <input
                    type="datetime-local"
                    name="date"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Description</label>
                  <textarea
                    name="description"
                    rows="10"
                    onChange={this.onChange}
                  />
                </div>
                <button className="ui primary button">Create Meetup</button>
              </form>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default NewMeetup;
