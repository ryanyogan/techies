import React from "react";
import Layout from "../components/Layout";
import Login from "../components/Login";

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Login />
      </Layout>
    );
  }
}
