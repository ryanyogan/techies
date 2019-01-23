import React from 'react';
import Link from 'next/link';

const SignUp = () => (
  <div className="ui stackable three column centered grid container">
    <div className="column">
      <h3 className="ui horizontal divider header">Sign Up</h3>
      <form className="ui form" method="POST">
        <div className="field">
          <label>Name</label>
          <input type="text" v-model="name" />
        </div>
        <div className="field">
          <label>Email address</label>
          <input type="email" v-model="email" />
        </div>
        <div className="field">
          <label>Password</label>
          <input type="password" v-model="password" />
        </div>
        <button className="fluid ui primary button">Sign Up</button>
      </form>
      <div className="ui divider" />
      <div className="ui column grid">
        <div className="center aligned column">
          Already got an account?{' '}
          <Link href="/login">
            <a>Log In</a>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default SignUp;
