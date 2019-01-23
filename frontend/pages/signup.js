import React from 'react';
import Layout from '../components/Layout';
import SignUp from '../components/Signup';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <SignUp />
      </Layout>
    );
  }
}
