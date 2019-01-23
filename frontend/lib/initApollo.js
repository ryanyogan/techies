import { ApolloClient, InMemoryCache } from 'apollo-boost';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import fetch from 'isomorphic-unfetch';

let apolloClient = null;

// Pollyfill fetch on the server (SSR)
if (!process.browser) {
  global.fetch = fetch;
}

const create = (initialState, { getToken }) => {
  const httpLink = createHttpLink({
    uri: 'https://us1.prisma.sh/ryan-yogan/techies/dev', // @fixme ENV var
    credentials: 'same-origin',
  });

  const authLink = setContext((_, { headers }) => {
    const token = getToken();
    return {
      ...headers,
      Authorization: token ? `Bearer ${token}` : '',
    };
  });

  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser, // Disable force-fetch on server
    link: authLink.concat(httpLink),
    cache: new InMemoryCache().restore(initialState || {}),
  });
};

export default (initialState, options) => {
  // We will make a new client for every SSR so the data
  // is not shared between connections.
  if (!process.browser) {
    return create(initialState, options);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState, options);
  }
};
