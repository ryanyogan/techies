import React from "react";
import Layout from "../components/Layout";
import MeetupsAttending from "../components/MeetupsAttending";

export default class MeetupsGoingPage extends React.Component {
  render() {
    return (
      <Layout>
        <MeetupsAttending />
      </Layout>
    );
  }
}
