import React from 'react';
import Link from 'next/link';

const Layout = ({ children }) => (
  <div className="app" style={{ backgroundColor: '#f9f9f9' }}>
    <nav className="ui borderless menu">
      <div className="ui container">
        <div className="header item">
          <h1>
            <Link href="/">
              <a className="navbar-item">Techies</a>
            </Link>
          </h1>
        </div>
        <div className="right menu">
          <Link href="/create">
            <a className="ui item" href="">
              Create a Meetup
            </a>
          </Link>
        </div>
      </div>
    </nav>
    <div style={{ paddingTop: '30px', paddingBottom: '30px' }}>{children}</div>
  </div>
);

export default Layout;
