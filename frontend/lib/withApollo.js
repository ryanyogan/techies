import React from 'react';
import cookie from 'cookie';
import { object } from 'prop-types';
import { getDataFromTree } from 'react-apollo';
import Head from 'next/head';

import initApollo from './initApollo';

const parseCookies = (req, options = {}) =>
  cookie.parse(req ? req.headers.cookie || '' : document.cookie, options);

export default App => {
  return class WithData extends React.Component {
    static displayName = `WithData(${App.displayName})`;
    static propTypes = {
      apolloState: object.isRequired,
    };

    static async getInitialProps(ctx) {
      const {
        Component,
        router,
        ctx: { req, res },
      } = ctx;

      const apollo = initApollo(
        {},
        {
          getToken: () => parseCookies(req).token,
        }
      );

      ctx.ctx.apolloClient = apollo;

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      if (res && res.finished) {
        // Redirection in process, cancel render
        return {};
      }

      if (!process.browser) {
        // Run all GQL in the componenet tree
        // extract the resulting data
        try {
          await getDataFromTree(
            <App
              {...appProps}
              Component={Component}
              router={router}
              apolloClient={apollo}
            />
          );
        } catch (err) {
          // Stop apollo from crashing SSR
          // Handle them in components via data.error props
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call CWU
        // head side-effect needs to be cleared
        Head.rewind();
      }

      // Extract query data from Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    constructor(props) {
      super(props);

      this.apolloClient = initApollo(props.apolloState, {
        getToken: () => {
          return parseCookies().token;
        },
      });
    }

    return() {
      return <App {...this.props} apolloClient={this.apolloClient} />;
    }
  };
};
