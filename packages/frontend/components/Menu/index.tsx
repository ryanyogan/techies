import React, { Component, Fragment } from "react";
import Link from "next/link";

interface Props {
  authenticated: boolean;
}

class Menu extends Component<Props> {
  render() {
    return (
      <div className="ui vertical menu">
        <Link href="/">
          <a className="item">All Meetups</a>
        </Link>

        <Fragment>
          <Link href="/my-meetups">
            <a className="item">My Meetups</a>
          </Link>
          <Link href="/meetups-going">
            <a className="item">I'm going</a>
          </Link>
          <a className="ui item">Logout</a>
        </Fragment>
      </div>
    );
  }
}

export default Menu;
