import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';

import { LOGIN_MUTATION } from '../../graphql/mutations';

class Login extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e, login) => {
    e.preventDefault();

    try {
      const response = await login({
        variables: {
          email: this.state.email,
          password: this.state.password,
        },
      });

      localStorage.setItem('USER_TOKEN', response.data.login.token);
      Router.replace('/');
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <Mutation mutation={LOGIN_MUTATION}>
        {login => (
          <div class="ui stackable three column centered grid container">
            <div class="column">
              <h3 class="ui horizontal divider header">Log In</h3>
              <form
                class="ui form"
                method="POST"
                onSubmit={() => this.onLogin(e, login)}
              >
                <div class="field">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    required
                  />
                  >
                </div>
                <div class="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    required
                  />
                  >
                </div>
                <button class="fluid ui primary button">Log In</button>
              </form>
              <div class="ui divider" />
              <div class="ui column grid">
                <div class="center aligned column">
                  Don't have an account?{' '}
                  <router-link to="/signup">Sign Up</router-link>
                </div>
              </div>
            </div>
          </div>
        )}
      </Mutation>
    );
  }
}

export default Login;
