import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import Link from 'next/link';
import { SIGNUP_MUTATION } from '../../graphql/mutations';

class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  onSubmit = async (e, signup) => {
    e.preventDefault();

    try {
      const response = await signup({
        variables: {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
        },
      });

      localStorage.setItem('USER_TOKEN', response.data.signup.token);

      Router.replace('/');
    } catch (error) {
      console.log(error);
    }
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    return (
      <Mutation mutation={SIGNUP_MUTATION}>
        {signup => {
          return (
            <div className="ui stackable three column centered grid container">
              <div className="column">
                <h3 className="ui horizontal divider header">Sign Up</h3>
                <form
                  className="ui form"
                  method="POST"
                  onSubmit={e => this.onSubmit(e, signup)}
                >
                  <div className="field">
                    <label>Name</label>
                    <input type="text" name="name" onChange={this.onChange} />
                  </div>
                  <div className="field">
                    <label>Email address</label>
                    <input type="email" name="email" onChange={this.onChange} />
                  </div>
                  <div className="field">
                    <label>Password</label>
                    <input
                      type="password"
                      name="password"
                      onChange={this.onChange}
                    />
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
        }}
      </Mutation>
    );
  }
}

export default SignUp;
