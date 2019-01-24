import React, { Component, Fragment } from "react";
import Router from "next/router";
import Link from "next/link";

class Menu extends Component {
  state = {
    isAuthenticated: false,
  };

  logOut = () => {
    localStorage.removeItem("USER_TOKEN");
    Router.push("/login");
  };

  componentDidMount() {
    this.setState({
      isAuthenticated: !!localStorage.getItem("USER_TOKEN"),
    });
  }

  render() {
    return (
      <div className="ui vertical menu">
        <Link href="/">
          <a className="item">All Meetups</a>
        </Link>

        {this.state.isAuthenticated && (
          <Fragment>
            <Link href="/my-meetups">
              <a className="item">My Meetups</a>
            </Link>
            <Link href="/meetups-going">
              <a className="item">I'm going</a>
            </Link>
            <a className="ui item" onClick={this.logOut}>
              Logout
            </a>
          </Fragment>
        )}
      </div>
    );
  }
}

export default Menu;
