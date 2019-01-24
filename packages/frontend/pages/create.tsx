import React from "react";
import Layout from "../components/Layout";
import NewMeetup from "../components/NewMeetup";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <NewMeetup />
      </Layout>
    );
  }
}
