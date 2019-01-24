import * as React from "react";
import Layout from "../components/Layout";
import MeetupList from "../components/MeetupList";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <MeetupList />
      </Layout>
    );
  }
}
