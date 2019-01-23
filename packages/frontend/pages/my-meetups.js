import React from 'react';
import Layout from '../components/Layout';
import MyMeetups from '../components/MyMeetups';

export default class MyMeetupsPage extends React.Component {
  render() {
    return (
      <Layout>
        <MyMeetups />
      </Layout>
    );
  }
}
