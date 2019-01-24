import React, { Component } from "react";
import { Mutation } from "react-apollo";
import Router from "next/router";
import Link from "next/link";

import { LOGIN_MUTATION } from "../../graphql/mutations";

class Login extends Component {
  state = {
    email: "",
    password: "",
  };

  onChange = (e: any) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = async (e: any, login: any) => {
    e.preventDefault();

    try {
      const response = await login({
        variables: {
          email: this.state.email,
          password: this.state.password,
        },
      });

      localStorage.setItem("USER_TOKEN", response.data.login.token);
      Router.push("/");
    } catch (error) {
      throw new Error(error);
    }
  };

  render() {
    return (
      <Mutation mutation={LOGIN_MUTATION}>
        {login => (
          <div className="ui stackable three column centered grid container">
            <div className="column">
              <h3 className="ui horizontal divider header">Log In</h3>
              <form
                className="ui form"
                method="POST"
                onSubmit={e => this.onSubmit(e, login)}
              >
                <div className="field">
                  <label>Email address</label>
                  <input
                    type="email"
                    name="email"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <div className="field">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    onChange={this.onChange}
                    required
                  />
                </div>
                <button className="fluid ui primary button">Log In</button>
              </form>
              <div className="ui divider" />
              <div className="ui column grid">
                <div className="center aligned column">
                  Don't have an account?{" "}
                  <Link href="/signup">
                    <a>Sign Up</a>
                  </Link>
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
